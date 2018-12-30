import React from 'react';
import { Row, Col } from 'bootstrap-4-react';
import { PrimaryButton } from '../../UI/button';

export const ContactForm = () => 
        <Row>
            <Col col="12">
                <Row>
                    <Col col="12" display="flex" flex="column" alignItems="start">
                        <label>Name</label>
                        <input />
                    </Col>
                </Row>
                <Row>
                    <Col col="12" display="flex" flex="column" alignItems="start">
                        <label>How can we help you</label>
                        <select />
                    </Col>
                </Row>
                <Row>
                    <Col col="12" display="flex" flex="column" alignItems="start">
                        <label>Address</label>
                        <textarea />
                    </Col>
                </Row>
                <Row>
                    <Col col="12" display="flex" flex="column" alignItems="start">
                        <label>Message</label>
                        <textarea />
                    </Col>
                </Row>
                <Row>
                    <Col display="flex" flex="column" alignItems="start">
                        <PrimaryButton text="Send"/>
                    </Col>
                </Row>
            </Col>
        </Row>;