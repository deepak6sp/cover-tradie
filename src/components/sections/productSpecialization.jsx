import React from 'react';
import { Row, Col, Container, Card } from 'bootstrap-4-react';
import { CTButton } from '../UI/button';

const productItems = [
    {
        name: 'Car',
        description: 'lorem ip sum'
    },
    {
        name: 'Home',
        description: 'lorem ip sum'
    },
    {
        name: 'Boat',
        description: 'lorem ip sum'
    },
    {
        name: 'Liability',
        description: 'lorem ip sum'
    },
    {
        name: 'Accident & health',
        description: 'lorem ip sum'
    },
    {
        name: 'Tools',
        description: 'lorem ip sum'
    }
]

export const ProductSpecialization = () => {
    return  (
        <Container>
            <h4>Our product specialization</h4>
            <Row>
            {
                productItems.map( (item, index) => {
                    return (
                        <Col col="4" key={index}>
                            <Card>
                                <Card.Body>
                                    icon
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <CTButton text="Get a quote"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
        </Container>
    )
}