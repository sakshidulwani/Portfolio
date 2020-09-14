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

                  <Row className="progress_row mt-5">
                  
                  <Col xs={6} sm={4} md={4} lg={2} className="mx-auto my-4">
                  <div>
                  <CircularProgressbarWithChildren value={70} strokeWidth={5} className="progress_bar" styles={buildStyles({pathColor: "#65E8FF"})}>
                    <img style={{ width: 60, marginTop: -5 }} src="https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
                  </CircularProgressbarWithChildren>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                  <CircularProgressbarWithChildren value={70} strokeWidth={5} className="progress_bar" styles={buildStyles({pathColor: "#FFD600"})}>
                    <img style={{ width: 60, marginTop: -5 }} src="https://img.icons8.com/color/000000/javascript.png" alt=""/>
                  </CircularProgressbarWithChildren>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                  <CircularProgressbarWithChildren value={60} strokeWidth={5} className="progress_bar" styles={buildStyles({pathColor: "#29B6F6"})}>
                    <img style={{ width: 60, marginTop: -5 }} src="https://img.icons8.com/color/000000/material-ui.png" alt=""/>
                  </CircularProgressbarWithChildren>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                  <CircularProgressbarWithChildren value={90} strokeWidth={5} className="progress_bar" styles={buildStyles({pathColor: "#673AB7"})}>
                    <img style={{ width: 60, marginTop: -5 }} src="https://img.icons8.com/color/000000/bootstrap.png" alt=""/>
                  </CircularProgressbarWithChildren>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                  <CircularProgressbarWithChildren value={90} strokeWidth={5} className="progress_bar" styles={buildStyles({pathColor: "#FF6D00"})}>
                    <img style={{ width: 60, marginTop: -5 }} src="https://img.icons8.com/color/000000/html-5.png" alt="" />
                  </CircularProgressbarWithChildren>
                  </div>
                  </Col>

                  <Col xs={6} sm={4} md={4} lg={2} className=" mx-auto my-4">
                  <div>
                  <CircularProgressbarWithChildren value={65} strokeWidth={5} className="progress_bar" styles={buildStyles({pathColor: "#0277BD"})}>
                    <img style={{ width: 60, marginTop: -5 }} src="https://img.icons8.com/color/000000/css3.png" alt=""/>
                  </CircularProgressbarWithChildren>
                  </div>
                  </Col>
                  </Row>
              
                
            </Container>
            </section>

        </div>
    );
}

export default Skills;