import styles from './ScrumGuide.module.css'
import Buttons from '../../Buttons'
import { Home } from '../../../data/data'
import { Link } from 'react-router-dom'

const ScrumGuide = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>The Scrum Guide</h2>
                <p className={styles.text}>{Home.aboutText}</p>
                <p className={styles.smallText}>{Home.readyToGoText}</p>
                <div className={styles.a}>
                    <Buttons direction="forward" path="/essence"/>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src="../../Public/Images/happygirl.jpg" alt="Happy woman at office" />
            </div>
        </div>
        </>
    )
}

export default ScrumGuide;
