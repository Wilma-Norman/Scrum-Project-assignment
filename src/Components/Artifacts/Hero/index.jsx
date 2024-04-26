import styles from './Artifacts.module.css'

const ArtifactHero = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.header}>THREE ARTIFACTS <br/> OF SCRUM</h1>
            <hr className={styles.heroLine}></hr>
        </div>
    )
}
export default ArtifactHero