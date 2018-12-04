import React, { Component } from 'react';
import * as api from '../../api';
import './Voting.css';
import '../Article/Article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Voting extends Component {
  state = {
    voteMod: 0,
    up: false,
    down: false,
  };

  render() {
    return (
      <div className="votes-comment-section">
        {!this.state.up && <FontAwesomeIcon className="thumb-up" onClick={this.handleVoteUp} icon="thumbs-up" />}
        <span className="total-votes"> {this.state.voteMod + this.props.votes} <FontAwesomeIcon className="heart" icon="heart" /> </span>
        {!this.state.down && <FontAwesomeIcon className="thumb-down" onClick={this.handleVoteDown} icon="thumbs-down" />}
      </div>
    );
  }

  handleVoteUp = e => {
    let voteUpAmount = 1;
    if (this.state.down) voteUpAmount = 2;
    this.setState({
      totalVotes: voteUpAmount,
      up: !this.state.up,
      down: false
    });
    api.addVote('up', this.props.id || this.props.votes).then(data => {
      return data;
    });
  }
  handleVoteDown = e => {
    let voteAmount = 1
    if (this.state.up) voteAmount = 2
    this.setState({
      totalVotes: voteAmount,
      down: !this.state.down,
      up: false
    });
    api.addVote('down', this.props.id || this.props.votes).then(data => {
      return data;
    });
  };
}

export default Voting;
