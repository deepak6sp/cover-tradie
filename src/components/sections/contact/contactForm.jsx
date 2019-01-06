import React, {Component} from 'react';
import { Row, Col } from 'bootstrap-4-react';
import { CTButton } from '../../UI/button';
import firebase from '../../../firebase';

export class ContactForm extends Component {
    onClick() {
        const users = firebase.database().ref('contacts');
        const newUser = users.push();
        newUser.set({
            name: "test",
            help: "car insurance",
            address : "some address",
            message: "need help with car insurance"
        });
    }
    render() {
        return (
            <Row className="contactForm">
                <Col col="12 lg-11">
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
                            <textarea rows="6"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col col="12" display="flex" flex="column" alignItems="start">
                            <label>Message</label>
                            <textarea rows="6"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col display="flex" flex="column" alignItems="start">
                            <CTButton text="Send" onClick={this.onClick}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
} 
        