import './Product.js';
import Bag from './Bag';

const Product = () => {
    return (
        <div>
            <div className="test">
                <button className="btnTitle">Products</button>
            </div>
            <div className="listBags">
                <Bag bagName="Classic" urlImage="https://checkmybags.netlify.app/static/media/string-bag-brown.1cc7fd14.jpg" />
                <Bag bagName="Opéra" urlImage="https://checkmybags.netlify.app/static/media/ring-bag-black.863ca06f.jpg" />
                <Bag bagName="Esprit" urlImage="https://checkmybags.netlify.app/static/media/fancy-bag-pink.836c4c46.jpg" />
                <Bag bagName="Charme" urlImage="https://checkmybags.netlify.app/static/media/classic-bag-green.16f7e151.jpg" />
                <Bag bagName="Vintage" urlImage="https://checkmybags.netlify.app/static/media/ring-bag-black.863ca06f.jpg" />
            </div>

        </div>
    );
};

export default Product;