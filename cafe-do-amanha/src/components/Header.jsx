import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import { FaHome, FaInfoCircle, FaCoffee, FaHistory, FaEnvelope, FaShoppingCart } from 'react-icons/fa';



function Header() {
    return (
        <Navbar expand="lg" bg="brown" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Café do Amanhã</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/"><FaHome /> Início</Nav.Link>
                        <Nav.Link as={Link} to="/sobre-nos"><FaInfoCircle /> Sobre Nós</Nav.Link>
                        <Nav.Link as={Link} to="/menu"><FaCoffee /> Menu</Nav.Link>
                        <Nav.Link as={Link} to="/pedidos"><FaShoppingCart /> Pedidos</Nav.Link>
                        <Nav.Link as={Link} to="/historias"><FaHistory /> Histórias</Nav.Link>
                        <Nav.Link as={Link} to="/contato"><FaEnvelope /> Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
