import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './contact.css';
function Contact(props) {

    const year = new Date().getFullYear();

    return (
        <Container fluid id="contact" className="text-center">
           
            <Row className="">

               <Col className="social py-3" lg={12}>
                  <div>
                  <a className="mx-4" href="https://www.instagram.com/sakshidulwani"><i className="fab fa-4x fa-instagram-square"/></a>
                  <a className="mx-4" href="https://www.linkedin.com/in/sakshi-dulwani-4123261aa"><i className="fab fa-4x fa-linkedin"/></a>
                  <a className="mx-4" href="https://github.com/sakshidulwani"><i className="fab fa-4x fa-github-square"/></a>
                  </div>
               </Col>

               <Col lg={12} className="">
                 <p className="" >&copy;Sakshi Dulwani {year}</p>
               </Col>

            </Row>

        </Container>
    );
}

export default Contact;