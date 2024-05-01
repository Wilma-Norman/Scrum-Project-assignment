import styles from './Importance.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../../Card'
import { Link } from 'react-router-dom'
import Buttons from '../../Buttons'

const Importance = () => {
    return (
        <div className={styles.importanceContainer}>
            <div className={styles.imageWrapper}>
                <img src={Artifacts.teamCelebratingImgSource} alt="Team"/>
            </div>
            <div className={styles.textWrapper}>
                <Card title="The Importance of the Artifacts" text={Artifacts.importanceOfArtifactsText} />
                <div className={styles.navigationButton}>
                    <Buttons direction="back" path="/events"/>
                </div>
            </div>
        </div>
    )
}
export default Importance