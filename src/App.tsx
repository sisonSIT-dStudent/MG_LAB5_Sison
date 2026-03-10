import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Container fluid className="p-0">
        <Row className="g-0 vh-100">
          
          <Col md={3} lg={2} className="bg-dark text-white d-flex flex-column p-3 shadow">
            <Navbar.Brand className="text-white fs-4 fw-bold mb-4 text-center border-bottom pb-3">
              Student Portal
            </Navbar.Brand>
            
            <Nav variant="pills" className="flex-column gap-2">
              <Nav.Link as={Link} to="/" className="text-white hover-overlay">
                <i className="bi bi-house-door me-2"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/About" className="text-white">
                <i className="bi bi-info-circle me-2"></i> About
              </Nav.Link>
              <Nav.Link as={Link} to="/Services" className="text-white">
                <i className="bi bi-gear me-2"></i> Services
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="text-white">
                <i className="bi bi-envelope me-2"></i> Contact
              </Nav.Link>
            </Nav>

            <div className="mt-auto text-center small text-secondary border-top pt-3">
              © 2026 University IT
            </div>
          </Col>

          <Col md={9} lg={10} className="bg-light overflow-auto">
            <header className="bg-white p-3 shadow-sm mb-4">
              <h5 className="m-0 text-secondary">Dashboard / Page View</h5>
            </header>
            
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </Container>
          </Col>

        </Row>
      </Container>
    </Router>
  );
}

export default App;