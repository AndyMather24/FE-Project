import React, { Component } from 'react';
import * as api from '../../api';
import './Article.css';
class Article extends Component {
  state = {
    article: {},
    author: {}
  };
  render() {
    console.log(this.props);
    const { title, body, comment_count, votes } = this.state.article;
    const { username, avatar_url } = this.state.author;
    return (
      <article>
        <figure>
          <img src="https://source.unsplash.com/collection/1129594/1000x400" alt="placeholder img" />
        </figure>
        <h1>{title}</h1>
        <div className="user-info">
          {/* <img size=''src={avatar_url} /> */}
          <p>{username}</p>
        </div>
        <p>{body}</p>
        <div>
          <p>Scrimba is a platform for interactive coding screencast where you can run the code at any moment in time.</p>
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
