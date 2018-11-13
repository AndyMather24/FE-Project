import React, { Component } from 'react';
import * as api from '../../api';

class Voting extends Component {
  state = {
    totalVotes: this.props.article.votes
  };

  render() {
    return (
      <div>
        <p>{this.state.totalVotes}</p>
        <button onClick={this.handleVote} name="up" value="-1">
          {' '}
          Vote Up{' '}
        </button>
        <button onClick={this.handleVote} name="down" value="1">
          {' '}
          Vote Down{' '}
        </button>
      </div>
    );
  }

  handleVote = e => {
    let vote = +e.target.value;
    this.setState({
      totalVotes: this.state.totalVotes - vote
    });
    api.addVote(e.target.name, this.props.article._id).then(data => {
      return data;
    });
  };
}

export default Voting;
