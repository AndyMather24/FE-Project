import React, { Component } from 'react';
import * as api from '../../api';
import './Voting.css';
import '../Article/Article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Voting extends Component {
  state = {
    voteMod: this.props.votes,
    up: false,
    down: false,
  };

  render() {
    return (
      <div className="votes-comment-section">
        {!this.state.up && <FontAwesomeIcon className="thumb-up" onClick={this.handleVoteUp} icon="thumbs-up" />}
        <span className="total-votes"> {this.state.voteMod} <FontAwesomeIcon className="heart" icon="heart" /> </span>
        {!this.state.down && <FontAwesomeIcon className="thumb-down" onClick={this.handleVoteDown} icon="thumbs-down" />}
      </div>
    );
  }

  handleVoteUp = e => {
    let voteUpAmount = 1;
    if (this.state.up) voteUpAmount = 2;
    this.setState({
      voteMod: this.props.votes + voteUpAmount,
      up: !this.state.up,
      down: false
    });
    api.addVote('up', this.props.id).then(data => {
      return data;
    });
  }
  handleVoteDown = e => {
    let voteAmount = 1
    if (this.state.down) voteAmount = 2
    this.setState({
      voteMod: this.props.votes - voteAmount,
      down: !this.state.down,
      up: false
    });
    api.addVote('down', this.props.id).then(data => {
      return data;
    });
  };
}

export default Voting;
