import React from 'react';
import { Link } from '@reach/router';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = props => {
  return (
    <div>
      <nav className="header-navbar">
        {' '}
        {props.user._id && (
          <Link className="article link-style" to={`/${props.user._id}/post-article`}>
            Add Article <FontAwesomeIcon icon="plus-circle" />
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
