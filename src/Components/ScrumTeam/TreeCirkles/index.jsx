import styles from './Cirkles.module.css'
import {ScrumTeam} from '../../../data/data'
import { Buttons } from 'react-router-dom'

const TreeCirkles = ({direction, path}) => {
    return (
        <>
        <main className={styles.wraper}>
            <div className={styles.mainText}>
                <p className={styles.text}>{ScrumTeam.conclusionText}</p>
            </div>
            <div className={styles.cirkles}>
                <img src={ScrumTeam.circleImageSource} className={styles.image}/>
            </div>            
            <div>
                <Buttons direction="forward" path="/" />
                <Buttons direction="back" path="/essence" />
            </div>
        </main>
        </>
    )
}

export default TreeCirkles