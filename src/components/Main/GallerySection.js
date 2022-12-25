import React from 'react';
import Gallery from './Gallery';
import data from '../../data/GallerySections.json';
import styles from '../../styles/GallerySection.module.css'

const GallerySection = ({ header }) => {
    return (
        <section className={`${styles.section} wrapper`} id="new-arrivals">
            <div className={styles["header-container"]}>
                <h2 className={styles.header}>{header}</h2>
                <img alt="" className={styles.vector} src="assets/vector_decor.svg" />
            </div>
            <Gallery data={data[header]}
                classAdd={data[header]["gap-class"]}
            />
        </section>
    );
};

export default GallerySection;