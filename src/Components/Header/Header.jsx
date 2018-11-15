import React from 'react';
import './Header.css';
import { Link } from '@reach/router';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar.jsx';
const Header = props => {
  return (
    <div className="header-section">
      <h1 className="logo">
        {' '}
        <Link className="home-link" to="/">
          {' '}
          ManyReads{' '}
        </Link>
      </h1>
      <section className="login-section">
        <Login logOut={props.logOut} setUser={props.setUser} user={props.user} />
      </section>
      <nav>{props.user.username && <Navbar user={props.user} />}</nav>
    </div>
  );
};

export default Header;
