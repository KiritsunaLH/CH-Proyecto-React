import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";
import {useCartContext} from '../AppContext/CartContext'


function NavBar(){

    const {cartIcon} = useCartContext()

    return( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>                
                </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/category/Bows">
                            Bows
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/category/Weapon'}>
                            Weapons
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to={`/cart`} style={{textDecoration: 'none'}} className="text-secondary ml-2"  activeClassName="text-white">
                            {cartIcon()}    Cart 
                    </Link>  
                </Nav>                
            </Navbar.Collapse>          
        </Navbar>
    )
}
export default NavBar
