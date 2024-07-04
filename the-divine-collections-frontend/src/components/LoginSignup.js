import React, { Component } from 'react';

export default class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
            email: '',
            password: '',
            confirmPassword: '',
            isLogin: true,
        };
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, number, password, confirmPassword} = this.state;
        if (this.state.isLogin) {
            // Handle login
            fetch(`http://localhost:8080/getuser/${this.state.email}/${this.state.password}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('user', JSON.stringify(data));
                window.location.href = '/';
            })
            .catch(error => {
                console.error('Error logging in: ', error);
                alert("The entered username or password is incorrect. Kindly check it and try again later");
            });
            
        } else {
            // Handle signup
            const userData = {name, email, number, password, confirmPassword};
            if (password !== confirmPassword) {
                alert("Passwords do not match! Please try again.");
                return;
            }
            const confirmation = window.confirm('Are you sure with the details and want to save?');
            if (confirmation) {
                fetch('http://localhost:8080/saveUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                .then(response => { 
                    if (!response.ok) {
                        alert("User already exists! Please try a different one.");
                        return;
                    }
                    return response.json();
                })
                .then(data => {
                    alert("User saved! Please login now.");
                    window.location.href = '/signuplogin';
                })
                .catch(error => {
                    console.error('Error saving user: ', error);
                });
            }
        }
    }

    toggleForm = () => {
        this.setState({ isLogin: !this.state.isLogin });
    }

    render() {
        const containerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa'
        };

        const formContainerStyle = {
            width: '100%',
            maxWidth: '400px',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white'
        };

        const buttonStyle = {
            width: '100%',
            marginTop: '20px'
        };

        const toggleButtonStyle = {
            marginTop: '10px',
            textAlign: 'center'
        };

        const headerStyle = {
            textAlign: 'center',
            marginBottom: '20px'
        };

        const inputStyle = {
            marginBottom: '15px'
        };

        return (
            <div style={containerStyle}>
                <div style={formContainerStyle}>
                    <h2 style={headerStyle}>{this.state.isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form onSubmit={this.handleSubmit}>
                        {!this.state.isLogin && (
                            <div style={inputStyle}>
                                <label>Name:</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required />
                            </div>
                        )}
                        <div style={inputStyle}>
                            <label>Email address:</label>
                            <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required />
                        </div>
                        {!this.state.isLogin && (
                            <div style={inputStyle}>
                                <label>Mobile No:</label>
                                <input type="text" className="form-control" name="number" value={this.state.number} onChange={this.handleChange} required />
                            </div>
                        )}
                        <div style={inputStyle}>
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>
                        {!this.state.isLogin && (
                            <div style={inputStyle}>
                                <label>Confirm Password:</label>
                                <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary" style={buttonStyle}>{this.state.isLogin ? 'Login' : 'Sign Up'}</button>
                    </form>
                    <div style={toggleButtonStyle}>
                        <p>{this.state.isLogin ? "Don't have an account?" : "Already have an account?"} <button className="btn btn-link" onClick={this.toggleForm}>{this.state.isLogin ? 'Sign up here' : 'Login here'}</button></p>
                    </div>
                </div>
            </div>
        );
    }
}
