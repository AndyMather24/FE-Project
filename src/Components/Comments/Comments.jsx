import React, { Component, Fragment } from 'react';
import * as api from '../../api';
import './Comments.css';
import '../Voting/Voting.css';
import '../Article/Article.css';
import Postcomment from '../Postcomment/Postcomment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Delete from '../Delete/Delete';

class Comments extends Component {
  state = {
    comments: [],
    hidden: true
  };
  render() {
    return (
      <Fragment>
        {this.state.hidden ? (
          <p onClick={this.toggleComments}>
            {this.props.comment_count} show Comments <FontAwesomeIcon className="comments-icon" icon="comments" />
          </p>
        ) : (
            <p onClick={this.toggleComments}>
              {' '}
              Hide Comments <FontAwesomeIcon className="comments-icon" icon="comment-slash" />
            </p>
          )}

        {!this.state.hidden && (
          <div>
            <h4>Scroll for more...</h4>
            {this.state.comments &&
              this.state.comments.map(comment => {
                return (
                  <div key={comment._id} className="comment-box">
                    <div className="user-info-comments">
                      <p className="username-comment">{comment.created_by.username} Says...</p>
                      <img
                        className="user-img-comment"

                        src={comment.created_by.avatar_url}
                        width="55"
                        height="55"
                        alt="Profile Avatar"
                        title={comment.created_by.username}
                      />
                    </div>
                    <div className="comment-text">
                      <p>"{comment.body}"</p>
                    </div>
                    <div className="delete-bin">
                      {comment.created_by._id === this.props.user._id && (
                        <Delete updateComment={this.updateComments} article_id={this.props.article_id} id={comment._id} />
                      )}
                      <div />
                    </div>
                  </div>
                );
              })}
            <Postcomment updateComment={this.updateComments} article_id={this.props.article_id} user={this.props.user} />
          </div>
        )}
      </Fragment>
    );
  }

  componentDidMount = () => {
    this.updateComments(this.props.article_id);
  };

  updateComments = id => {
    return api.fetchCommentsById(id).then(({ comments }) => {
      this.setState({
        comments
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
