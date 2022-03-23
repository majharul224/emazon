import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/ordrr">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/manage inventory">Manage Inventory</a>
                <a href="about">About</a>
            </div>
        </nav>
    );
};

export default Header;