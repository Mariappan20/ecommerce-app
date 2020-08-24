import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Product.css';

const Product = (props) => {
	return (
		<Container >
			<Row className="product">
				<Col md={4} lg={3} xl={3}  className="pad__zero" >
					<div className="product__card">
						<div>
							<img src={`../assets/images/${props.src}.jpg`} height="250" weight="250" />
						</div>
						<div>
							<small>{props.name}</small>
							<p>&#8377; {props.price}</p>
						</div>
					</div>
				</Col>		
			</Row>
		</Container>
	);
}

export default Product;