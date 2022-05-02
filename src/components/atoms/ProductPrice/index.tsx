import "./styles.scss";

interface PriceProps {
    price: number;
    offer: number;
    portion: number;
}

const ProductPrice = ({ price, offer, portion }: PriceProps) => {
    return (
        <div className="price__container">
            <div className="product__price">
                <span className="price">
                    R$ {price.toFixed(2).replace(".", ",")}
                </span>{" "}
                <span className="offer">
                    R$ {offer.toFixed(2).replace(".", ",")}
                </span>
            </div>
            <div className="portion">
                <span>
                    Ou {portion}x de R${" "}
                    {(offer / portion).toFixed(2).replace(".", ",")}
                </span>
            </div>
        </div>
    );
};

export default ProductPrice;
