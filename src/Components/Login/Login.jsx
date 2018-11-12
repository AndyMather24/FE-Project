import Modal from 'react-responsive-modal';
import React, { Component } from 'react';
import '../Login/Login.css';
class Login extends Component {
  state = {
    open: false,
    username: ''
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Log in</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Sign in!</h2>
          <form onSubmit={this.handleSubmit}>
            Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
            {this.props.user === null && <p>Please enter a value username.</p>}
            <button> Login </button>
          </form>
        </Modal>
        {this.props.user.username && (
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Welcome {this.props.user.username}</h2>
            <button> Start reading </button>
          </Modal>
        )}
      </div>
    );
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.setUser(this.state.username);
  };
}
export default Login;
