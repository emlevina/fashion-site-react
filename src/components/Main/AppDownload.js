import React from 'react';
import styles from '../../styles/AppDownload.module.css'

const AppDownload = () => {
    return (
        <section className={`${styles.section} wrapper`} id="app-download">
                <div className={styles.left}>
                    <h2 className={styles.title}>DOWNLOAD APP &
                        GET THE VOUCHER!</h2>
                    <p className={styles.text}>Get 30% off for first transaction using
                        Rondovision mobile app for now.</p>
                    <div className={styles["download-buttons"]}>
                        <img alt="AppStore" src="assets/download-app/applestore.png"
                            className={styles["download-button"]} />
                        <img alt="GooglePlay" src="assets/download-app/googleplay.png"
                            className={styles["download-button"]} />
                    </div>
                </div>
                <div className={styles["image-container"]}>
                    <img alt="" className={styles.image} src="assets/download-app/mobile-phone.png" />
                </div>
            </section>
    );
};

export default AppDownload;