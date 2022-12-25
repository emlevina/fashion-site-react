import React from 'react';
import styles from '../styles/Button.module.css'

const Button = ({classAdd, text, href}) => {
    return (
        <a className={`${classAdd} ${styles.button}`} href={href}>{text}</a>
    );
};

export default Button;