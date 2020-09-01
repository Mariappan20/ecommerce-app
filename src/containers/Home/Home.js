import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auth } from '../../firebase';


import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Product from '../../components/Product/Product';
import { useStateValue } from '../../context/StateProvider';

const Home = (props) => {
	
	const [ products,setProducts ] = useState([
		{ 
			_id: 0,
			name: "iPhone 6",
			price: 70000,
			src: "apple"
		},
		{ 
			_id: 1,
			name: "samsung galaxy j6",
			price: 70000,
			src: "samsung"
		},
		{ 
			_id: 2,
			name: "asus xen pro",
			price: 80000,
			src: "asus"
		},
		{ 
			_id: 3,
			name: "asus xen pro",
			price: 80000,
			src: "asus"
		},
		{ 
			_id: 4,
			name: "asus xen pro",
			price: 80000,
			src: "asus"
		},
		{ 
			_id: 5,
			name: "asus xen pro",
			price: 80000,
			src: "asus"
		},
		
		
	]);
	
	const [{ cart}, dispatch ] = useStateValue();
	const [{ authUser} ] = useStateValue();
	
	const history = useHistory();
	
	const addToCartHandler = (id) => {
		
		if(authUser) {
			dispatch({
				type: 'ADD_TO_CART',
				item: products[id]
			});
		}
		
		else {
			
			history.push('/login');
		}
		
	}
	
	const cartClickedHandler = () =>{
		if(authUser) {
			history.push('/checkout');
		}
		else {
			history.push('/login');
		}
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
	
	return (
				<div>
					<Navbar 
						cart={cart.length}
						auth={authUser} 
						logged={logoutHandler}
						cartClicked={cartClickedHandler}	/>
					<Container>
						<Row className="homeContent">
							{ 
								products.map( products => (
									<Col md={4} lg={3} xl={3}  className="pad__zero" >
										<Product key={products._id} name={products.name}
											price={products.price}
											src={products.src}
											clicked={( _id ) => addToCartHandler(products._id)}
										/>
									</Col>	
								) )
							}	
						</Row>
					</Container>
				</div>
			);
}

export default Home;