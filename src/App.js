import React, { Component } from 'react';
import { Router } from '@reach/router'
import './App.css';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-section">
          <Header />
        </header>

        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}


export default App;
