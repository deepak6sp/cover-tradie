import React from 'react';
import { Container, Navbar, Nav } from 'bootstrap-4-react';
import { Subscribe } from '../UI/subscribe';

export const Footer = () => 
    <div>
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
                <Navbar.Nav>
                    <Nav.ItemLink>social icons</Nav.ItemLink>
                </Navbar.Nav>
            </Container>
        </Navbar>
    </div>;