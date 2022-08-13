import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function foot() {
    return (
        <div className="footer">
            <Container>
                <Row md={4}>
                    <Col><h4>Policies</h4></Col>
                    <Col><h4>Stay in Touch with Us</h4></Col>
                    <Col><h4>Locations</h4></Col>
                    <Col><h4>Contact Us</h4></Col>
                </Row>
            </Container>
        </div>

    )
}

export default foot