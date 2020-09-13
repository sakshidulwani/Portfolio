import React from 'react';

const Contact = props => {
    return (
      <section id="contact">
        <div className="container">
        <p className="text-white ">
             <i className="fa fa-2x fa-envelope"></i> E-mail:- dulwanisakshi@gmail.com</p>
        <div className="social d-flex justify-content-center">
        <a className="mx-2" href="https://gmail.com/dulwanisakshi@gmail.com"><i className="fa fa-2x fa-envelope" style={{color:"white"}}></i></a>
             <a className="mx-2" href="https://www.instagram.com/sakshidulwani"><i className="fa fa-2x fa-instagram" style={{color:"white"}}></i></a>
             <a className="mx-2" href="https://github.com/sakshidulwani"><i className="fa fa-2x fa-github" style={{color:"white"}}></i></a>
             <a className="mx-2" href="https://www.linkedin.com/in/Sakshi-Dulwani"><i className="fa fa-2x fa-linkedin" style={{color:"white"}}></i></a>
          </div>
        </div>
      </section>
    );
  };
  export default Contact;