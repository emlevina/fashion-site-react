import React from 'react';
import styles from '../../styles/Logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img alt="Logo" className={styles.img} src="/assets/logo.svg" />
            <h2 className={styles.text}>Fashion</h2>
        </div>
    );
};

export default Logo;