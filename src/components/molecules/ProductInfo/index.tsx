import ProductColors from "../../atoms/ProductColor";
import ProductDescription from "../../atoms/ProductDescription";
import ProductPrice from "../../atoms/ProductPrice";
import ProductTitle from "../../atoms/ProductTitle";
import "./styles.scss";

const ProductInfo = () => {
    return (
        <article className="product__info">
            <ProductTitle
                title={"Rasteira Tira Dedo"}
                code={"RT 0568 | 03.07.0653"}
            />
            <ProductPrice price={69.0} offer={55.2} portion={6} />
            <ProductDescription
                text={
                    "Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal."
                }
            />
            <ProductColors />
        </article>
    );
};

export default ProductInfo;
