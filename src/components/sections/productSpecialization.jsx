import React, { Component } from 'react';
import { Row, Col, Container, Card } from 'bootstrap-4-react';
import { CTButton } from '../UI/button';
import Icons from '../svg/icons.jsx';

const productItems = [
    {
        icon: 'liability',
        name: 'Business & Liability',
        description: "Organising public liability and other business related insurances is easy with us. You'll get the right cover at the right price for your business with us."
    },
    {
        icon: 'car',
        name: 'Commercial & private vehicles',
        description: 'Let us keep you going with high quality insurance for your vehicles with features like agreed value, loan car, free windscreen excess etc.'
    },
    {
        icon: 'home',
        name: 'Home & Contents',
        description: 'Protecting your aussie dream! We can bundle your private and business insurances keeping you covered and all organised.'
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
                <h4>Our Product Specialisations</h4>
                <Row>
                { this.mapProducts() }
                </Row>
            </Container>
        )
    }
   
}