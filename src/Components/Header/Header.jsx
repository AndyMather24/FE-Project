import React from 'react';
import './Header.css';
import { Link } from '@reach/router';
// import Navbar from '../Navbar/Navbar.jsx';
const Header = (props) => {
    return (
        <div className="header-section">
            <h1 class="logo">
                {' '}
                <Link className="home-link" to="/">
                    {' '}
                    FakeNews{' '}
                </Link>
            </h1>
            <section className="login-section">Login details</section>
            <nav>
                {/* <Navbar /> */}
            </nav>
        </div>
    );
};

export default Header;
