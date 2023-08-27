import { Button, Container, Form } from "react-bootstrap";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleAddUser(data){
    fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  
  function submitHandler(e) {
    e.preventDefault();
    if (
      formData.fullName != "" &&
      formData.email != "" &&
      formData.password != "" &&
      formData.password === formData.confirmPassword
    ) {
      delete formData.confirmPassword;
      handleAddUser(formData);
    }
  }

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Container className="my-5">
      <Form className="user__form" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name: </Form.Label>
          <Form.Control
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={changeHandler}
          />
        </Form.Group>
        <div className="mb-3">
          Already have an account? <Link to="/login">Login now</Link>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <Button className="px-4" variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}
