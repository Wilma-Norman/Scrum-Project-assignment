import styles from './HouseOfScrum.module.css'

const HouseOfScrum = () => {
    return (
        <>
        <div className= {styles.container}>
            <img src="../Public/Images/greenhouse.jpg" alt="house of scrum picture" />
            <div className={styles.text}>
                <h1 className={styles.title}>The house of Scrum</h1>
                <p>Think of Scrum like a house. The foundation of this house is empiricism, and the pillars holding it up are Adaptation, Inspection, and Transparency. The walls are built with bricks representing the Scrum values. This analogy helps us understand how Scrum works.</p>
                <p>Just like a house, if you remove the foundation, the house falls. If the pillars break, the roof caves in. If the walls get damaged, the house is exposed to weather. This metaphor shows how crucial it is to have a solid structure in Scrum, with all its parts working together.</p>
            </div>
        </div>
        </>
    )
}

export default HouseOfScrum;