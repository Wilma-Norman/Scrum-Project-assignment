import React from 'react';
import styles from './HeroImage.module.css';

const HeroImage = () => {
    return (
        <div className={styles.hero}>
            <img src="../../Public/Images/greenstrokes.jpg" alt="green picture" className={styles.image} />
            <div className={styles.overlay}>
                <h1 className={styles.text}>The Essence of Scrum</h1>
            </div>
        </div>
    );
};

export default HeroImage;
