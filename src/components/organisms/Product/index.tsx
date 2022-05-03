import Breadcrumb from "../../atoms/Breadcrumb";
import ProductDesk from "../../molecules/ProductDesk";
import ProductMob from "../../molecules/ProductMob";
import "./styles.scss";

const Product = () => {
    return (
        <section className="product">
            <Breadcrumb />
            <ProductDesk />
            <ProductMob />
        </section>
    );
};

export default Product;
