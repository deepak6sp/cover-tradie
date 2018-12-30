import React from 'react';
import { Container, Col } from 'bootstrap-4-react';
import './infiniteSlide.css';

export const InfiniteSlide = () =>
  <Container>
      <Col className="tech-slideshow">
        <div className="mover-1"></div>
        <div className="mover-2"></div>
      </Col>
  </Container>;