import Modal from 'react-responsive-modal';
import React, { Component } from 'react';
import '../Login/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Login extends Component {
  state = {
    open: false,
    username: ''
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        {!this.props.user.username ? (
          <h6 onClick={this.onOpenModal}>
            <FontAwesomeIcon icon="sign-in-alt" />
          </h6>
        ) : (
          <h6 onClick={this.logOutUser}>
            {' '}
            <FontAwesomeIcon icon="sign-out-alt" />
            {''}logout
          </h6>
        )}
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Sign in!</h2>
          <form onSubmit={this.handleSubmit}>
            Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
            {this.props.error && <p>Thats not an existing Username.</p>}
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
