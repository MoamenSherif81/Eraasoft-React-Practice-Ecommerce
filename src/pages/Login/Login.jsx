import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <Container className='my-5'>
      <Form className='user__form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className='mb-2' controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="mb-3">
          Don't Have and account? <Link to='/register'>Create new account</Link>
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
