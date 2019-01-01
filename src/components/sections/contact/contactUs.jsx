import React from 'react';
import { Row, Col, Container } from 'bootstrap-4-react';

import { ContactForm } from './contactForm';
import { Maps } from './maps';

export const ContactUs = () => 
    <Container className="contactUs">
        <h4>Don't hesitate to get in touch</h4>
        <p>You can phone us, email us, or come to <br/>meet us at our office</p>  
        <Row>
            <Col col="12 lg-6">
                <ContactForm />
            </Col>
            <Col col="12 lg-6">
                <Maps />
            </Col>
        </Row>
    </Container>