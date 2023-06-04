import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CustomFooter() {
  return (
    <footer className="bg-dark text-light pt-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Info.</h5>
            <p>Phone: +123456789</p>
            <p>Email: info@example.com</p>
          </Col>
          <Col md={6}>
            <h5>Links</h5>
            <ul>
              <li style={{marginBottom: '10px'}}><a href="https://github.com/quenox/"><i class="fa-brands fa-github" style={{color: 'white', backgroundColor: '#6a737d', padding: '4px'}}></i></a></li>
              <li><a href="https://www.linkedin.com/in/eugenio-peredo-719829264/"><i class="fab fa-linkedin-in" style={{color: 'white', backgroundColor: '#0077B5', padding: '4px'}}></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} React Demo.1
      </div>
    </footer>
  );
}

export default CustomFooter;
