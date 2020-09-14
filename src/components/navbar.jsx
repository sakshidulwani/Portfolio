import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link, animateScroll as scroll } from "react-scroll";


function NavBar(props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
};
    return (
        <Navbar className="navbar" expand="lg" fixed="top">

        <Navbar.Brand 
            onClick={scrollToTop} 
            style={{fontFamily: "Dancing Script, cursive", cursor: "pointer", color: "rosybrown"}}>
              Sakshi Dulwani
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto">

            <Nav.Item><Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            style={{color:"rosybrown", cursor: "pointer"}}
            className="mx-2">About</Link></Nav.Item>

            <Nav.Item><Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{color:"rosybrown", cursor: "pointer"}}
            className="mx-2">Skills</Link></Nav.Item>

            <Nav.Item><Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
           style={{color:"rosybrown", cursor: "pointer"}} 
           className="mx-2">Contact</Link></Nav.Item>

          </Nav>
        
          </Navbar.Collapse>

      </Navbar>
    );
}

export default NavBar;