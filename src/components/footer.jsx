import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <Container fluid id="footer" >
           
            <Row className="py-5" >
               <Col className="py-5">
                 <p className="py-5" >&copy;Sakshi Dulwani {year}</p>
               </Col>
            </Row>
        </Container>
    );
}

export default Footer;