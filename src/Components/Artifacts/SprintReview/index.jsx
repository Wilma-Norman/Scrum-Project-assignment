import { Artifacts } from '../../../data/data'
import Card from '../../Card'
import styles from './SprintReview.module.css'

const SprintReview = () => {
    return (
        <div className={styles.twoColumnTextContainer}>
            <Card title="At the Sprint Review" text={Artifacts.sprintReviewText} className={styles.card}/>
        </div>
    )
}
export default SprintReview