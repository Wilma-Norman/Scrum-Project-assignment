import styles from './Card.module.css'

const Card = ({title, text}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
export default Card