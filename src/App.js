import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import * as api from './api';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Articles from './Components/Articles/Articles';
import Article from './Components/Article/Article';
class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className="App">
        <header className="header-section">
          <Header logOut={this.logOut} setUser={this.setUser} user={this.state.user} />
        </header>
        <Router>
          <Home path="/" user={this.state.user} />
          <Articles path="/topics/:topic_slug/articles" />
          <Article path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
  setUser = user => {
    api.fetchUser(user).then(({ user }) => {
      this.setState({
        user: user
      });
    });
  };
  logOut = () => {
    this.setState({
      user: {}
    });
  };
}

export default App;
