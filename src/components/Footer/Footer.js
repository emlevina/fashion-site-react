import React from 'react';
import styles from '../../styles/Footer.module.css'
import FooterMenuSection from './FooterMenuSection';
import data from '../../data/FooterMenu.json'
import dataSocial from '../../data/SocialIcons.json'

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.left}>
                    <h2 className={styles.title}>fashion</h2>
                    <p className={styles.text}>Complete your style with awesome clothes from us.</p>
                    <div className={styles["social-icons"]}>
                        {dataSocial && dataSocial.icons
                            .map((icon, index) => {
                                return (
                                    <a href={icon.href} className={styles.icon} target="_blank" rel="noopener noreferrer">
                                        <img alt={icon.alt} src={icon.src} key={index} />
                                    </a>
                                )})}
                    </div>
                </div>
                <div className={styles.menu}>
                    {data && data.sections.map((section, index) => <FooterMenuSection header={section.header} list={section.links} key={index} />)}
                </div>
            </div>
        </footer>
    );
};

export default Footer;