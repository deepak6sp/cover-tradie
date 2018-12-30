import React from 'react';
import { Container, Navbar, Nav, Collapse } from 'bootstrap-4-react';

export const Navigation = () =>
    
    <Navbar expand="lg" light bg="light">
        <Container>
            <Navbar.Brand href="#">
                Navbar
            </Navbar.Brand>
            <Navbar.Toggler target="#navbarSupportedContent" />
            <Collapse navbar id="navbarSupportedContent" className="justify-content-end">
                <Navbar.Nav>
                    <Nav.Item active>
                        <Nav.Link href="#">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Why Choose Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Make a Claim</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">About Us</Nav.Link>
                    </Nav.Item>
                </Navbar.Nav>
            </Collapse>
        </Container>
    </Navbar>;