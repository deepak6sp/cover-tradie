import React from 'react';
import { Container, Navbar, Nav } from 'bootstrap-4-react';
import pdf from './tc.pdf';

export const Footer = () => 
    <footer>
        {/* <Subscribe /> */}
        <Navbar dark bg="dark">
            <Container>
                <Navbar.Nav flex="column" text="white center">
                     <p>
                        Cover Tradie Pty Ltd T/As Cover Tradie is a Corporation Authorised Representative
                        (ICAR No 001271499) of Mega Lines Pty Ltd (AFSL No 495082). Mega Lines is the member
                        of the National Insurance Brokers Association (NIBA) and the Steadfast Cluster Group.
                    </p>
                    <Nav.ItemLink href={pdf} target="_blank" download>Terms & services</Nav.ItemLink>
                </Navbar.Nav>
                {/*
                <Navbar.Nav>
                    <Nav.ItemLink>Copyright @ 2015 - 2018 CT</Nav.ItemLink>
                </Navbar.Nav>
                <Navbar.Nav className="follow-us">
                    <p>Follow Us</p>
                    <SocialLinks />
                </Navbar.Nav>
                */}
            </Container>
        </Navbar>
    </footer>;