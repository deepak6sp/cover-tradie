import React from 'react';
import { Container, Navbar, Nav } from 'bootstrap-4-react';
import Icons from '../svg/icons.jsx';
import { SocialLinks } from './socialLinks';

export const TopBar = () =>
    
    <Navbar className="topbar">
        <Container>
            <Navbar.Nav className="left" display="flex" flex="row">
                <Nav.ItemLink><img alt="phone" src={Icons.phone} />(03) 0000 0000</Nav.ItemLink>
                <Nav.ItemLink><img alt="email" src={Icons.email} />mail@mail.com</Nav.ItemLink>
            </Navbar.Nav>
            <Navbar.Nav display="flex" flex="row" className="right">
               <SocialLinks />
            </Navbar.Nav>
        </Container>
    </Navbar>;