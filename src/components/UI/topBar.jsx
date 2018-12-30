import React from 'react';
import { Container, Navbar, Nav } from 'bootstrap-4-react';

export const TopBar = () =>
    
    <Navbar dark bg="dark">
        <Container>
            <Navbar.Nav>
                <Nav.ItemLink>Contact</Nav.ItemLink>
            </Navbar.Nav>
             <Navbar.Nav>
                <Nav.ItemLink>social icons</Nav.ItemLink>
            </Navbar.Nav>
        </Container>
    </Navbar>;