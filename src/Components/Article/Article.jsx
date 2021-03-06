import React, { Component } from 'react';
import * as api from '../../api';
import './Article.css';
import Comments from '../Comments/Comments';
import Voting from '../Voting/Voting';
import Loading from '../Loading/Loading';

class Article extends Component {
  state = {
    article: {},
    author: {},
    load: true
  };
  render() {
    const { title, body } = this.state.article;
    const { username, avatar_url } = this.state.author;
    if (this.state.load) return <Loading />;
    else
      return (

        < article className="article-container" >
          <div className="article-img">
            <img src="https://source.unsplash.com/collection/1129594/2000x400" alt="article" />
          </div>
          <h1 className="article-title">{title}</h1>

          <p className="article-body">{body}</p>

          <div className="user-info">
            <img
              className="user-profile-picture"
              src={avatar_url}
              alt={username}
            />
            <p className="username"> Written By: {username}</p>
          </div>

          <div className="votes-comment-section">{this.state.article._id && <Voting id={this.state.article.id} votes={this.state.article.votes} />}</div>

          <div className="comments-section">
            <Comments user={this.props.user} article_id={this.props.article_id} />
          </div>
        </article >
      );
  }
  componentDidMount = () => {
    api.fetchArticleById(this.props.article_id).then(article => {
      this.setState({
        article,
        author: article.created_by,
        load: false
      });
    });
  };
}

export default Article;
