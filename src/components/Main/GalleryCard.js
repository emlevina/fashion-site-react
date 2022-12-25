import React from 'react';
import styles from '../../styles/GalleryCard.module.css'

const GalleryCard = ({src, title, classAdd}) => {
    return (
        <div className={`${styles.card} ${styles[classAdd]}`}>
            <img alt={title} className={styles.image}
                src={src} />
            <div className={styles["under-card-image"]}>
                <div className={styles.caption}>
                    <h3 className={styles.title}>{title}</h3>
                    <h4 className={styles.subtitle}>Explore now!</h4>
                </div>
                <img alt="" className={styles.arrow} src="assets/new-arrivals/arrow.svg" />
            </div>
        </div>
    );
};

export default GalleryCard;