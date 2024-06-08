import React, { Component } from 'react';

class ContactUs extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center mb-4 display-6 my-">Contact Us</h1>
            <div className="mb-4 p-4 bg-light rounded shadow-sm">
              <h6 className='display-6'>Mohd Hamza Beg</h6>
              <p><strong>Designation:</strong> Full Stack Web Developer</p>
              <p><strong>Address:</strong> Integral University, Lucknow</p>
              <p><strong>Contact Number:</strong> +918429107556</p>
              <p><strong>Email Address:</strong> hamzabeg12june@gmail.com</p>
              <p>
                <a href="https://www.linkedin.com/in/mohd-hamza-beg-2a760024a" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin ml-2 mx-3" style={{ fontSize: '1.5em' }}></i>
                </a>
                <a href="https://www.instagram.com/__mirzaaa_/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram ml-2 mx-3" style={{ fontSize: '1.5em' }}></i>
                </a>
                <a href="https://github.com/MohdHamzaBeg" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github ml-2 mx-3" style={{ fontSize: '1.5em' }}></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
