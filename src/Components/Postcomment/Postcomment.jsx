import React, { Component } from 'react';
import * as api from '../../api';
import '../Comments/Comments.css';
class Postcomment extends Component {
  state = {
    comment: {}
  };
  render() {
    console.log('rending');
    return (
      <li className="comment user-comment">
        <img className="avatar" src="https://source.unsplash.com/collection/895539/35x35" alt="Profile of user" />
        <form onSubmit={this.handleSubmit}>
          <button className="info" type="submit">
            Post
          </button>
          <textarea onChange={this.handleChange} className="body" placeholder="type your comment here" name="body" />
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
    return api.postComment(this.props.article_id, this.state.comment).then(res => {
      if (res.status === 201) {
        this.props.updateComment(this.props.article_id);
      }
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
