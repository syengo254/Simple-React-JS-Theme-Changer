import React from 'react';
import ReactLogo from '../logo.svg';
import './Header.css';

const Header = () => {
    return ( 
        <div className='header'>
            <div className="logo">
                <img src={ReactLogo} width='50' height='50' alt="react-logo" />
                <h2>React Facts</h2>
            </div>
            <div className='title'>
                React Course - Project 1
            </div>
        </div>
     );
}
 
export default Header;