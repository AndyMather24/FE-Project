import React, { Component } from 'react';
import * as api from '../../api.js';
import './Articles.css';
import Voting from '../Voting/Voting'
import Loading from '../Loading/Loading.jsx';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Articles extends Component {
  state = {
    articles: [],

  };
  render() {
    return (
      <div className="articles-container">
        {!this.state.articles.length && <Loading />}
        {this.state.articles.map(article => {
          return (
            <div key={article._id} className="article-info-container">
              {article.belongs_to === 'football' && <img src="https://source.unsplash.com/collection/2540303/125x125" alt="placeholder" />}
              {article.belongs_to === 'coding' && <img src="https://source.unsplash.com/collection/1129594/125x125" alt="placeholder" />}
              {article.belongs_to === 'cooking' && <img src="https://source.unsplash.com/collection/630995/125x125" alt="placeholder" />}
              <Link className="title" to={`/articles/${article._id}`}>
                {' '}
                <h5 className="title">{article.title}</h5>
                <p>{article.body}</p>
              </Link>
              <p className="votes">
                <Voting article={article} />
              </p>
              <p className="comments">
                {article.comment_count} <FontAwesomeIcon className="comments" icon="comments" />{' '}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount = () => {
    if (this.props.topic_slug) {
      api.fetchArticlesByTopic(this.props.topic_slug).then(articles => {
        console.log(articles)
        this.setState({
          articles
        });
      }).catch(error => {
        this.props.navigate('/error')
      });
    } else {
      api
        .fetchArticles()
        .then(articles => {
          this.setState({
            articles
          });
        }).catch(error => {
          this.props.navigate('/error')
        });
    }


  }
}
export default Articles;
