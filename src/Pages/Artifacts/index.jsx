import ArtifactHero from "../../Components/Artifacts/Hero"
import Produces from "../../Components/Artifacts/Produces"
import ThreeColumn from "../../Components/Artifacts/ThreeColumn"
import styles from "./Artifacts.module.css"

const Artifacts = () => {
    return(
        <div className={styles.artifactContainer}>
            <ArtifactHero/>
            <Produces/>
            <ThreeColumn/>
        </div>
    )
}    
export default Artifacts