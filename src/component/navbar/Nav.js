import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap"
import './Nav.css'
const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
           <Container>
               <Navbar.Brand href="#home">
                   Webiix</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto">
                       <Nav.Link href="#home" className="home">Accueil</Nav.Link>
                       <Nav.Link href="#link">Vos besoins</Nav.Link>
                       <Nav.Link href="#link">Nos réalisations</Nav.Link>
                       <Nav.Link href="#link">Contactez-nous</Nav.Link>
                   </Nav>
               </Navbar.Collapse>
           </Container>
        </Navbar>
    )

}

export default Menu;