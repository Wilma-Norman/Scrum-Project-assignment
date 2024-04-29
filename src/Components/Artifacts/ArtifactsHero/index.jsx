import styles from './ArtifactsHero.module.css'
import { Artifacts } from '../../../data/data'

const ArtifactsHero = () => {
    return (
        <div style={{backgroundImage:`url(${Artifacts.heroImgSource})`}} className={styles.heroContainer}>
            <h1 className={styles.header}>{Artifacts.heroTitle}</h1>
            <hr className={styles.heroLine}></hr>
        </div>
    )
}
export default ArtifactsHero