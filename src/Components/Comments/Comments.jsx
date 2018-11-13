import React, { Component, Fragment } from 'react';
import * as api from '../../api';
import './Comments.css';
import Postcomment from '../Postcomment/Postcomment';
class Comments extends Component {
  state = {
    comments: [],
    hidden: true
  };
  render() {
    return (
      <Fragment>
        {this.state.hidden ? (
          <button className="button-style" onClick={this.toggleComments}>
            Show Comments
          </button>
        ) : (
          <button className="button-style" onClick={this.toggleComments}>
            {' '}
            Hide Comments
          </button>
        )}
        {!this.state.hidden && (
          <ul className="comment-section">
            {this.props.user.username && <Postcomment />}
            {this.state.comments &&
              this.state.comments.map(comment => {
                return (
                  <li className="comment user-comment">
                    <div className="info">
                      <p>{comment.created_by.username}</p>
                    </div>
                    <img
                      className="avatar"
                      src="https://source.unsplash.com/collection/895539/35x35"
                      width="35"
                      height="35"
                      alt="Profile Avatar"
                      title={comment.created_by.username}
                    />
                    <p className="body">{comment.body}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </Fragment>
    );
  }

  componentDidMount = () => {
    api.fetchCommentsById(this.props.article_id).then(({ comments }) => {
      this.setState({
        comments: comments
      });
    });
  };
  toggleComments = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };
}

export default Comments;
