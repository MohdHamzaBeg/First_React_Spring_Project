import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loguser: null,
            showHeading: false,
        };
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        this.setState({ loguser: user });

        // Show heading after a short delay
        setTimeout(() => {
            this.setState({ showHeading: true });
        }, 500);
    }

    handleLogout = () => {
        const confirmation = window.confirm('Are you sure you want to log out?')
        if(confirmation){
        localStorage.removeItem('user');
        this.setState({ loguser: null });
        window.location.href = '/';
        }
    }

    render() {
        const { loguser, showHeading } = this.state;
        return (
            <>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#66b2ff' }}>
                    <div className="container-fluid">
                    <img src={logo} alt="Logo" className="navbar-brand" style={{ width: '50px', height: '50px'}} />
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
                                    <Link className={`nav-link ${loguser ? "" : "disabled"}`} to='/youritems'>Your Items</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${loguser ? "" : "disabled"}`} to='/yourbids'>Your Bids</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                {loguser ? (
                                        <button className="nav-link btn btn-link" onClick={this.handleLogout}>Logout</button>
                                    ) : (
                                        <Link className="nav-link" to="/signuplogin">Login / Signup</Link>
                                    )}
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
                            <h1 className={showHeading ? 'display-3 fade-in my-1' : 'hidden'}>The Divine Collections</h1>
                            <h1 className={showHeading ? 'display-6 fade-in my-2' : 'hidden'}>Where every piece holds a story</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
