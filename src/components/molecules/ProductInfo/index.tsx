import ProductTitle from "../../atoms/ProductTitle";
import "./styles.scss";

const ProductInfo = () => {
    return (
        <article className="product__info">
            <ProductTitle
                title={"Rasteira Tira Dedo"}
                code={"RT 0568 | 03.07.0653"}
            />
        </article>
    );
};

export default ProductInfo;
