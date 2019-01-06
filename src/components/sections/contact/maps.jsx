import React, { Component } from 'react';
import { Row, Col, InputGroup, Button, Form } from 'bootstrap-4-react';
import firebase from '../../../firebase';

const mapStyle = {
    width: "100%",
    height: "300px", 
    frameborder: "0",
    border: "0"
}

export class Maps extends Component {
    onClick() {
        const users = firebase.database().ref('callBack');
        const newUser = users.push();
        newUser.set({
            phone: "0422596332"
        });
    }

    render() {
        return (
            <Row className="maps">
                <Col col="12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5084624671!2d144.4926992714989!3d-37.97015417538286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne+VIC!5e0!3m2!1sen!2sau!4v1546171887657" 
                    title="some" 
                    style={mapStyle}/>
                </Col>
                <Col col="12" text="left">
                    <p>Insurance agency</p>
                    <p>Address</p>
                    <p>Email Address: abd@mail.com</p>
                    <h4>(001) 233-244</h4>
                    <p>
                        Working hours<br/>
                        <span>8:am to 5pm</span>
                    </p>
                    <label>Schedule a call back</label>
                    <InputGroup mb="3">
                        <Form.Input type="text" placeholder="your phone number" />
                        <InputGroup.Append>
                            <Button outline secondary onClick={this.onClick}>Get a phone call</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        )
    }
}
   