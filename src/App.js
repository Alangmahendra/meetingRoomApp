import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booking from './components/BookingPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Booking/>
      </div>
    );
  }
}

export default App;
