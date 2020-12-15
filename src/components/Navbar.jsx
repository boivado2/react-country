/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark row">
            <div className="col">
                <a class="navbar-brand">Find Anywhere?</a>
            </div>

            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
