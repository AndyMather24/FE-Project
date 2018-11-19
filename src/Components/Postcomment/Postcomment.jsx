import React, { Component } from 'react';
import * as api from '../../api';
import '../Postcomment/Postcomment.css';
class Postcomment extends Component {
  state = {
    comment: {}
  };
  render() {
    console.log('rending');
    return (
      <li className="post-container">
        <img className="user-photo" src="https://source.unsplash.com/collection/895539/35x35" alt="Profile of user" />
        <form className="comment-body" onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.comment.body}
            onChange={this.handleChange}
            className="comment-body"
            placeholder="type your comment here"
            name="body"
            required
          />
          <button className="button-post" type="submit">
            Post
          </button>
        </form>
      </li>
    );
  }
  componentDidMount = () => {
    this.setState({
      comment: { created_by: this.props.user._id }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    return api.postComment(this.props.article_id, this.state.comment).then(res => {
      if (res.status === 201) {
        this.props.updateComment(this.props.article_id);
        this.setState({
          comment: { body: '' }
        });
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
