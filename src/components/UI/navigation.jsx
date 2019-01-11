import React from 'react';
import { Container, Navbar, Nav, Collapse } from 'bootstrap-4-react';
import { Link } from 'react-scroll';
import logo from './logo.png';

export const Navigation = () =>
    
    <Navbar expand="lg" light bg="light" className="navigation">
        <Container>
            <Navbar.Brand href="#">
                <img width="150" src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggler target="#navbarSupportedContent" />
            <Collapse navbar id="navbarSupportedContent" className="justify-content-end">
                <Navbar.Nav>
                    <Nav.Item active>
                        <Link to="productSpecialization" spy={true} smooth={true} duration={500} >Products</Link>
                        {/* <Nav.Link href="#">Products</Nav.Link> */}
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="chooseUs" spy={true} smooth={true} duration={500} >Why Choose Us</Link>
                    </Nav.Item>
                    {/*
                    <Nav.Item>
                        <Nav.Link href="#">Make a Claim</Nav.Link>
                    </Nav.Item>
                    */}
                    <Nav.Item>
                        <Link to="contactUs" spy={true} smooth={true} duration={500} >Contact Us</Link>
                    </Nav.Item>
                    {/*
                    <Nav.Item>
                        <Nav.Link href="#">About Us</Nav.Link>
                    </Nav.Item>
                    */}
                </Navbar.Nav>
            </Collapse>
        </Container>
    </Navbar>;