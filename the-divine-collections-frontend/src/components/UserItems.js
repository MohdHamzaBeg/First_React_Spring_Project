import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null
        };
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        
        fetch(`http://localhost:8080/itemsbyId/${user.id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    this.setState({ error: true });
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                this.setState({ items: data, error: false  });
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching items: ', error);
            });
    }
    handleDelete = (id)=>{
        fetch(`http://localhost:8080/deletebyId/${id}`,{
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            });
            alert("Item deleted Succesfully!")
            window.location.href = '/youritems'
    }

    render() {
        const { error } = this.state;

        if (error) {
            return (
                <div className="text-center">
                  <h6 className='my-5'>There are No Items yet</h6>
                    <Link className="btn btn-primary my-2" to='/newItem'>Add an Item</Link>
                </div>
            );
        }

        else{
        return (
            <div className='container'>
                <div className="col-md-8 offset-md-2">
                    <h1 className='display-6 my-5'>Items you added for Bidding</h1>
                    <div className="row">
                        {this.state.items.map(item => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <div className="card mx-3 my-2">
                                    <div className="card-body" style={{ backgroundColor: '#ADD8E6' }}>
                                        <h5 className="card-title">{item.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{item.age} Years</h6>
                                        <p className="card-text">{item.description.slice(0, 30) + "......."}</p>
                                        <div className="d-flex justify-content-between">
                                            <button 
                                                className="btn btn-danger" 
                                                onClick={() => this.handleDelete(item.id)}
                                            >
                                                Delete
                                            </button>
                                            <Link to={`/items/${item.id}`} className="btn btn-primary">
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-end">
                        <Link className="btn btn-primary my-2" to='/newItem'>Add an Item</Link>
                    </div>
                </div>
            </div>
        );
    }
    }
}
