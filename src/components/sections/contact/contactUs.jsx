import React from 'react';
import { Row, Col, Container } from 'bootstrap-4-react';

import { ContactForm } from './contactForm';
import { Maps } from './maps';

export const ContactUs = () => 
    <Container>
        <h4>Don't hesitate to get in touch</h4>
        <p>You can phone us, email us, or come to <br/>meet us at our office</p>  
        
            <Row>
                <Col col="5">
                    <ContactForm />
                </Col>
                <Col col="6" offset="1">
                    <Maps />
                </Col>
            </Row>
    </Container>