import myimage from '../myimage.png';
import './Navbar.css';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="https://reactjs.org"
                className="nav-item-logo">
                    <img src={myimage} alt="Logo"/>
            </a>
            <button className="nav-item-right">
                Sign In
            </button>
        </nav>
    )
}

export default Navbar;