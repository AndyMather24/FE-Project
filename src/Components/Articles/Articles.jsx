import React, { Component } from 'react';
import * as api from '../../api.js';
import './Articles.css';
class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="articles-container">
        {this.state.articles.length &&
          this.state.articles.map(article => {
            return (
              <div key={article._id} className="article-info-container fade">
                {article.belongs_to === 'football' && <img src="https://source.unsplash.com/collection/2540303/125x125" alt="placeholder img" />}
                {article.belongs_to === 'coding' && <img src="https://source.unsplash.com/collection/1129594/125x125" alt="placeholder img" />}
                {article.belongs_to === 'cooking' && <img src="https://source.unsplash.com/collection/630995/125x125" alt="placeholder img" />}
                <h6 className="title">{article.title}</h6>
                <p className="votes">Likes:{article.votes}</p>
                <p className="comments">Comments: {article.comment_count}</p>
              </div>
            );
          })}
      </div>
    );
  }
  componentDidMount = () => {
    if (this.props.topic_slug) {
      api.fetchArticlesByTopic(this.props.topic_slug).then(articles => {
        this.setState({
          articles: articles
        });
      });
    } else {
      api.fetchArticles().then(articles => {
        this.setState({
          articles: articles
        });
      });
    }
  };
}

export default Articles;
