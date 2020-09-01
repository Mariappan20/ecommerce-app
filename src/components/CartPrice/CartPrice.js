import React from 'react';
import { Modal } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';


import './CartPrice.css';
import { cartTotal} from '../../context/reducer';

const CartPrice = ( props ) => {
	return (
		<div className="cartPrice">
			<div >
				<h6 className="cartPrice__title">PRICE DETAILS</h6>
			</div>	
			
			<CurrencyFormat 
				value={cartTotal(props.cart)} 
				displayType={'text'} 
				thousandSeparator={true} 
				prefix={'₹'}
				renderText={value => 
				<div>
					<h6>Subtotal ({ props.cart.length } item(s) ) : <strong>{value}</strong></h6>
				</div>} />
			<button className="cartPrice__placeOrder"  onClick={props.clicked}>Place Order</button>	
			<Modal show={props.show}  onHide={props.closed}>
				<Modal.Header closeButton>
					<Modal.Title>
						<div className="cartPrice__modalTitle">
							<h5>E-Shop</h5>
						</div>
						
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					 <p className="cartPrice__modalContent">
						Your order placed successfully!!
					</p>	
						
				</Modal.Body>
			</Modal>
			
		</div>
	);
}

export default CartPrice;