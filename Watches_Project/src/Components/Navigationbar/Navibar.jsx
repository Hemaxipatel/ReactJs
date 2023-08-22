import { Heart, ShoppingCart, UserCircle } from 'lucide-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navibar.css'

function Navibar({ search, setSearchText }) {
    return (
        <Navbar expand="lg" className="bg-color">
            <Container>
                <img src="https://technofet.com/timemart/assets/images/logo/logo.png" alt="" className='logo' />
                {/* <Navbar.Brand href="#home">Timemart</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="HOME" id="basic-nav-dropdown" className='txtcolor'>
                            <NavDropdown.Item href="#action/3.1">Home Page 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Home Page 2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PAGES" id="basic-nav-dropdown" className='txtcolor'>
                            <NavDropdown.Item href="#action/3.1">Shop Page</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Product Details</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Checkout Page</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action/3.4">Cart Page</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Wishlist Page</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Login & Register</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="COLLECTIONS" id="basic-nav-dropdown" className='txtcolor'>
                            <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <NavDropdown title="BLOG" id="basic-nav-dropdown" className='txtcolor'>
                            <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Blog Grid</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Blog Details</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <Nav.Link href="#link">ABOUT US</Nav.Link>
                        <Nav.Link href="#link">CONTACT</Nav.Link>
                    </Nav>
                    <div className="cartflex">
                        <div className="wishlist">
                            <a href="" style={{ color: 'white' }}><Heart size={32} /></a>
                        </div>
                        <div className="shop-cart">
                            <a href="" style={{ color: 'white' }}><ShoppingCart size={32} className='me-3' /></a>
                        </div>
                    </div>
                    <div className="user-icon">
                        <a href=""><UserCircle size={32} style={{ color: 'white' }} /></a>
                    </div>
                    {
                        search && <div className="search-input">
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Search product here...' style={{ borderRadius: '5px', border: '1px solid #D14D72 ', outline: 'none', height: '30px', width: '200px', marginLeft: '15px', paddingLeft: '5px' }} />
                        </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navibar;