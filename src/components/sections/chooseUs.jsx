import React, { Component } from 'react';
import { Row, Col, Jumbotron, Container } from 'bootstrap-4-react';
import Icons from '../svg/icons.jsx';

const chooseItems = [
    {
        icon: 'trust',
        description: 'Trusted over 1million people',
        caption: 'The name that people trust'
    },
    {
        icon: 'eClaim',
        description: 'Easy claim',
        caption: 'Easy claim procedures with no assle'
    },
    {
        icon: 'dClaim',
        description: 'Direct claim settlement',
        caption: 'lorem ip sum'
    },
    {
        icon: 'money',
        description: 'Save your money',
        caption: 'lorem ip sum'
    },
    {
        icon: 'support',
        description: 'Best support',
        caption: 'lorem ip sum'
    },
    {
        icon: 'policy',
        description: 'Instant online policy',
        caption: 'lorem ip sum'
    }
];

export class ChooseUs extends Component {

    chooseItems = () => {
        return (
            chooseItems.map( (item, index) => {
                let offsetClassValue = "lg-1";
                if( index%2 === 0 ) offsetClassValue = "lg-2";
                return (
                    <Col col="12 md-6 lg-5" offset="lg-1" key={index}>
                        <Row className='choose-items'> 
                            <Col col="2" >
                                <img alt={item.icon} src={Icons[item.icon]}/>
                            </Col>
                            <Col col="10">
                                <div className="text">{item.description}</div>
                                <div className="subText">{item.caption}</div>
                            </Col>
                        </Row>
                    </Col>
                )
            })
        )
    }

    render() {
        return  (
            <Jumbotron className="chooseUs">
                <Container>
                <h4 className="inverse">Why choose us</h4>
                <Row>
                    { this.chooseItems() }
                </Row>
                </Container>
            </Jumbotron>
        )
    }
    
}