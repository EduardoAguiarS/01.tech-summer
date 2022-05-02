import Breadcrumb from "../../atoms/Breadcrumb";
import ProductInfo from "../../molecules/ProductInfo";
import "./styles.scss";

const Product = () => {
    return (
        <section className="product">
            <Breadcrumb />
            <ProductInfo />
        </section>
    );
};

export default Product;
