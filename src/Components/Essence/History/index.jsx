import Card from '../../Card'
import { Essence } from '../../../data/data'
import styles from './History.module.css'

const History = () => {
    return(
        <div className={styles.cardContainer}>
            <Card title={'A Brief History & The Dynamics'} text={null}/>
            <Card title={null} text={Essence.historyText}/>
        </div>
    )
}

export default History