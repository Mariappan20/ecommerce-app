import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { auth } from '../../firebase';


import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Product from '../../components/Product/Product';
import Loader from '../../components/Loader/Loader';
import { useStateValue } from '../../context/StateProvider';

const Home = (props) => {
	
	const [{ cart, products}, dispatch ] = useStateValue();
	const [{ authUser} ] = useStateValue();
	const [ loader, setLoader ] = useState(false);
	
	

	const history = useHistory();
	
	useEffect(() => {
		setLoader(true);
		axios.get('https://ecommerce-app-d855d.firebaseio.com/listProducts.json')
		 .then(response => { 
				
				const products = [];
                for ( let key in response.data ) {
                    products.push(
                        {
                            ...response.data[key],
							id: key
                           
                        });
                }
				dispatch({
					type: 'LIST_PRODUCTS',
					products: products
				});
				setLoader(false);
				
				})
		 .catch( err => { 
			setLoader(false)
			
			});
	},[]);
	

	
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
							{ loader ? <Loader /> :
								products.map( products => (
									<Col md={4} lg={3} xl={3}  className="pad__zero" >
										<Product key={products.id} name={products.name}
											price={products.price}
											src={products.src}
											clicked={( id ) => addToCartHandler(products.id)}
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