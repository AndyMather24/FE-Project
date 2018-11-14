import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import * as api from './api';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Articles from './Components/Articles/Articles';
import Postarticle from './Components/Postarticle/Postarticle';
import Article from './Components/Article/Article';
class App extends Component {
  state = {
    user: {
      _id: '5bd6f57bd5c8e378dda1c920',
      avatar_url: 'https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg',
      name: 'Paul Grump',
      username: 'grumpy19'
    }
  };
  render() {
    return (
      <div className="App">
        <header className="header-section">
          <Header logOut={this.logOut} setUser={this.setUser} user={this.state.user} />
        </header>
        <Router>
          <Home path="/" />
          <Articles path="/topics/:topic_slug/articles" />
          <Article path="/articles/:article_id" user={this.state.user} />
          <Postarticle user={this.state.user} path="/article/post-article" />
        </Router>
      </div>
    );
  }
  setUser = user => {
    api.fetchUser(user).then(({ user }) => {
      window.localStorage.setItem('user', JSON.stringify({ user }));
      this.setState({
        user: user
      });
    });
  };
  logOut = () => {
    this.setState({
      user: {}
    });
    window.localStorage.clear();
  };
}

export default App;
