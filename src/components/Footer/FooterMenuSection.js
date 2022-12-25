import React from 'react';
import styles from '../../styles/FooterMenuSection.module.css'

const FooterMenuSection = ({header, list}) => {
    return (
        <ul className={styles.section}>
            <h4 className={styles["section-header"]}>{header}</h4>
            {list && list.map((item, index)=><li className={styles.link} key={index}><a href={item.href} >{item.name}</a></li>)}
        </ul>
    );
};

export default FooterMenuSection;