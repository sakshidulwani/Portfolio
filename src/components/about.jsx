import React from 'react';
import './About.css'


const About = props => {
            return (
              <section id="about">
                <div className="wrapper">
                  <article >
                  <div className="title">
                  
                      <h3>ABOUT ME</h3>
                      <p className="separator" />
                    </div>
                    <div className="desc full">
                      <h4 className="subtitle">My name is Sakshi Dulwani.</h4>
                      <p>
                        I am a Full stack developer and a UnderGrade student persuing Bachelors in Computer Application from Graphic Era, Dehradun.
                      </p>
                      <p>
                        I really enjoy development as well as learning to make things pretty and easy to use. 

                       I can't stop learning new things; the more, the better. I also love dancing , a hobby.
                       For the front-end I usually work with Javascript, including
                        popular framework like ReactJS . I also make the web pretty by using 
                        CSS ,Bootstrap, React-bootstrap and Material UI.
   
                      </p>
                    </div>
                   
                   
                  </article>
                </div>
               
              </section>
            );
          };
          
export default About;