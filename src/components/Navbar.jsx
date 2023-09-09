import React from 'react';
import './navbar.css';
import CategoryFilter from './CategoryFilter';

function Navbar() {
    return (
        <div className='navbar'>
            <img className='nav-logo' src="https://productlist-app.netlify.app/static/media/logo.8be8365c6b0831e4d3b2.png" alt="Logo" />
            <h1 className='nav-title'>Product List App</h1>
        </div>
    );
}

export default Navbar;
