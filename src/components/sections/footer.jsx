import React from 'react';
import { Container, Navbar, Nav } from 'bootstrap-4-react';
import { Subscribe } from '../UI/subscribe';
import { SocialLinks } from '../UI/socialLinks';


export const Footer = () => 
    <footer>
        <Subscribe />
        <Navbar dark bg="dark">
            <Container>
                <Navbar.Nav flex="row">
                    <Nav.ItemLink mr="4">Terms & services</Nav.ItemLink>
                     <Nav.ItemLink>Privacy Policy</Nav.ItemLink>
                </Navbar.Nav>
                <Navbar.Nav>
                    <Nav.ItemLink>Copyright @ 2015 - 2018 CT</Nav.ItemLink>
                </Navbar.Nav>
                <Navbar.Nav className="follow-us">
                    <p>Follow Us</p>
                    <SocialLinks />
                </Navbar.Nav>
            </Container>
        </Navbar>
    </footer>;