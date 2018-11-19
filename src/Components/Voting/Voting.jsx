import React, { Component } from 'react';
import * as api from '../../api';
import './Voting.css';
import '../Article/Article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Voting extends Component {
  state = {
    totalVotes: 0
  };

  render() {
    return (
      <div className="votes-comment-section">
        <FontAwesomeIcon className="thumb-up" onClick={this.handleVoteUp} icon="thumbs-up" />
        <span className="total-votes"> {this.state.totalVotes} </span>
        <FontAwesomeIcon className="thumb-down" onClick={this.handleVoteDown} icon="thumbs-down" />
      </div>
    );
  }

  componentDidMount = () => {
    this.setState({
      totalVotes: this.props.article.votes
    });
  };

  handleVoteUp = e => {
    this.setState({
      totalVotes: this.state.totalVotes + 1
    });
    api.addVote('up', this.props.article._id).then(data => {
      return data;
    });
  };

  handleVoteDown = e => {
    this.setState({
      totalVotes: this.state.totalVotes - 1
    });
    api.addVote('down', this.props.article._id).then(data => {
      return data;
    });
  };
}

export default Voting;
