import WhatIsScrum from "../../Components/Essence/WhatIsScrum"
import History from "../../Components/Essence/History"
import styles from './Essence.module.css'
import HouseOfScrum from "../../Components/Essence/HouseOfScrum"

const Essence = () => {
    return(
        <div className={styles.essenceContainer}>
            <WhatIsScrum/>  
            <History />
            <HouseOfScrum />

        </div>
    )
}

export default Essence;