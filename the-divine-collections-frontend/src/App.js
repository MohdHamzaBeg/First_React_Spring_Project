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

class App extends Component {
  

  render() {
    return (
      
      <>
        <Router>
          <Navbar  />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path="/items/:id" element={<Item />} />
            <Route exact path='/signuplogin' element={<LoginSignup/>} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
