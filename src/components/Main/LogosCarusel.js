import React from 'react';
import styles from '../../styles/LogosCarusel.module.css'

const LogosCarusel = () => {
    return (
        <section className={styles["logos-carusel"]} id="logos-carusel">
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.row}>
                    <img className={styles.logo} alt="H&M logo" src="assets/logos-carusel/logo_hm.png" />
                    <img className={styles.logo} alt="Obey logo" src="assets/logos-carusel/logo_obey.png" />
                    <img className={styles.logo} alt="Shopify logo" src="assets/logos-carusel/logo_shopify.png" />
                </div>
                <div className={styles.row}>
                    <img className={styles.logo} alt="Lacoste logo" src="assets/logos-carusel/logo_lacoste.png" />
                    <img className={styles.logo} alt="Levis logo" src="assets/logos-carusel/logo_levis.png" />
                    <img className={styles.logo} alt="Amazon logo" src="assets/logos-carusel/logo_amazon.png" />
                </div>
            </div>
        </section>
    );
};

export default LogosCarusel;