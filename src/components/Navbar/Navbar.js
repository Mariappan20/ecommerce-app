import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Search, CartFill } from 'react-bootstrap-icons';


import './Navbar.css';

const Navbar = (props) => {
	
	
	return (
        <nav className="navBar">
            <Container>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}className="textCenter">
                        <Link to="/" className="navBar__siteName">E-Shop</Link>
                    </Col>

                   <Col xs={6} sm={6} md={6} lg={6} xl={6} className="navBar__search">
                        <input type="text" className="navBar__searchInput" />
					    <div className="navBar__searchIconHolder">
						   <Search size={18} className="navBar__searchIcon" />
						</div>
					</Col>

                   <Col xs={3} sm={3} md={2} lg={2} xl={2} className="textCenter" >
						<div onClick={props.logged} >
							<Link to={ !props.auth && "/login"}  className="navBar__link">{props.auth ? 'Logout' : 'Login'}</Link>
						</div>
                    </Col>

                    <Col xs={4} sm={4} md={2} lg={2} xl={2} className="textCenter" >
						<div onClick={props.cartClicked}>
							<CartFill size={17} className="navBar__cartIcon"/>
							<span className="navBar__cart">
							  <Link to={!props.auth && "/checkout"}className="navBar__link" >Cart</Link>
							</span>
							<span className="navBar__cartCount" > ({props.cart})</span>
						</div>	
					</Col>
					
                </Row>
            </Container>
        </nav>
	)
}	

export default Navbar;