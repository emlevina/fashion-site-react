import React from 'react';
import styles from '../../styles/SaleBanner.module.css'
import Button from '../Button';
import ColoredLine from '../ColoredLine';

const SaleBanner = () => {
    return (
        <section className={styles.section} id="sale-banner" style={{backgroundImage: "url('/assets/sale-banner/background.png')"}}>
                <div className={`wrapper ${styles.wrapper}`}>
                    <div className={styles.right}>
                        <div className={styles["title-container"]}>
                            <h1 className={styles.title}>
                                PAYDAY<br />
                                SALE NOW
                            </h1>
                            <ColoredLine classAdd={"colored-line--payday"}/>
                        </div>
                        <p className={styles.text}>Spend minimal $100 get 30% off
                            voucher code for your next purchase</p>
                        <p className={styles.text}>
                            <span className={styles["text--bold"]}>1 June - 10 June 2021</span><br />
                            *Terms & Conditions apply
                        </p>
                        <Button classAdd={styles.button} text="Shop now" href="#"/>
                    </div>
                </div>
            </section>
    );
};

export default SaleBanner;