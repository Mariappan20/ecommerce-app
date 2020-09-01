import React, { useState } from 'react';
import  { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import './Checkout.css';
import Navbar from '../../components/Navbar/Navbar';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import CartPrice from '../../components/CartPrice/CartPrice';
import { useStateValue} from '../../context/StateProvider';
import { cartTotal} from '../../context/reducer';

const Checkout = () => {
	
	const [{ cart }, dispatch ] = useStateValue();
	const [{ authUser} ] = useStateValue();
	const [showModal, setShowModal] = useState(false);
	const history = useHistory();


	const removeFromCartHandler = ( id ) => {
		console.log('removed', id);
		
		dispatch({
			type: "REMOVE_FROM_CART",
			_id: id
			}
		)
	}
	
	const placeOrderHandler = () => {
		setShowModal(true);
		console.log('place order', showModal);
		
		
	}
	
	const logoutHandler = () => {
	if( authUser ) {
		
		dispatch({
			type: 'RESET_CART',
			item: []
		});
		auth.signOut();
		history.push('/');
	}
}

	const closedHandler = () => {
		setShowModal(false);
			dispatch({
			type: 'RESET_CART',
			item: []
		});
		history.push('/');
	}
	
	return (
		<div>
			<Navbar 
				cart={cart.length}
				auth={authUser} 
				logged={logoutHandler}
				
					/>
			<div className="checkout">
				{ cart.length === 0 ? (
					<h4>Your Shopping Cart is Empty</h4>
				) : ( 
					<div>
						
						<Container  >
							<h4>Your Shopping Cart</h4>
							
							<Row>
								<Col md={8} lg={8} xl={8}>
									{cart.map( items => ( 
										<CheckoutItem 
											key={items._id}
											name={items.name} 
											price={items.price}
											clicked={( id ) => removeFromCartHandler( items._id )}	/>
									))
									}
									
								</Col>
								<Col md={4} lg={4} xl={4} >
									<CartPrice cart={cart} 
									clicked={placeOrderHandler}
									show={showModal}
									closed={closedHandler}	/>
								</Col>
							</Row>
						</Container>
						
					</div>
				) }
			</div>
		</div>
	);
}

export default Checkout;