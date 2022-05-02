import Breadcrumb from "../../atoms/Breadcrumb";
import ProductInfo from "../../molecules/ProductInfo";
import "./styles.scss";

const Product = () => {
    return (
        <section className="product">
            <Breadcrumb />
            <ProductInfo
                title={"Rasteira Tira Dedo"}
                code={"RT 0568 | 03.07.0653"}
                price={69.9}
                priceOffer={55.2}
                vezes={6}
            />
        </section>
    );
};

export default Product;
