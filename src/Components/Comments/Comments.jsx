import React, { Component, Fragment } from 'react';
import * as api from '../../api';
import './Comments.css';
class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <Fragment>
        <ul className="comment-section">
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
      </Fragment>
    );
  }

  componentDidMount = () => {
    api.fetchCommentsById(this.props.article_id).then(({ comments }) => {
      console.log('set');
      this.setState({
        comments: comments
      });
    });
  };
}

export default Comments;
