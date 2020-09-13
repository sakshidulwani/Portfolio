import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './skills.css';
function Skills(props) {
    return (

        <div>
            <section id="skills">
            <Container className="skills py-5" >
            <div className="title">
                  
                  <h3 >SKILLS</h3>
                  <p className="separator " />
                  </div>
              
                <Row >
                   <Col lg={12} className="my-3 justify-content-center">
                   <i className="mx-4 my-5 fab fa-6x fa-react" style={{"color": "lightblue"}}></i>
                   <i className="mx-4 my-5 fab fa-6x fa-js-square" style={{"color": "gold"}}></i>
                   <i className="mx-4 my-5 "><img src="https://img.icons8.com/color/96/000000/material-ui.png"/></i><br/>
                   <i className="mx-4 my-5 fab fa-6x fa-bootstrap" style={{"color": "purple"}}></i>
                   <i className="mx-4 my-5 fab fa-6x fa-html5" style={{"color": "darkorange"}}></i>
                   <i className="mx-4 my-5 fab fa-6x fa-css3-alt" style={{"color": "dodgerblue"}}></i>
                  
                   </Col>
                </Row>
            </Container>
            </section>

        </div>
    );
}

export default Skills;