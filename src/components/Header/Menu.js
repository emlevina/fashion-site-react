import React from 'react';
import Button from '../Button'
import styles from '../../styles/Menu.module.css'
import data from '../../data/Menu.json'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.links}>
                {data && data.links
                    .map((item, index) => <li key={index}><a href={item.href} className={styles.link}>{item.name}</a></li>)}
            </ul>
            <Button text="sign up" classAdd={styles.button} />
        </nav>
    );
};

export default Menu;