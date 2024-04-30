import { Artifacts } from '../../../data/data'
import Card from '../../Card'
import styles from './DefinitionOfDone.module.css'

const TwoColumnText = () => {
    return (
        <div className={styles.twoColumnTextContainer}>
            <Card title="The Definition of Done" text={Artifacts.DODText} className={styles.card}/>
        </div>
    )
}
export default TwoColumnText