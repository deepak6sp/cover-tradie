import React from 'react';
import { Row, Col, Jumbotron, Container } from 'bootstrap-4-react';

import { ContactForm } from './contactForm';
import { Maps } from './maps';

export const ContactUs = () => 
    <Jumbotron>
        <h4>Don't hesitate to get in touch</h4>
        <p>You can phone us, email us, or come to <br/>meet us at our office</p>  
        <Container>
            <Row>
                <Col col="5">
                    <ContactForm />
                </Col>
                <Col col="6" offset="1">
                    {/* <Maps /> */}
                </Col>
            </Row>
        </Container>
    </Jumbotron>