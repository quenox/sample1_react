import { Navbar, Nav, Container } from 'react-bootstrap';
import "./CustomNav.css";
import SearchMovie from '../searchMovie/SearchMovie';

function CustomNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='px-4'>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand><i className="fas fa-film"></i></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/eugenio-peredo-719829264/">Linkedin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            <Navbar.Brand>
                <SearchMovie />
            </Navbar.Brand>
        </Container>
    </Navbar>

  );
}

export default CustomNav;
