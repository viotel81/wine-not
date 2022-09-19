import './topbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Topbar() {
  return (
    <Navbar expand="lg" sticky="top" className='topbar'>
      <Container>
        <Navbar.Brand href='/home'>Wine-not</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='/home' className='topMenuCategory'>Home</Nav.Link>
            <Nav.Link href='/catalogue' className='topMenuCategory'>Catalogue</Nav.Link>
            <Nav.Link href='/blog' className='topMenuCategory'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar