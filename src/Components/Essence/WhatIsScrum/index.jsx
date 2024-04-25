import styles from './WhatIsScrum.module.css'

const WhatIsScrum = () => {
    return (
        <>
        <div className={styles.whatIsScrumContainer}>
            <div>
                <p>It is an agile project management framework.Imagine Scrum like breaking work into small steps that you do as a team, trying new things as you go and getting feedback to get better. It's about working together to deliver value bit by bit. Scrum gives you a bit of a roadmap to follow, but you can customize it to fit what works best for you.</p>
            </div>
            <img src='/Images/Scrum-framework.jpg'/>
        </div>
        </>
    )
}

export default WhatIsScrum;