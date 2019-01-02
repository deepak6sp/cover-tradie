import React from 'react';
import { Row, Col, Container, Jumbotron, Lead } from 'bootstrap-4-react';
import { CTButton } from './button';

export const Banner = () => 
    <Jumbotron className="banner">
        <Container>
            <Row>
                <Col col="col lg-8">
                    <h1>Insurance do matter</h1>
                    <Lead>This is a simple banner unit.</Lead>
                    <CTButton text="Get a quote"/>
                </Col>
            </Row>
        </Container>
    </Jumbotron>