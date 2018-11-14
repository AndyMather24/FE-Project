import React, { Component } from 'react';
import './Postarticle.css';
import * as api from '../../api';
class Postarticle extends Component {
  state = {
    article: {}
  };
  render() {
    console.log(this.props.topic);
    return (
      <div>
        <div class="Post-Art">
          <h1>Create Article</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="title" placeholder="Article title" onChange={this.handleChange} />
            <select defaultValue="" name="topic" onChange={this.handleSelect}>
              <option value="" selected disabled hidden>
                Select a topic
              </option>
              <option value="coding">Coding</option>
              <option value="football">Football</option>
              <option value="cooking">Cooking</option>
            </select>
            <textarea name="body" placeholder="Enter Article here" onChange={this.handleChange} />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.setState({
      article: {
        ...this.state.article,
        created_by: this.props.user._id
      }
    });
  };
  handleSelect = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      article: { ...this.state.article, [name]: value }
    });
  };
  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      article: { ...this.state.article, [name]: value }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    api.postArticle(this.state.article, this.state.article.topic).then(res => {
      return console.log(res);
    });
  };
}

export default Postarticle;
