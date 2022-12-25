import React from 'react';
import styles from '../styles/ColoredLine.module.css'

const ColoredLine = ({classAdd}) => {
    return (
        <div className={`${styles["colored-line"]} ${styles[classAdd]}`} />
    );
};

export default ColoredLine;