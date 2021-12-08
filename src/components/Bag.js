import './Bag.js';

const Bag = (x) => {
    return (
        <div>
            <div className="bagCaract">
                {x.bagName}
            </div>
            <div className="photoContainer">
                <img src={x.urlImage} alt={x.bagName}></img>
            </div>
        </div>
    );
};

export default Bag;