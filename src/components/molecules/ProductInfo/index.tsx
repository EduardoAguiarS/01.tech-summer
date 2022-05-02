import "./styles.scss";

const ProductInfo = ({ title, code, price, priceOffer, vezes }: any) => {
    return (
        <article className="product__info">
            <div className="product__header">
                <h2>{title}</h2>
                <span>{code}</span>
            </div>

            <div className="product__price">
                <div className="cost">
                    <span className="price">
                        R$ {price.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="offer">
                        R$ {priceOffer.toFixed(2).replace(".", ",")}
                    </span>
                </div>
                <span className="parcel">
                    Ou {vezes}x de R${" "}
                    {(priceOffer / vezes).toFixed(2).replace(".", ",")}
                </span>
            </div>
        </article>
    );
};

export default ProductInfo;
