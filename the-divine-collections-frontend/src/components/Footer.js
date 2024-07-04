import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
                    <div className="container">
                        <p>&copy; 2024 The Divine Collections. All rights reserved.</p>
                        <p>
                            <Link to="/privacy-policy" className="text-white mx-2">Privacy Policy</Link> | 
                            <Link to="/terms-of-service" className="text-white mx-2">Terms of Service</Link>
                        </p>
                        <p>Contact: <Link href="mailto:hamzabeg12june@gmail.com" className="text-white">hamzabeg12june@gmail.com</Link></p>
                        <p>
                            <Link href="https://www.linkedin.com/in/mohd-hamza-beg-2a760024a" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin mx-2" style={{ fontSize: '1.5rem' }}></i>
                            </Link>
                            <Link href="https://www.instagram.com/__mirzaaa_/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram mx-2" style={{ fontSize: '1.5rem' }}></i>
                            </Link>
                            <Link href="https://github.com/MohdHamzaBeg" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github mx-2" style={{ fontSize: '1.5rem' }}></i>
                            </Link>
                        </p>
                    </div>
                </footer>
    )
  }
}
