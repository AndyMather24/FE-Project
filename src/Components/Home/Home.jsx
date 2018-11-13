import React, { Component } from 'react';
import * as api from '../../api.js';
import './Home.css';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Articles from '../Articles/Articles.jsx';

class Home extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="homepage">
        <section className="dashboard-section">
          <Dashboard topics={this.state.topics} />
        </section>
        <article className="main-articles">
          <Articles user={this.props.user} />
        </article>
      </div>
    );
  }

  componentDidMount = () => {
    this.setTopics();
  };

  setTopics = () => {
    api.fetchTopics().then(topics => {
      this.setState({
        topics: topics
      });
    });
  };
}

export default Home;
