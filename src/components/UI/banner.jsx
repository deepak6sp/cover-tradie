import React from 'react';
import { Row, Col, Container, Jumbotron, Lead } from 'bootstrap-4-react';
import { CTButton } from './button';
import bannerImg from './carpenter.jpg';

const backgroundStyle = {
     backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bannerImg})`
};

export const Banner = () => 
    <Jumbotron className="banner" style={backgroundStyle}>
        <Container>
            <Row>
                <Col col="col lg-8">
                    <h1>Not just any insurance broker</h1>
                    <Lead>We Specialise in tradie insurance solutions only</Lead>
                    <CTButton text="Get a quote" href={true}/>
                </Col>
            </Row>
        </Container>
    </Jumbotron>