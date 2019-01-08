import React, { Component } from 'react';
import { Row, Col, Container, Card } from 'bootstrap-4-react';
import { CTButton } from '../UI/button';
import Icons from '../svg/icons.jsx';

const productItems = [
    {
        icon: 'car',
        name: 'Car',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        icon: 'home',
        name: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        icon: 'boat',
        name: 'Boat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
];


    // {
    //     icon: 'liability',
    //     name: 'Liability',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    // },
    // {
    //     icon: 'accident',
    //     name: 'Accident & health',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    // },
    // {
    //     icon: 'tools',
    //     name: 'Tools',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    // }


export class ProductSpecialization extends Component {
    mapProducts = () => {
        return  (
            productItems.map( (item, index) => {
                return (
                    <Col col="12 lg-4" key={index}>
                        <Card>
                            <Card.Body>
                                <img alt={item.icon} src={Icons[item.icon]} />
                                <Card.Title><span className="underline">{item.name}</span></Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <CTButton text="Get a quote"/>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                )
            })
        )
    }

    render() {
        return  (
            <Container className="productSpecialization">
                <h4>Our product specializations</h4>
                <Row>
                { this.mapProducts() }
                </Row>
            </Container>
        )
    }
   
}