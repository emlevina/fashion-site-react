import React from 'react';
import styles from '../../styles/Subscription.module.css'
import Button from '../Button';

const Subscription = () => {
    return (
        <section className={styles.section} id="subscription">
            <div className={styles.container}>
                <h1 className={styles.title}>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
                <p className={styles.text}>Type your email down below and be young wild generation</p>
                <form className={styles.form}>
                    <input type="email" className={styles.input} placeholder="Add your email here" />
                    <Button classAdd={styles.button} text="Send" href="#" type="submit"/>
                </form>
            </div>
        </section>
    );
};

export default Subscription;