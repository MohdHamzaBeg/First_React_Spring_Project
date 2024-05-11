import React, { Component } from 'react';
import logo from "../images/a1.jpeg";

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }

    componentDidMount() {
        // Get the current URL from the browser
        const currentUrl = window.location.href;

        // Extracting ID from the URL
        const urlParts = currentUrl.split("/");
        const id = urlParts[urlParts.length - 1];

        fetch(`http://localhost:8080/getbyID/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ item: data });
            })
            .catch(error => {
                console.error('Error fetching items: ', error);
            });
    }

    render() {
        const { item } = this.state;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="item-container">
                            <img src={logo} className="item-image" alt="Item" />
                            <div className="item-details">
                                <h1 className="item-title">{item.name}</h1>
                                <p className="item-description">{item.description}</p>
                                <p className="item-age">{item.age} Years Old</p>
                                <div className="button-container">
                                    {/* Add the points such as the owner name and the latest bid */}
                                    <button className="btn btn-primary mx-5" onClick={() => window.history.back()}>Back</button>
                                    <button className="btn btn-primary mx-5" onClick={() => window.location.href = `/items/edit/${item.id}`}>Raise an Amount</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
