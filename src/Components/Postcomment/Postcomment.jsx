import React, { Component } from 'react';
import * as api from '../../api';
class Postcomment extends Component {
  state = {
    comment: {}
  };
  render() {
    return (
      <div>
        <li class="new-comment">
          <form>
            <textarea onChange={this.handleChange} placeholder="Write your comment here" name="comment" />
            <div>
              <img src="images/avatar_user_2.jpg" width="35" alt="" title="Bradley Jones" />
              <button>Submit</button>
            </div>
          </form>
        </li>
      </div>
    );
  }
  componentDidMount = () => {};
  handleSubmit = e => {
    e.preventDefault();
    api.postComment(this.props.article._id, this.state.comment).then(res => {
      return console.log(res);
    });
  };
  handleChange = e => {
    const name = e.target.name;
    this.setState({
      comment: {
        ...this.state.comment,
        [name]: e.target.value
      }
    });
  };
}

export default Postcomment;
