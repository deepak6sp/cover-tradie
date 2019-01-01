import React from 'react';
import { Row, Col, Jumbotron } from 'bootstrap-4-react';

export const AboutUs = () => 
    <Jumbotron>
        <h4 className="inverse">About us</h4>
        <Row>
            <Col col="6" offset="3">
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry standard dummy text 
                ever since the 1500s</p>
            </Col>
        </Row>
    </Jumbotron>