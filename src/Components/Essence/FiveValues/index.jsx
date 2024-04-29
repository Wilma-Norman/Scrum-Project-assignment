import styles from './FiveValues.module.css';
import { Essence } from '../../../data/data'

const FiveValues = () => {
    return (
        <>
            <div className={styles.upperContainer}>
                <div className={styles.boxOne}>
                    <h2 className={styles.titleOne}>Inspection</h2>
                    <p>{Essence.inspectionText}</p>
                    <h4 className={styles.smallText}>{Essence.inspectionPS}</h4>
                </div>
                <div className={styles.boxTwo}>
                    <h2 className={styles.titleTwo}>Adaption</h2>
                    <p>{Essence.adaptionText}</p>
                    <h4 className={styles.smallText}>{Essence.adaptionPS}</h4>
                </div>
                <div className={styles.boxThree}>
                    <h2 className={styles.titleTwo}>Transparency</h2>
                    <p>{Essence.transparencyText}</p>
                    <h4 className={styles.smallText}>{Essence.transparencyPS}</h4>
                </div>
            </div>
            {/* <div className={styles.lowerWrapper}>
                <h1 className={styles.title}>The 5 values of Scrum</h1>
                <p className={styles.sideText}>To make the best and successful use of Scrum there are five values that also need to be met by everyone in the Team. The values help the team understand how to apply the Scrum rules and ceremonies in a good way and think of them as communication opportunities and improvement through making progress. The five values are:</p>
            </div> */}
        </>
    );
};

export default FiveValues;
