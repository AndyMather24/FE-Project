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
        <p>
          {this.state.totalVotes}
          <FontAwesomeIcon className="heart-icon" icon="heart" /> {this.state.totalVotes}
        </p>

        <button onClick={this.handleVote} name="up" value="-1">
          {' '}
          vote up {/* <FontAwesomeIcon icon="thumbs-up" />{' '} */}
        </button>
        <button onClick={this.handleVote} name="down" value="1">
          {' '}
          Vote Down {/* <FontAwesomeIcon icon="thumbs-down" />{' '} */}
        </button>
      </div>
    );
  }
  componentDidMount = () => {
    this.setState({
      totalVotes: this.props.article.votes
    });
  };

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
