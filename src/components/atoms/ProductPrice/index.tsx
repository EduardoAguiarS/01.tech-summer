import "./styles.scss";

interface PriceProps {
    price: number;
    offer: number;
    portion: number;
}

const ProductPrice = ({ price, offer, portion }: PriceProps) => {
    return (
        <div>
            <div>
                <span>R$ {price.toFixed(2).replace(".", ",")}</span>{" "}
                <span>R$ {offer.toFixed(2).replace(".", ",")}</span>
            </div>
            <div>
                <span>
                    Ou {portion}x de R${" "}
                    {(offer / portion).toFixed(2).replace(".", ",")}
                </span>
            </div>
        </div>
    );
};

export default ProductPrice;
