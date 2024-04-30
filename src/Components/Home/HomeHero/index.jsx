import { Home } from '../../../data/data'
import styles from './HomeHero.module.css'

const HomeHero = () => {
    return (
        <div style={{backgroundImage:`url(${Home.heroImgSource})`}} className={styles.heroContainer}>
            <h1 className={styles.header}>{Home.heroTitle}</h1>
            <hr className={styles.heroLine}></hr>
        </div>
    )
}
export default HomeHero