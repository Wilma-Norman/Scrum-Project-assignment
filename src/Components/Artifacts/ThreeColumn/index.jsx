import styles from './ThreeColumn.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../Card'


const ThreeColumn = () => {
    return (
        <div className={styles.threeColumnContainer}>
            <Card title="The Product Backlog" text={Artifacts.productBacklogText}/>
            <Card title="The Sprint Backlog" text={Artifacts.sprintBacklogText}/>
            <Card title="The Increment" text={Artifacts.incrementText}/>
        </div>
        
    )
}
export default ThreeColumn