import React, { Component } from 'react';
import * as api from '../../api.js';
import './Articles.css';
import Voting from '../Voting/Voting'
import Loading from '../Loading/Loading.jsx';
import { Link, navigate } from '@reach/router';
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
                <h5 >{article.title}</h5>
              </Link>
              <p className="article-body" >{article.body}</p>
              <div className="votes">
                <Voting id={article._id} votes={article.votes} />
              </div>
              <div className="comments">
                <Link className="comments" to={`/articles/${article._id}`}>
                  {article.comment_count} <FontAwesomeIcon className="comments" icon="comments" />{' '}
                </Link>

              </div>
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
          articles
        });
      }).catch(error => {
        navigate('/error')
      });
    } else {
      api
        .fetchArticles()
        .then(articles => {
          this.setState({
            articles
          });
        }).catch(error => {
          navigate('/error')
        });
    }
  }
}
export default Articles;
