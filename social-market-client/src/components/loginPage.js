import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const LogInPage = () => {
  return (
    <Container className="m-3">
      <Form className="border shadow p-3">
        <h1>Log In</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label> Password</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Button>Log In</Button>
      </Form>
    </Container>
  );
};

export { LogInPage };
