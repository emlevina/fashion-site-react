import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styles from '../../styles/Header.module.css';

const Header = () => {
    return (
        <header className={`wrapper ${styles.header}`} >
            <Logo />
            <Menu />
        </header>
        
    );
};

export default Header;