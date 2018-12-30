import React from 'react';
import { Row, Col, Jumbotron } from 'bootstrap-4-react';

const chooseItems = [
    {
        description: 'Trusted over 1million people',
        caption: 'The name that people trust'
    },
    {
        description: 'Easy claim',
        caption: 'Easy claim procedures with no assle'
    },
    {
        description: 'Direct claim settlement',
        caption: 'lorem ip sum'
    },
    {
        description: 'Save your money',
        caption: 'lorem ip sum'
    },
    {
        description: 'Best support',
        caption: 'lorem ip sum'
    },
    {
        description: 'Instant online policy',
        caption: 'lorem ip sum'
    }
];

const colStyle = {
    textAlign: 'left'
}

export const ChooseUs = () => {
    return  (
        <Jumbotron>
            <h4>Why choose us</h4>
            <Row>
            {
                chooseItems.map( (item, index) => {
                    return (
                        <Col col="6" key={index}>
                            <Row>
                                <Col col="2" offset="2">
                                    icon
                                </Col>
                                <Col col="6" style={colStyle}>
                                    <div>{item.description}</div>
                                    <div>{item.caption}</div>
                                </Col>
                            </Row>
                        </Col>
                    )
                })
            }
            </Row>
        </Jumbotron>
    )
}