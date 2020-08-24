import React from 'react';

import './Home.css';
import Product from '../../components/Product/Product';

const Home = (props) => {
	return (
				<div className="home">
					<Product name="iPhone 6" price="70000" src="apple" />	
					<Product name="samsung galaxy j6" price="7000" src="samsung" />	
					<Product name="asus xen pro" price="80000" src="asus" />	
					<Product name="asus xen pro" price="80000" src="apple" />	
					<Product name="asus xen pro" price="80000" src="apple" />	
				</div>
			);
}

export default Home;