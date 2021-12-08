import './Card.css'

const Card = (toto) => {
    return (
        <div className="card">
            <img src={toto.urlImage} alt="sac" />
            <p>{toto.bagName}</p>
            <p id="explore">explore</p>
        </div>
    );
};

export default Card;