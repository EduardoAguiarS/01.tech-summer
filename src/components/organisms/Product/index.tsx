import Breadcrumb from "../../atoms/Breadcrumb";
import { SliderProduct } from "../../atoms/SliderProduct";
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
