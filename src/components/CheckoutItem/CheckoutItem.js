import React from 'react';

import './CheckoutItem.css';

const CheckoutItem = props => {
	return (
		<div className="checkoutItem">
			<div>
				<img  className="checkoutItem__image" src={`../assets/images/${props.src}.jpg`} alt="product"   />
			</div>
			<div>
				<p>{props.name}</p>
				<p className="checkoutItem__price">&#8377; {props.price}</p>
				<button className="checkoutItem__remove" onClick={props.clicked}>
					Remove from Cart
			</button>
			</div>
		</div>
	);
}

export default CheckoutItem;