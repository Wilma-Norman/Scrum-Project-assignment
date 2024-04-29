import ArtifactHero from "../../Components/Artifacts/Hero"
import styles from "./Artifacts.module.css"

const Artifacts = () => {
    return(
        <div className={styles.artifactContainer}>
            <ArtifactHero/>
        </div>
    )
}

export default Artifacts