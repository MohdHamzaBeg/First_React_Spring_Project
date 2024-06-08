import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import Item from './components/Item';
import ContactUs from './components/ContactUs';
import LoginSignup from './components/LoginSignup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserItems from './components/UserItems';
import NewItemPage from './components/NewItemPage';
import UserBids from './components/UserBids';

class App extends Component {
  // RESETTING THE BID VALUE FOR THAT ITEM UPON DELETION IS WORKING. CHECK IT ONCE
  // START RESOLVING THE TODO LIST
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
            <Route exact path='/contactus' element={<ContactUs/>} />
          </Routes>
          <Footer/>
        </Router>
      </>
    );
  }
}

export default App;
