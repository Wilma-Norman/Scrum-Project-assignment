import { Essence } from '../../../data/data';
import styles from './Theory.module.css'

const Theory = () => {
    return(
        <div className={styles.theoryContainer}>
            <div className={styles.contentContainer}>
                <h2>{'The Theory of Scrum'}</h2>
                <p>{Essence.theoryText}</p>
                <p>{Essence.secondTheoryText}</p>
            </div>
            <div className={styles.imgContainer}>
                <img src={Essence.manWorkingImgSource} alt='image of man working by computer' width={'200px'}/>
            </div>
        </div>
    )
}

export default Theory;