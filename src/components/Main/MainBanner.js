import React from 'react';
import styles from '../../styles/MainBanner.module.css'
import Button from '../Button'
import ColoredLine from '../ColoredLine';

const MainBanner = () => {
    return (
        <section className={`${styles.section} wrapper`} id="main-banner">
                <div className={styles.left}>
                    <div className={styles["main-banner__title-with-lines"]}>
                        <ColoredLine classAdd="colored-line--lets"/>
                        <ColoredLine classAdd="colored-line--unique"/>
                        <h1 className={styles.title}>Let’s<br />explore<br />unique<br />clothes.</h1>
                    </div>
                    <p className={styles.text}>Live for Influential and Innovative fashion!</p>
                    <img alt="" className={styles.vector} src="assets/vector_decor.svg" />
                    <Button classAdd={styles.button} text="Shop now" href="#"/>
                </div>
                <div className={styles.right}>
                    <img alt="" src="assets/main-banner/main-image.png" className={styles.bgImage} />
                    <img alt="" src="assets/main-banner/star.svg" className={`${styles.star} ${styles["star--9"]}`} />
                    <img alt="" src="assets/main-banner/star.svg" className={`${styles.star} ${styles["star--10"]}`} />
                    <img alt="" src="assets/main-banner/star.svg" className={`${styles.star} ${styles["star--11"]}`} />
                    <img alt="" src="assets/main-banner/star.svg" className={`${styles.star} ${styles["star--12"]}`} />
                </div>
            </section>
    );
};

export default MainBanner;