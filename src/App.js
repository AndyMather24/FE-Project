import React, { Component } from 'react';
import { Router } from '@reach/router';
import Error from './Components/Error/Error';
import './App.css';
import * as api from './api';

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Articles from './Components/Articles/Articles';
import Postarticle from './Components/Postarticle/Postarticle';
import Article from './Components/Article/Article';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Loading from './Components/Loading/Loading';

library.add(faPlusCircle, faTrashAlt);
class App extends Component {
  state = {
    user: {},
    loading: true,
    error: null
  };
  render() {
    return (
      <div className="App">
        <header className="header-section">
          <Header error={this.state.error} logOut={this.logOut} setUser={this.setUser} user={this.state.user} />
        </header>
        {this.state.loading && <Loading />}
        <Router primary={false}>
          <Home path="/" />
          <Error path="/error" />
          <Articles path="/topics/:topic_slug/articles" />
          <Article path="/articles/:article_id" user={this.state.user} />
          <Postarticle user={this.state.user} path="/:user_id/post-article" />
        </Router>
      </div>
    );
  }

  componentDidMount = () => {
    this.setState({
      loading: false
    });
  };
  setUser = user => {
    api
      .fetchUser(user)
      .then(({ user }) => {
        console.log(user);
        if (user === null) {
          this.setState({
            user: {},
            error: true
          });
        } else {
          window.localStorage.setItem('user', JSON.stringify({ user }));
          this.setState({
            user: user,
            error: false
          });
        }
      })
      .catch(error => {
        this.setState({
          error
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
