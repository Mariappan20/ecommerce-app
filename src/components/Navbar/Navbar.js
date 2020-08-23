import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Search, CartFill } from 'react-bootstrap-icons';
// import SearchIcon from '@material-ui/icons/Search';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navBar">
            <Container>
                <Row>
                    {/* site name */}
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}className="textCenter">
                        <Link to="/login" className="navBar__siteName">E-Shop</Link>
                    </Col>

                    {/* search input */}
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} className="navBar__search">
                        <input type="text" className="navBar__searchInput" />
					    <div className="navBar__searchIconHolder">
						   <Search size={18} className="navBar__searchIcon" />
						</div>
						
                    </Col>

                    {/* login */}
                    <Col xs={3} sm={3} md={2} lg={2} xl={2} className="textCenter" >
                        <Link to="/login"  className="navBar__link">Login</Link>
                    </Col>

                    {/* cart */}
                    <Col xs={4} sm={4} md={2} lg={2} xl={2} className="textCenter" >
						<CartFill size={17} className="navBar__cartIcon"/>
						<span className="navBar__cart">
						  <Link to="/cart" className="navBar__link">Cart</Link>
						</span>
						<span className="navBar__cartCount">(0)</span>
					</Col>
                </Row>
            </Container>
        </nav>
   /*    <nav className="navbar">
           {/!* site title*!/}
           <Link to="/login" className="navbar__title">
               E-Shop
           </Link>

           {/!*  searchbar  *!/}
           <div className="navbar__search">
               <input type="text" className="navbar__searchInput" />
               <SearchIcon className="navbar__searchIcon" />
           </div>

           {/!*  login   *!/}
           <Link to="/login" className="navbar__link">
               Login
           </Link>

           {/!*  add to cart   *!/}
           <Link>
               Cart
           </Link>
       </nav>*/
    );
}

export default Navbar;