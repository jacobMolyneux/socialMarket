import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogInPage } from "./components/loginPage";
import { RegisterPage } from "./components/registerPage";
import { Homepage } from "./pages/homepage";
import { InfluencerPage } from "./pages/influencerPage";

function App() {
  return (
    <div className="App">
      <Nav varient="tabs">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/influencer">Influencer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register"> Register </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login"> Log In</Nav.Link>
          </Nav.Item>
        </Nav.Item>
      </Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/influencer" element={<InfluencerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
