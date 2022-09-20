import "./topbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ExternalLink } from "react-external-link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Topbar() {
  return (
    <Navbar expand="lg" sticky="top" className="topbar">
      <Container>
        <Navbar.Brand href="/">wine-not</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar">
            <Nav className="socialNav">
              <ExternalLink href="https://www.facebook.com/">
                <FaFacebook className="icon" />
              </ExternalLink>
              <ExternalLink href="https://www.youtube.com/">
                <FaYoutube className="icon" />
              </ExternalLink>
              <ExternalLink href="https://www.instagram.com/">
                <FaInstagramSquare className="icon" />
              </ExternalLink>
              <ExternalLink href="https://www.twitter.com/">
                <FaTwitterSquare className="icon" />
              </ExternalLink>
            </Nav>
            <Nav className="mainNav">
              <Nav.Link href="/" className="topMenuCategory">
                Home
              </Nav.Link>
              <Nav.Link href="/catalogue" className="topMenuCategory">
                Catalogue
              </Nav.Link>
              <Nav.Link href="/blog" className="topMenuCategory">
                Blog
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
