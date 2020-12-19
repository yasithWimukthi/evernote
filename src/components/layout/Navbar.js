/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="green">
            <div className="nav-wrapper">
                <Link to="/" href="#" className="brand-logo">NoteBook</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/favorites">Favorites</NavLink></li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;

