import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './header.css'
export class Header extends Component {
 
  render() {
    return (
      // <div className="container text-center py-5">
       <Navbar bg="dark" data-bs-theme="dark" className="nav__container">
        <Container>
          <Nav className="me-auto nav__container__links">
            <Nav.Link className="nav_link" href="#home">Home</Nav.Link>
            <Nav.Link className="nav_link" href="#features">About</Nav.Link>
            <Nav.Link className="nav_link" href="#pricing">Contact</Nav.Link>
            <Nav.Link className="nav_link" href="#pricing">Products</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" className=""><img src="src/assets/images/footzone (2).png" alt="" width="50" height="50"/></Navbar.Brand>
        </Container>
      </Navbar>
      // </div>
    );
  }
}
