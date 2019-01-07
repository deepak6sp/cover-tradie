import React, {Component} from 'react';
import { Row, Col } from 'bootstrap-4-react';
import { CTButton } from '../../UI/button';
import firebase from '../../../firebase';

export class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: {
                name: '',
                help: '',
                address: '',
                message: ''
            },
            existingContacts: {}
        }
    }
    componentDidMount() {
        this.showResults();
    }

    showResults = () => {
        var ref = firebase.database().ref('contacts');
        ref.on('value', (snapshot) => {
            const childData = [];
            snapshot.forEach(function(childSnapshot) {
                childData.push(childSnapshot.val());
            });
            this.setState({existingContacts: childData});
        });
    }

    onClick = () => {
        const users = firebase.database().ref('contacts');
        const newUser = users.push();
        newUser.set({
            name: this.state.contacts.name,
            help: this.state.contacts.help,
            address : this.state.contacts.address,
            message: this.state.contacts.message
        });

        this.showResults();
    }

    handleName = (e) => {
        this.setState({contacts: {...this.state.contacts, name: e.target.value}});
    }

    handleHelp = (e) => {
        this.setState({contacts: {...this.state.contacts, help: e.target.value}});
    }

    handleAddress = (e) => {
        this.setState({contacts: {...this.state.contacts, address: e.target.value}});
    }

    handleMessage = (e) => {
        this.setState({contacts: {...this.state.contacts, message: e.target.value}});
    }

    render() {
        return (
            <Row className="contactForm">
                <Col col="12 lg-11">
                    <Row>
                        <Col col="12" display="flex" flex="column" alignItems="start">
                            <label>Name</label>
                            <input value={this.state.name} onBlur={this.handleName}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col col="12" display="flex" flex="column" alignItems="start">
                            <label>How can we help you</label>
                            <select value={this.state.help} onBlur={this.handleHelp}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col col="12" display="flex" flex="column" alignItems="start">
                            <label>Address</label>
                            <textarea rows="6" value={this.state.address} onBlur={this.handleAddress}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col col="12" display="flex" flex="column" alignItems="start">
                            <label>Message</label>
                            <textarea rows="6" value={this.state.message} onBlur={this.handleMessage}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col display="flex" flex="column" alignItems="start">
                            <CTButton text="Send" onClick={this.onClick}/>
                        </Col>
                    </Row>
                    <strong>Results</strong><br/>
                    {
                        this.state.existingContacts.length > 0 &&
                        this.state.existingContacts.map((contact, i) => 
                                <div key={i}>{i+1}. {contact.name} - {contact.address} - {contact.message}</div>
                        )
                    }
                </Col>
            </Row>
        )
    }
} 
        