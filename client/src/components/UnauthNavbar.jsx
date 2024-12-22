import React from 'react';
import logo from '../assets/logo.png';
import styles from '../styles/UnauthNavbar.module.css';  // Changed import to import as an object

const UnauthNavbar = () =>
{
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo" />
            <ul>
                <li>ABOUT</li>
                <li>SIGN IN</li>
                <li>SIGN UP</li>
            </ul>
        </nav>
    );
}

export default UnauthNavbar;
