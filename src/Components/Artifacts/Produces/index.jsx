import styles from './Produces.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../../Card'

const Produces = () => {
    return (
        <div className={styles.twoColumnTextContainer}>
            <div className={styles.textWrapper}>
                <p>{Artifacts.whatText}</p>
                <p>{Artifacts.whatTextTwo}</p>
                <ul>
                    <li>{Artifacts.bulletOne}</li>
                    <li>{Artifacts.bulletTwo}</li>
                    <li>{Artifacts.bulletThree}</li>
                </ul>
                <p>{Artifacts.whatTextThree}</p>
            </div>
            <div className={styles.imageWrapper}>
                <img src={Artifacts.scrumAllPartsImgSource} alt="a picture of scrum" />
            </div>
        </div> 
    )
}
export default Produces