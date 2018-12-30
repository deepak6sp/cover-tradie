import React from 'react';
import { Container, Jumbotron, Display4, Lead } from 'bootstrap-4-react';
import { PrimaryButton } from './button';

export const Banner = () => 
    <Jumbotron style={{textAlign: 'left'}}>
        <Container>
            <Display4>Insurance do matter</Display4>
            <Lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Lead>
            <PrimaryButton text="Get a quote"/>
        </Container>
    </Jumbotron>