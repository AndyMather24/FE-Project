import React, { Component } from 'react';
import * as api from '../../api';
import './Article.css';
import Comments from '../Comments/Comments';
class Article extends Component {
  state = {
    article: {},
    author: {}
  };
  render() {
    const { title, body } = this.state.article;
    const { username } = this.state.author;
    return (
      <article>
        <figure>
          <img className="article-image" src="https://source.unsplash.com/collection/1129594/1000x400" alt="article image" />
        </figure>
        <h1>{title}</h1>

        <p>{body}</p>
        <div className="user-info">
          <img className="user-profile-picture" src="https://source.unsplash.com/collection/895539/70x70" alt="user profile" />
          <p className="username"> Published by: {username}</p>
        </div>

        <div>
          <Comments article_id={this.props.article_id} />
        </div>
      </article>
    );
  }
  componentDidMount = () => {
    api.fetchArticleById(this.props.article_id).then(article => {
      this.setState({
        article: article,
        author: article.created_by
      });
    });
  };
}

export default Article;
