/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Darktheme from '../layout/Darktheme';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkTheme, darkMode }) => {
    return (
        <nav className="navbar navbar-light bg-dark row">
            <div className="col">
                <a class="navbar-brand">Find Anywhere?</a>
            </div>

            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </ul>
            <div className="col">
                <Darktheme />
            </div>
        </nav>
    );
};

export default Navbar;
