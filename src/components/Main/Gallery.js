import React from 'react';
import GalleryCard from './GalleryCard';
import styles from '../../styles/Gallery.module.css'

const Gallery = ({ classAdd, data }) => {
    return (
        <div className={`${styles.gallery} ${styles[classAdd]}`}>
            {data && data.cards.map(card => {
                return (
                    <GalleryCard
                        src={card.src}
                        title={card.title}
                        key={card.id}
                        classAdd={data["width-class"]} />
                )
            })}
        </div>
    );
};

export default Gallery;