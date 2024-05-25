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
import UserBids from './components/UserBids';

class App extends Component {
  // TRY ADDING THE DELETE YOUR ITEM AND DELETE YOUR BID LOGIC BUT THIS TIME IN A MUCH BETTER WAY
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
            <Route exact path='/yourbids' element={<UserBids />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
