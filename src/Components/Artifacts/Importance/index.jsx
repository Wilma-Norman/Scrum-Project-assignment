import styles from './Importance.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../../Card'
import { Link } from 'react-router-dom'

const Importance = () => {
    return (
        <div className={styles.importanceContainer}>
            <div>
                <img src={Artifacts.teamCelebratingImgSource} alt="Team"/>
            </div>
            <div>
                <Card title="The Importance of the Artifacts" text={Artifacts.importanceOfArtifactsText}/>
                <Link to="/events">Link</Link>
            </div>
        </div>
    )
}
export default Importance