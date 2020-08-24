import React,{ useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import './Home.css';
import Product from '../../components/Product/Product';

const Home = (props) => {
	
	const [ products,setProducts ] = useState([
		{ 
			name: "iPhone 6",
			price: "70000",
			src: "apple"
		},
		{ 
			name: "samsung galaxy j6",
			price: "70000",
			src: "samsung"
		},
		{ 
			name: "asus xen pro",
			price: "80000",
			src: "asus"
		},
		{ 
			name: "asus xen pro",
			price: "80000",
			src: "asus"
		},
		{ 
			name: "asus xen pro",
			price: "80000",
			src: "asus"
		},
		{ 
			name: "asus xen pro",
			price: "80000",
			src: "asus"
		},
		
		
	]);
	return (
				<div className="home">
					<Container>
						<Row>
								{ 
									products.map( products => (
										<Col md={4} lg={3} xl={3}  className="pad__zero" >
											<Product name={products.name}
												price={products.price}
												src={products.src}
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