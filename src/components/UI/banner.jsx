import React from 'react';
import { Row, Col, Container, Jumbotron, Display4, Lead } from 'bootstrap-4-react';
import { CTButton } from './button';

export const Banner = () => 
    <Jumbotron style={{textAlign: 'left'}}>
        <Container>
            <Row>
                <Col col="col lg-6">
                    <Display4>Insurance do matter</Display4>
                    <Lead>This is a simple banner unit.</Lead>
                    <CTButton text="Get a quote"/>
                </Col>
            </Row>
        </Container>
    </Jumbotron>