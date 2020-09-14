import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './skills.css';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Skills(props) {
    return (

        <div>
            <section id="skills">
            <Container className="skills py-5" >
            <div className="title">
                  
                  <h3 >SKILLS</h3>
                  <p className="separator " />
                  </div>

                  <Row className="progress_row mt-5 text-center">
                  
                  <Col xs={6} sm={4} md={4} lg={2} className="mx-auto my-4">
                  <div>
                    <img height="70px" src="https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                    <img height="70px" src="https://img.icons8.com/color/000000/javascript.png" alt=""/>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                    <img height="70px" src="https://img.icons8.com/color/000000/material-ui.png" alt=""/>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                    <img height="70px" src="https://img.icons8.com/color/000000/bootstrap.png" alt=""/>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                    <img height="70px" src="https://img.icons8.com/color/000000/html-5.png" alt="" />
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                    <img height="70px" src="https://img.icons8.com/color/000000/css3.png" alt=""/>
                  </div>
                  </Col>
                  </Row>
              
                
            </Container>
            </section>

        </div>
    );
}

export default Skills;