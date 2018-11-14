import React from 'react';
import { Link } from '@reach/router';
import './Navbar.css';
const Navbar = props => {
  return (
    <div>
      <nav className="header-navbar">
        {' '}
        <Link className="article fade" to={`/${props.user._id}/post-article`}>
          Create Article
        </Link>
        | My Articles
      </nav>
    </div>
  );
};

export default Navbar;
