import ArtifactHero from "../../Components/Artifacts/Hero"
import Produces from "../../Components/Artifacts/Produces"
import ThreeColumn from "../../Components/Artifacts/ThreeColumn"
import TwoColumnText from "../../Components/Artifacts/DefinitionOfDone"
import SprintReview from '../../Components/Artifacts/SprintReview'
import Importance from "../../Components/Artifacts/Importance"
import styles from './Artifacts.module.css'

const Artifacts = () => {
    return(
        <div className={styles.artifactContainer}>
            <ArtifactHero/>
            <Produces/>
            <ThreeColumn/>
            <TwoColumnText/>
            <SprintReview/>
            <Importance/>
        </div>
    )
}    
export default Artifacts