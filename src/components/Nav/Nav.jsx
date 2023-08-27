
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../rtk/slices/authSlice';

export default function Navb() {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(logout())
  }

  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
          {isAuth ? 
            <div className='d-flex justify-content-between gap-2 align-items-center justify-content-between w-100'>
              <div className='d-flex gap-4'>
                <NavLink className='nav__link text-decoration-none text-black' to='/'>Home</NavLink>
                <NavLink className='nav__link text-decoration-none text-black' to='/products'>Shop</NavLink>
                <NavLink className='nav__link text-decoration-none text-black' to='/cart'>Cart</NavLink>
              </div>
              <Button variant='primary' onClick={handleLogout}>Logout</Button>
            </div> : <div className='d-flex gap-3 justify-content-end'>
            <Link className='nav__link text-decoration-none text-black' to='/login'>Login</Link>
            <Link className='nav__link text-decoration-none text-black' to='/register'>Register</Link>
          </div>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
