
import { NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {useCartContext} from '../AppContext/CartContext'



function NavBar(){

    const {cartIcon} = useCartContext()

    return( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>                
                </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">  
                    <Nav.Link className="ml-2" >
                        <NavLink to="/category/Bows" style={{textDecoration: 'none'}} className="text-secondary"  activeClassName="text-white">
                            Bows                            
                        </NavLink>
                    </Nav.Link> 
                    <Nav.Link className="ml-2">
                        <NavLink to="category/Weapon" style={{textDecoration: 'none'}} className="text-secondary"  activeClassName="text-white">
                                Weapons                          
                        </NavLink>                
                    </Nav.Link> 
                    <Nav.Link className="ml-2">
                        <NavLink to={`/cart`} style={{textDecoration: 'none'}} className="text-secondary"  activeClassName="text-white">
                            {cartIcon()}    Cart 
                        </NavLink>                
                    </Nav.Link> 
                    
                </Nav>                
            </Navbar.Collapse>
            </Container>            
        </Navbar>
    )
}
export default NavBar
