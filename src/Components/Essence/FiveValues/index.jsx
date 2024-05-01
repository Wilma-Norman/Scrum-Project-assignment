import { Essence } from '../../../data/data'
import styles from './FiveValues.module.css'

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
                <hr className={styles.lines}></hr>
                <div className={styles.lowerContainer}>
                    <h1 className={styles.title}>The 5 values of Scrum</h1>
                    <p className={styles.sideText}>{Essence.fiveValuesText}</p>
                </div>
             
        </>
    );
};

export default FiveValues;
