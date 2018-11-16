import React, { Component } from 'react';
import * as api from '../../api';
import './Voting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Voting extends Component {
  state = {
    totalVotes: 0
  };

  render() {
    return (
      <div>
        <span>
          {' '}
          <FontAwesomeIcon onClick={this.handleVoteUp} className="thumb-up" icon="thumbs-up" />
          {'          '} {this.state.totalVotes} {'           '}
          <FontAwesomeIcon onClick={this.handleVoteDown} className="thumb-down" icon="thumbs-down" />
        </span>
      </div>
    );
  }
  componentDidMount = () => {};

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
