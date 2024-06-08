import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loguser: {}
        };
    }
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        this.setState({loguser: user})
        // Use the user data
        setTimeout(() => {
            this.setState({ showHeading: true });
          }, 500); 
    }
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg "style={{ backgroundColor: '#66b2ff' }} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Auction</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.loguser!=null ? "" : "disabled"}`} to='/youritems'>Your Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.loguser!=null ? "" : "disabled"}`} to='/yourbids'>Your Bids</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link" to="/signuplogin">Login / Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
              <h1 className={this.state.showHeading ? 'display-3 fade-in my-4'  : 'hidden'}>The Divine Collections</h1>
              <h1 className={this.state.showHeading ? 'display-6 fade-in my-2 ' : 'hidden'}>Where every piece holds a story</h1>
              </div>
              </div>
              </div>
              </>
        )
    }
}
