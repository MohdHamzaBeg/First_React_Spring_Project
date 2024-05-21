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
        const {name, email,number, password} = this.state 
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
            const userData = {name, email,number, password}
            const confirmation = window.confirm('Are you sure with the details and want to save?')
            if(confirmation){
            fetch('http://localhost:8080/saveUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => { 
            return response.json();
        })
        .then(data => {
            alert("User Saved! Please Login Now")
            window.location.href = '/signuplogin';
            // Optionally, you can redirect the user to a new page or perform some action upon successful signup
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
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2>{this.state.isLogin ? 'Login' : 'Sign Up'}</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <table className="table table-bordered">
                                        <tbody>
                                        {!this.state.isLogin && (
                                                <tr>
                                                    <td style={{backgroundColor:'#ADD8E6'}}>Name:</td>
                                                    <td><input type="name" className="form-control" name='name' value={this.state.name} onChange={this.handleChange} required /></td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td style={{backgroundColor:'#ADD8E6'}}>Email address: </td>
                                                <td><input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required /></td>
                                            </tr>
                                            {!this.state.isLogin && (
                                                <tr>
                                                    <td style={{backgroundColor:'#ADD8E6'}}>Mobile No:</td>
                                                    <td><input className="form-control" name="number" value={this.state.number} onChange={this.handleChange} required /></td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td style={{backgroundColor:'#ADD8E6'}}>Password:</td>
                                                <td><input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required /></td>
                                            </tr>
                                            {!this.state.isLogin && (
                                                <tr>
                                                    <td style={{backgroundColor:'#ADD8E6'}}>Confirm Password:</td>
                                                    <td><input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required /></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">{this.state.isLogin ? 'Login' : 'Sign Up'}</button>
                                    </div>
                                </form>
                                <p className="mt-3 text-center">{this.state.isLogin ? "Don't have an account?" : "Already have an account?"} <button className="btn btn-link" onClick={this.toggleForm}>{this.state.isLogin ? 'Sign up here' : 'Login here'}</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}
