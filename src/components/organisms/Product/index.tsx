import Breadcrumb from "../../atoms/Breadcrumb";
import PageTitle from "../../atoms/PageTitle";
import { SliderOther } from "../../atoms/Slider";
import ProductDesk from "../../molecules/ProductDesk";
import ProductMob from "../../molecules/ProductMob";

import "./styles.scss";

const Product = () => {
    return (
        <section className="product">
            <Breadcrumb />
            <ProductDesk />
            <ProductMob />
            <PageTitle title={"Quem viu, viu tambem"} />
            <SliderOther />
        </section>
    );
};

export default Product;
