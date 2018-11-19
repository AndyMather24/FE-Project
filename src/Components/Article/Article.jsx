import React, { Component } from 'react';
import * as api from '../../api';
import './Article.css';
import Comments from '../Comments/Comments';
import Voting from '../Voting/Voting';
import Loading from '../Loading/Loading';

class Article extends Component {
  state = {
    article: {},
    author: {}
  };
  render() {
    const { title, body } = this.state.article;
    const { username, avatar_url } = this.state.author;
    return (
      <article className="article-container">
        {!this.state.article._id && <Loading />}

        <div className="article-img">
          <img src="https://source.unsplash.com/collection/1129594/2000x400" alt="article" />
        </div>
        <h1 className="article-title">{title}</h1>

        <p className="article-body">{body}</p>

        <div className="user-info">
          <img
            className="user-profile-picture"
            src="https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5020948430163a1dccb8aa26070664c4&auto=format&fit=crop&w=687&q=80"
            alt={username}
          />
          <p className="username"> Published by: {username}</p>
        </div>

        <div className="votes-comment-section">{this.state.article._id && <Voting article={this.state.article} />}</div>

        <div className="comments-section">
          <Comments user={this.props.user} article_id={this.props.article_id} />
        </div>
      </article>
    );
  }
  componentDidMount = () => {
    api.fetchArticleById(this.props.article_id).then(article => {
      this.setState({
        article,
        author: article.created_by
      });
    });
  };
}

export default Article;
