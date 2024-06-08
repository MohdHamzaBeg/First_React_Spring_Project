import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserBids extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        error: null
    };
  }
  
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    fetch(`http://localhost:8080/userBidsbyId/${user.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: true });
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        this.setState({ items: data });
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching items: ', error);
      });
  }

  handleWithdraw = (itemId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetch(`http://localhost:8080/deleteuserBid/${itemId}/${user.id}`)
    .then(response => {
      if (response.ok) {
        this.setState({ items : null })
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(() => {
      alert("Your Bid has been withdrew!")
    })
    .catch(error => {
      console.error('Error removing bid ', error);
    });
    window.location.href = '/yourbids'
  }

  render() {
    const { items, error } = this.state;

    if (error) {
      return <h6 className='my-5'>You haven't placed a Bid yet. <br />Go to <Link to='/categories'>Items </Link>
      to place a Bid now!!!</h6>;
    }

    return (
      <div className='container'>
        <div className="col-md-8 offset-md-2">
          <h1 className='display-6 my-5'>Items on which you placed the Bid</h1>
          <table className="table table-borderless table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col"><h4>Name</h4></th>
                <th scope="col"><h4>Age</h4></th>
                <th scope="col"><h4>Description</h4></th>
                <th scope="col"><h4>Action</h4></th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? items.map(item => (
                <tr key={item.id} style={{fontSize:'20px', height:'80px'}}>
                  <td>{item.name}</td>
                  <td>{item.age} Years</td>
                  <td>{item.description.slice(0, 30) + "..."}</td>
                  <td>
                    <Link to={`/items/${item.id}`} className="btn btn-primary" style={{ marginRight: '10px' }}>Bid Again!</Link>
                    <button onClick={() => this.handleWithdraw(item.id)} className="btn btn-danger">Withdraw</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" className="text-center">No items found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
