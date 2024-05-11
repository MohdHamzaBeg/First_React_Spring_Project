import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
}
    componentDidMount() {

      fetch('http://localhost:8080/allitems')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ items: data.slice(0,8) });
            })
            .catch(error => {
                console.error('Error fetching items: ', error);
            });
      }

  render() {
    return (
      <div className="container">
       
          <div className="col-md-8 offset-md-2">
         <p className="my-5">
              This is a platform where you can buy and sell a wide range of items through auctions.
              Whether you're looking for antiques, electronics, collectibles, or more, you'll find it here.
              Participate in auctions, place your bids, and get your desired items at the best prices.
            </p>
            <h1 className="display-6 my-5">Latest Items for Auction</h1>
            <div className="row">
              {this.state.items.map(item => (
                <div className="col-md-3 mb-4"  key={item.id}>
                  <div className="card mx-3 my-5" >
                    <div className="card-body" style={{ backgroundColor: '#ADD8E6' }}>
                      <h5 className="card-title">{item.name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{item.age} Years</h6>
                      <p className="card-text">{item.description.slice(0, 30)+"......."}</p>
                      <Link to={`/items/${item.id}`} className="btn btn-primary">Bid Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
