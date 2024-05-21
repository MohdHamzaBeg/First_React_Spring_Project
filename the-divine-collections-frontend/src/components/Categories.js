import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export default class Categories extends Component {

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
              console.log(data)
                this.setState({ items: data });
            })
            .catch(error => {
                console.error('Error fetching items: ', error);
            });
      }


  render() { 
    return (
        <>
        <h3 className='display-6 my-3'> Categories:-</h3>
        <div className="accordion my-5 mx-5" id="accordionExample" style={{ backgroundColor: '#ADD8E6', textAlign:'left' }}>
  <div className="accordion-item mx-5">
    <h2 className="accordion-header " style={{ backgroundColor: '#ADD8E6', textAlign:'left' }}>
      Standard:-
    </h2>
    <div>
      <div className="accordion-body  d-flex justify-content-between">
        "Step into the world of exquisite treasures. Would you believe that some of these antiques, though not older than 500 years, hold immeasurable value<br/>
         Explore the secrets they hold and the tales they whisper from a time not so distant but equally fascinating."<br/>
</div>
<div className="row">
  {this.state.items
    .filter(item => item.age >= 0 && item.age <= 500) // Filter items with age between 0 and 500
    .map(item => (
      <div className="col-md-3 mb-4" key={item.id}>
        <div className="card mx-3 my-3">
          <div className="card-body" style={{ backgroundColor: '#ADD8E6' }}>
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{item.age} BC</h6>
            <p className="card-text">{item.description.slice(0, 20) + "......."}</p>
            <Link to={`/items/${item.id}`} className="btn btn-primary">Bid Now</Link>
          </div>
        </div>
      </div>
    ))}
</div>

    </div>
  </div>
  <div className="accordion-item mx-5">
    <h2 className="accordion-header " style={{ backgroundColor: '#ADD8E6', textAlign:'left' }} >
        Premium:-
    </h2>
    <div >
      <div className="accordion-body  d-flex justify-content-between">
      "Time where ancient wonders await. Behold these remarkable antiques, each more than 500 years old, yet still exuding an aura of mystery and grandeur<br/>
       Uncover the rich history and secrets hidden within these age-old treasures?"<br/>
       
      </div>
      <div className="row">
  {this.state.items
    .filter(item => item.age >= 501 && item.age <= 2000) // Filter items with age between 0 and 500
    .map(item => (
      <div className="col-md-3 mb-4" key={item.id}>
        <div className="card mx-3 my-3">
          <div className="card-body" style={{ backgroundColor: '#ADD8E6' }}>
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{item.age} BC</h6>
            <p className="card-text">{item.description.slice(0, 20) + "......."}</p>
            <Link to={`/items/${item.id}`} className="btn btn-primary">Bid Now</Link>
          </div>
        </div>
      </div>
    ))}
</div>
    </div>
  </div>
  <div className="accordion-item mx-5" style={{ borderBottom: '1px solid #ADD8E6' }}>
    <h2 className="accordion-header" style={{ backgroundColor: '#ADD8E6', textAlign:'left'}}>
        Rare:-
    </h2>
    <div>
      <div className="accordion-body d-flex justify-content-between">
      "Where the echoes of the past resonate in every artifact. Explore these treasures, over 2000 years old, each a window into civilizations long gone unforgotten.<br/>
         Explore the secrets they hold and the tales they whisper from a time not so distant but equally fascinating."<br/>
      </div>
      <div className="row">
  {this.state.items
    .filter(item => item.age >= 2001) // Filter items with age between 0 and 500
    .map(item => (
      <div className="col-md-3 mb-4" key={item.id}>
        <div className="card mx-3 my-3">
          <div className="card-body" style={{ backgroundColor: '#ADD8E6' }}>
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{item.age} BC</h6>
            <p className="card-text">{item.description.slice(0, 20) + "......."}</p>
            <Link to={`/items/${item.id}`} className="btn btn-primary">Bid Now</Link>
          </div>
        </div>
      </div>
    ))}
</div>
    </div>
  </div>
</div>
        </>
    )
  }
}
