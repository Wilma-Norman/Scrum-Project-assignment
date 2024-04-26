import styles from './Produces.module.css'
import { Artifacts } from '../../../data/data'
import Card from '../../Card'

const Produces = () => {
    return (
        <div className={styles.twoColumnTextContainer}>
            <Card text={Artifacts.whatText}/>
            <Card text={Artifacts.whatTextTwo}/>
            <Card text={Artifacts.bulletOne}/>
            <Card text={Artifacts.bulletTwo}/>
            <Card text={Artifacts.bulletThree}/>
            <Card text={Artifacts.whatTextThree}/>
            <img src={Artifacts.scrumAllPartsImgSource} alt=""/>
        </div>
        
    )
}
export default Produces