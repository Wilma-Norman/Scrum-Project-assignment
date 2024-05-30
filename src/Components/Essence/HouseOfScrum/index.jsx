import styles from './HouseOfScrum.module.css'
import { Essence } from '../../../data/data'

const HouseOfScrum = () => {
    return (
        <>
        <div className= {styles.container}>
            <img src="../Public/Images/greenhouse.jpg" alt="house of scrum picture" />
            <div className={styles.text}>
                <h2 className={styles.title}>The house of Scrum</h2>
                <p>{Essence.houseOfScrumTextOne}</p>
                <p>{Essence.houseOfScrumTextTwo}</p>
            </div>
        </div>
        </>
    )
}

export default HouseOfScrum;