import { Essence } from '../../../data/data'
import styles from './History.module.css'

const History = () => {
    return(
        <div className={styles.historyContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2>A Short History<br/> & <br/>The Dynamics</h2>
                </div>
                <p>{Essence.historyText}</p> 
            </div>
            <img src={Essence.frameworkImgSource} alt='Overview of The Scrum Framework'/>
        </div>
    )
}

export default History