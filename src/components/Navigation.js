import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../components/navigation.css'
import { BiCart } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = (props) => {
 return (
 <>
 
 <Navbar  style={{backgroundColor:"#0d0d0d"}} expand="lg" sticky="top">
 <Container>
 <Navbar.Brand style={{color:'white'}}><img src="logoo.png" style={{width:"120px"}}></img></Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
 <Nav >
 <Nav.Link><Link  to="/" className="linkss">Home</Link></Nav.Link>
 <Nav.Link><Link  to="/Login" className="linkss">Login</Link></Nav.Link>
 <Nav.Link><Link  to="/Register" className="linkss">Register</Link></Nav.Link>
 <div className="justify-content-end">
 
 </div>

 
 </Nav>
 </Navbar.Collapse>
 <Nav.Link><Link  to="/Basket" className="linkss" ><FaShoppingCart/> Cart{' '}
           </Link></Nav.Link>{props.countCartItems ? (
            <div style={{color:"white"}} >{props.countCartItems}</div>
          ) : ( '' )}

 </Container>
 </Navbar>
 
 </>
 );
}
export default Navigation;