import styles from './ProductOwner.module.css'
import teamwork from '../../../../Public/Images/teamwork.jpg'

const ProductOwner = () => {
    return (
        <>
        
            <div className={styles.imagepart}>

                <div className={styles.imagewraper}>
                    <img className={styles.teamimage} src={teamwork} alt="Image"/>
                </div>

                <div className={styles.textwraper}>
                    <p className={styles.imageText}>text filetext filetext filetext filetext filetext </p>                    
                </div>

            </div>

            <div className={styles.productpart}>

                <div className={styles.headerwraper}>
                    <h1 className={styles.headertext}>The Product Owner</h1>
                </div>

                <div className={styles.textwraper}>
                    <p className={styles.ptext}>text file</p>
                </div>                
                
            </div>
       
        </>
    )
}

export default ProductOwner