import { LogInPage } from "./components/loginPage";
import { RegisterPage } from "./components/registerPage";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Nav varient="tabs">
        <Nav.Item>
          <Nav.Link href="/register"> Register </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login"> Log In</Nav.Link>
          </Nav.Item>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
