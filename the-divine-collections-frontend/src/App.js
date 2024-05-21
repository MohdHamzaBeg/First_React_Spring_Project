import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import Item from './components/Item';
import LoginSignup from './components/LoginSignup';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserItems from './components/UserItems';
import NewItemPage from './components/NewItemPage';

class App extends Component {
  // START THE PROJECT FRESH BY CHANGING THE VALIDATION FROM BACKEND. THEN CHECK ALL THE FUNCTIONALITIES
  // THAT HAS BEEN DEVELOPED TILL YET. AFTER THAN MOVE ON TO MYBIDS PART
  render() {
    return (
      
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path="/items/:id" element={<Item />} />
            <Route exact path='/signuplogin' element={<LoginSignup />} />
            <Route exact path='/youritems' element={<UserItems />} />
            <Route exact path='/newItem' element={<NewItemPage />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
