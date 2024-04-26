import Card from '../../Card'
import { Essence } from '../../../data/data'
import styles from './WhatIsScrum.module.css'

const WhatIsScrum = () => {
    return(
        <div className={styles.whatIsScrumContainer}>
            <Card className={styles.whatIsScrumContainer} title={'What is Scrum?'} text={Essence.whatText}/>
            <Card title={'Why Scrum?'} text={Essence.whyText}/>
        </div>
    )
}

export default WhatIsScrum