import React from 'react';
import { CartFill } from 'react-bootstrap-icons';

import './Product.css';

const Product = (props) => {
	
	return (

		<div className="productCard">
			<div>
				<img src={`../assets/images/${props.src}.jpg`} alt="product"  height="250" weight="250" />
			</div>
			<div className="productCard__content">
				<p className="marg-top marg-btm">{props.name}</p>
				<div className="marg-top">
					<small>&#8377; </small>
					<strong>{props.price}</strong>
				</div>
			</div>
			<div className="marg-top">
				<button className="productCard__button" onClick={props.clicked}>
					<CartFill size={19} className="productCard__cartIcon" />
						Add to Cart
				</button>
			</div>
			
		</div>
		
	);
}

export default Product;