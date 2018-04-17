import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booking from './components/BookingPage'
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Booking />
        </div>
      </Provider>
    );
  }
}

export default App;
