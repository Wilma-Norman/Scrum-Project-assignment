import ArtifactHero from "../../Components/Artifacts/Hero"
import Produces from "../../Components/Artifacts/Produces"
import styles from "./Artifacts.module.css"

const Artifacts = () => {
    return(
        <div className={styles.artifactContainer}>
            <ArtifactHero/>
            <Produces/>
        </div>
    )
}    
export default Artifacts