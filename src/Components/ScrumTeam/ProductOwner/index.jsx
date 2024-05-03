import styles from './ProductOwner.module.css'
import teamwork from '/Images/teamwork.jpg'
import { ScrumTeam } from '../../../data/data.js'

const ProductOwner = () => {
    return (
        <>
            <div className={styles.imagepart}>
                <div className={styles.imagewraper}>
                    <img className={styles.teamimage} src={teamwork} alt="Image" />
                </div>
                <div className={styles.textwraper}>
                    <p className={styles.whatText}>{ScrumTeam.whatText}</p>
                    <ul className={styles.keyRolesText}>{ScrumTeam.keyRolesText}
                        <li>{ScrumTeam.bulletOne}</li>
                        <li>{ScrumTeam.bulletTwo}</li>
                        <li>{ScrumTeam.bulletThree}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.productpart}>
                <div className={styles.headerwraper}>
                    <h1 className={styles.headertext}>The Product Owner</h1>
                </div>
                <div className={styles.textwraper}>
                    <p className={styles.productOwnerText}>{ScrumTeam.productOwnerText}</p>
                </div>
            </div>
        </>
    )
}

export default ProductOwner