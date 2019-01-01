import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import { InputGroup, Button, Form } from 'bootstrap-4-react';

export const Subscribe = () =>
    <Container className="subscribe">
        <Row>
            <Col col="col 12 lg-6" text="left" alignItems="center" display="flex">
                <h4> Subscribe to our newsletter </h4>
            </Col>
            <Col col="col 12 lg-6" display="flex">
                <InputGroup mb="3">
                    <Form.Input type="text" placeholder="your email address" />
                    <InputGroup.Append>
                        <Button outline secondary>Subscribe</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    </Container>