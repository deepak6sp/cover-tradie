import React from 'react';
import { Row, Col } from 'bootstrap-4-react';

const mapStyle = {
    width: "100%",
    height: "400px", 
    frameborder: "0",
    border: "0"
}

export const Maps = () => 
    <Row>
        <Col col="12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5084624671!2d144.4926992714989!3d-37.97015417538286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne+VIC!5e0!3m2!1sen!2sau!4v1546171887657" 
            title="some" 
            style={mapStyle}/>
        </Col>
    </Row>;