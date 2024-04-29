import WhatIsScrum from "../../Components/Essence/WhatIsScrum"
import History from "../../Components/Essence/History"
import styles from './Essence.module.css'

const Essence = () => {
    return(
        <div className={styles.essenceContainer}>
            <WhatIsScrum/>  
            <History />
        </div>
    )
}

export default Essence