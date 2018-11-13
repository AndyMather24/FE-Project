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
        {!this.props.user.username ? <button onClick={this.onOpenModal}>Log in</button> : <button onClick={this.logOutUser}>Log out</button>}
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Sign in!</h2>
          <form onSubmit={this.handleSubmit}>
            Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
            <button> Login </button>
          </form>
        </Modal>
        {this.props.user.username && (
          <Modal className="size" open={open} onClose={this.onCloseModal} center>
            <h2>Welcome {this.props.user.username}</h2>
            <button onClick={this.onCloseModal}> Start reading </button>
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
  logOutUser = () => {
    this.props.logOut();
  };
}
export default Login;
