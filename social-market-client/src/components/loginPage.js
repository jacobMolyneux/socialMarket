import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const LogInPage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <Container className="m-3">
      <Form className="border shadow p-3">
        <h1>Log In</h1>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label> Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button>Log In</Button>
      </Form>
    </Container>
  );
};

export { LogInPage };
