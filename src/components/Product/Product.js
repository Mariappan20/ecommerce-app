import React from 'react';

import './Product.css';

const Product = (props) => {
	return (

		<div className="productCard">
			<div>
				<img src={`../assets/images/${props.src}.jpg`} height="250" weight="250" />
			</div>
			<div>
				<small>{props.name}</small>
				<p>&#8377; {props.price}</p>
			</div>
		</div>
		
	);
}

export default Product;