import styles from './DevelopTeam.module.css'
import {ScrumTeam} from '../../../data/data.js'

const DevelopTeam = () => {
    return (
        <>
            <div className={styles.wraperScrum}>
                <div className={styles.headerwraper}>
                    <h1 className={styles.headerscrum}>The Scrum Master</h1>
                </div>
                <div className={styles.textwraper}>
                    <p className={styles.scrumText}>{ScrumTeam.scrumMasterText}</p>
                </div>                 
            </div>

            <div className={styles.wraperDevelop}>
                <div className={styles.wrapertext}>
                    <h1 className={styles.headerdevelop}>hello</h1>
                    <p className={styles.developText}></p>
                </div>
            </div>
        </>
    )
}

export default DevelopTeam