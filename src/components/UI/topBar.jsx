import React from 'react';
import { Container, Navbar, Nav } from 'bootstrap-4-react';

const topBarstyle = {
    backgroundColor: '#2A2975'
}

export const TopBar = () =>
    
    <Navbar dark style={topBarstyle} >
        <Container>
            <Navbar.Nav>
                <Nav.ItemLink>Contact</Nav.ItemLink>
            </Navbar.Nav>
             <Navbar.Nav>
                <Nav.ItemLink>social icons</Nav.ItemLink>
            </Navbar.Nav>
        </Container>
    </Navbar>;