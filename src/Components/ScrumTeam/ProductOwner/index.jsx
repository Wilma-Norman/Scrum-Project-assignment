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
                    <p className={styles.imageText}>text filetext filetext filetext filetext filetext filetext filetext filefiletext file filetext file filetext file</p>
                </div>

            </div>

            <div className={styles.productpart}>
                
                <div>
                    <h1>The Product Owner</h1>
                </div>

                <div>
                    <p>text file</p>
                </div>                
                
            </div>
       
        </>
    )
}

export default ProductOwner