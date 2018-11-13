import React, { Component } from 'react';
import * as api from '../../api';
import '../Comments/Comments.css';
class Postcomment extends Component {
  state = {
    comment: {}
  };
  render() {
    return (
      <li className="comment user-comment">
        <img className="avatar" src="https://source.unsplash.com/collection/895539/35x35" alt="Profile of user" />
        <form onSubmit={this.handleSubmit}>
          <button className="info" type="submit">
            Post
          </button>
          <textarea onChange={this.handleChange} className="body" placeholder="Write your comment here" name="body" />
        </form>
      </li>
    );
  }
  componentDidMount = () => {
    this.setState({
      comment: { ...this.state.comment, created_by: this.props.user._id }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.article_id, this.state.comment);
    api.postComment(this.props.article_id, this.state.comment).then(res => {
      return console.log(res);
    });
  };
  handleChange = e => {
    const name = e.target.name;
    this.setState({
      comment: {
        ...this.state.comment,
        [name]: e.target.value
      }
    });
  };
}

export default Postcomment;
