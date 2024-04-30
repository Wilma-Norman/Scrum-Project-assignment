const Card = ({ title, text, className }) => {
    return (
        <div className={className ? `${className}` : null}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};
export default Card;
