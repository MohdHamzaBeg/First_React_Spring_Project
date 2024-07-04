import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loguser: null,
      logos: {}
    };
  }

  loadImage = async (name) => {
    try {
      const image = await import(`../images/${name}.jpeg`);
      return image.default;
    } catch (error) {
      console.error('Error loading image: ', error);
      return '../images/default.jpeg'; // Fallback to a default image if the specified image is not found
    }
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ loguser: user });
    fetch('http://localhost:8080/allitems')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(async (data) => {
        const items = data;
        const logos = {};
        for (let item of items) {
          logos[item.id] = await this.loadImage(item.name);
        }
        this.setState({ items, logos });
      })
      .catch(error => {
        console.error('Error fetching items: ', error);
      });
  }

  render() {
    const { loguser, logos, items } = this.state;
    const latestItems = items.slice(0, 8);
    const royalAntiques = items.slice(-8);

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
            {latestItems.map(item => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card mx-3 my-5">
                  <img
                    src={logos[item.id]}
                    className="card-img-top"
                    alt={item.name}
                    onError={(e) => e.target.src = '../images/default.jpeg'} // Fallback to default image on error
                  />
                  <div className="card-body" style={{ backgroundColor: '#ADD8E6' }}>
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.age} Years</h6>
                    <p className="card-text">{item.description.slice(0, 30) + "......."}</p>
                    {loguser ? (
                      <Link to={`/items/${item.id}`} className="btn btn-primary">Bid Now</Link>
                    ) : (
                      <Link to='/signuplogin' className="btn btn-primary">Bid Now</Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <h1 className="display-6 my-5">Some Royal Antiques</h1>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="carousel-inner">
              {royalAntiques.map((item, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                  <img
                    src={logos[item.id]}
                    className="d-block w-100"
                    alt={item.name}
                    onError={(e) => e.target.src = '../images/default.jpeg'}
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <div className="carousel-caption d-none d-md-block" >
                    
                    {loguser ? (
                      <Link to={`/items/${item.id}`} className="btn btn-secondary">Check Out!</Link>
                    ) : (
                      <Link to='/signuplogin' className="btn btn-secondary">Check Out!</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
