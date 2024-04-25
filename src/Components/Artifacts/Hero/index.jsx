import styles from './Artifacts.module.css'


const ArtifactHero = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.header}>Three Artifacts <br/> of Scrum</h1>
            <hr className={styles.heroLine}></hr>
        </div>
    )
}
export default ArtifactHero