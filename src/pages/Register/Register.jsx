import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <Container className='my-5'>
      <Form className='user__form'>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name: </Form.Label>
          <Form.Control type="email" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <div className="mb-3">
          Already have an account? <Link to='/login'>Login now</Link>
        </div>
        <div className='d-flex align-items-center justify-content-end'>
          <Button className='px-4' variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  )
}
