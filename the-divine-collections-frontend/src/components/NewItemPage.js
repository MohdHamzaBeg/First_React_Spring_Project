import React, { Component } from 'react'

export default class NewItemPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: '',
        bid: '',
        description: ''
    };
}

  handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

  handleSubmit = (event)=>{
    event.preventDefault();
    const owner = JSON.parse(localStorage.getItem('user'));
    const {name, age,bid, description} = this.state
            const itemData = {name, age,bid, description, owner}
            const confirmation = window.confirm('Are you sure with the details and want to save?')
            if(confirmation){
            fetch('http://localhost:8080/saveItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        })
        .then(response => { 
            return response.json();
        })
        .then(data => {
            alert("Item Saved Successfully!")
            //window.location.href = '/youritems';
            // Optionally, you can redirect the user to a new page or perform some action upon successful signup
        })
        .catch(error => {
            console.error('Error saving item: ', error);
        });
  }
}


  render() {
    return (
        <>
        <h1 className="display-6 my-4">Enter the Details of your Item</h1>
        <div className='container my-5'>
        <form className="row g-3 needs-validation" onSubmit={this.handleSubmit} noValidate>
  <div className="col-md-4">
    <label htmlfor="validationCustom01" className="form-label">Name</label>
    <input type="text" className="form-control" id="validationCustom01" name='name' value={this.state.name} onChange={this.handleChange} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-2 mx-3">
    <label htmlfor="validationCustom02" className="form-label">Age</label>
    <input type="text" className="form-control" id="validationCustom02" name='age' value={this.state.age} onChange={this.handleChange}required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-2 mx-3">
    <label htmlfor="validationCustomUsername" className="form-label">Opening Bid</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">$</span>
      <input type="text" className="form-control" id="validationCustomUsername" name='bid' value={this.state.bid} onChange={this.handleChange} aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-3 mx-3">
    <label htmlFor="validationCustomUsername" className="form-label">Choose an Image</label>
    <div className="input-group has-validation">
        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
        <div className="invalid-feedback">
            Please choose a username.
        </div>
        <input type="file" className="form-control" id="fileInput" accept="image/png, image/jpeg" style={{ display: 'none' }} onChange={(e) => document.getElementById('validationCustomUsername').value = e.target.files[0].name}/>
        <button className="btn btn-primary" onClick={() => document.getElementById('fileInput').click()}>Browse</button>
    </div>
</div>

  <div className="col-md-6 mx-auto" style={{alignItems:'center'}}>
    <label htmlfor="validationCustom03" className="form-label" >Description</label>
    <textarea type="text" className="form-control" id="validationCustom03" name='description' value={this.state.description} onChange={this.handleChange} required></textarea>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

        </div>
        </>
    )
  }
}
