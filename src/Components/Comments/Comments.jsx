import React, { Component, Fragment } from 'react';
import * as api from '../../api';
import './Comments.css';
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
          <p className="button-style" onClick={this.toggleComments}>
            <FontAwesomeIcon icon="comments" />
          </p>
        ) : (
          <p className="button-style" onClick={this.toggleComments}>
            {' '}
            <FontAwesomeIcon icon="comments-slash" />
          </p>
        )}
        {!this.state.hidden && (
          <ul className="comment-section">
            <h4>Scroll for more...</h4>
            {this.state.comments &&
              this.state.comments.map(comment => {
                return (
                  <li key={comment._id} className="comment user-comment">
                    <div className="info">
                      <p />
                    </div>

                    {/* // <img
                    //   className="avatar"
                    //   src="this.state.comments.created_by.avatar_url"
                    //   width="35"
                    //   height="35"
                    //   alt="Profile Avatar"
                    //   title={comment.created_by.username}
                    // /> */}

                    <div className="body">
                      <p>
                        {comment.created_by.username} Says "{comment.body}"
                      </p>
                    </div>

                    {comment.created_by._id === this.props.user._id && (
                      <Delete updateComment={this.updateComments} article_id={this.props.article_id} id={comment._id} />
                    )}
                  </li>
                );
              })}
            {this.props.user && <Postcomment updateComment={this.updateComments} article_id={this.props.article_id} user={this.props.user} />}
          </ul>
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
