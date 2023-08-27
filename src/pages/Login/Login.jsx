import { Button, Container, Form } from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../rtk/slices/authSlice';

export default function Login() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3004/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  function handleLogin(){
    const obj = users.find(user => user.email == formData.email && user.password == formData.password);
    if(obj){
      dispatch(login(obj.id))
    } else {
      console.log('Wrong username or password');
    }
  }

  function submitHandler(e) {
    e.preventDefault(); 
    handleLogin(formData);
  }

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Container className='my-5'>
      <Form className='user__form' onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={changeHandler} />
        </Form.Group>

        <Form.Group className='mb-2' controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={changeHandler} />
        </Form.Group>
        <div className="mb-3">
          Don{"'"}t Have and account? <Link to='/register'>Create new account</Link>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me!" />
          </Form.Group>
          <Button className='px-4' variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  )
}
