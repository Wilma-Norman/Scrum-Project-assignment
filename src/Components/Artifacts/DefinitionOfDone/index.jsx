import styles from './DefinitionOfDone.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../../Card'

const TwoColumnText = () => {
    return (
        <div className={styles.twoColumnTextContainer}>
            <Card title="The Product Backlog" text={Artifacts.productBacklogText}/>
        </div>
        
    )
}
export default TwoColumnText