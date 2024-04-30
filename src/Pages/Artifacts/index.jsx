import ArtifactHero from "../../Components/Artifacts/Hero"
import Produces from "../../Components/Artifacts/Produces"
import ThreeColumn from "../../Components/Artifacts/ThreeColumn"
import SprintReview from '../../Components/Artifacts/SprintReview'
import styles from './Artifacts.module.css'

const Artifacts = () => {
    return(
        <div className={styles.artifactContainer}>
            <ArtifactHero/>
            <Produces/>
            <ThreeColumn/>
            <SprintReview/>
        </div>
    )
}    
export default Artifacts