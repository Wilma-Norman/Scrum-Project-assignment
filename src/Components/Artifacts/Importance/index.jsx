import styles from './Importance.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../../Card'

const Importance = () => {
    return (
        <div className={styles.importanceContainer}>
            <img src={Artifacts.teamCelebratingImgSource} alt="Team"/>
            <Card title="The Importance of the Artifacts" text={Artifacts.importanceOfArtifactsText}/>
        </div>
    )
}
export default Importance