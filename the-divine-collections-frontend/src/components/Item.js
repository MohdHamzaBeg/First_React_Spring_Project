import React, { Component } from 'react';
import logo from "../images/a1.jpeg";

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            showModal: false,
            newBid: '',
            isBidValid: true
        };
    }

    componentDidMount() {
        const currentUrl = window.location.href;
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
                console.log(data);
                this.setState({ item: data });
            })
            .catch(error => {
                console.error('Error fetching items: ', error);
            });
    }

    handleShowModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false, newBid: '', isBidValid: true });
    };

    handleBidChange = (e) => {
        const newBid = e.target.value;
        const lastBid = this.state.item.bid;

        this.setState({ 
            newBid,
            isBidValid: newBid && parseFloat(newBid) >= lastBid * 1.5
        });
    };
    updateBid = ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        fetch(`http://localhost:8080/updateBid/${user.id}/${this.state.item.id}/${this.state.newBid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .then(()=> {
            alert("Congratulations! Your Bid has been placed.")
            this.setState({showModal:false})
        })
        .catch(error => {
            console.error('Error adding bid: ', error);
        });
    };


    render() {
        const { item, showModal, newBid, isBidValid } = this.state;

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
                                    <button className="btn btn-primary mx-5" onClick={() => window.history.back()}>Back</button>
                                    <button className="btn btn-primary mx-5" onClick={this.handleShowModal}>Raise an Amount</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Raise an Amount</h5>
                                    <button type="button" className="close" onClick={this.handleCloseModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Latest Bid: ${item.bid}</p>
                                    
                                    <input  
                                        type="number" 
                                        className={`form-control ${isBidValid ? '' : 'is-invalid'}`} 
                                        value={newBid} 
                                        onChange={this.handleBidChange} 
                                        placeholder="Enter your bid in USD"
                                    />
                                    {!isBidValid && <div className="invalid-feedback">New bid must be at least 50% more than the latest bid.</div>}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={this.handleCloseModal}>Cancel</button>
                                    <button type="button" className="btn btn-primary" onClick={this.updateBid}>Raise</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showModal && <div className="modal-backdrop fade show"></div>}
            </div>
        );
    }
}
