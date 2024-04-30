import styles from './ThreeColumn.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../../Card'

const ThreeColumn = () => {
    return (
        <div className={styles.threeColumnContainer}>
            <Card title="The Product Backlog" text={Artifacts.productBacklogText} className={styles.firstcard} />
            <Card title="The Sprint Backlog" text={Artifacts.sprintBacklogText} className={styles.secondcard}/>
            <Card title="The Increment" text={Artifacts.incrementText} className={styles.thirdcard}/>
        </div>
        
    )
}
export default ThreeColumn