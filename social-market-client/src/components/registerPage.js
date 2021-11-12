import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const RegisterPage = () => {
  return (
    <Container>
      <Form className="border p-3">
        <h1>Register</h1>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First"></Form.Control>
          <Form.Label> Last Name</Form.Label>
          <Form.Control type="text" placeholder="last"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password"></Form.Control>
        </Form.Group>
        <Button>Register</Button>
      </Form>
    </Container>
  );
};
export { RegisterPage };
