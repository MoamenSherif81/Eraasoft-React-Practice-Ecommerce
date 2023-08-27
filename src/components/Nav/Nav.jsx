
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom';

export default function Navb() {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
            <div className='d-flex gap-3'>
              <NavLink className='nav__link text-decoration-none text-black' to='/'>Home</NavLink>
              <NavLink className='nav__link text-decoration-none text-black' to='/products'>Shop</NavLink>
              <NavLink className='nav__link text-decoration-none text-black' to='/cart'>Cart</NavLink>
            </div>
            <div className='d-flex gap-3'>
              <Link className='nav__link text-decoration-none text-black' to='/login'>Login</Link>
              <Link className='nav__link text-decoration-none text-black' to='/register'>Register</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
