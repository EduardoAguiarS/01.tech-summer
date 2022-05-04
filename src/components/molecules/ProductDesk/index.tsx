import Button from "../../atoms/Buttons";
import PageTitle from "../../atoms/PageTitle";
import ProductColors from "../../atoms/ProductColor";
import ProductDescription from "../../atoms/ProductDescription";
import ProductPrice from "../../atoms/ProductPrice";
import ProductSize from "../../atoms/ProductSize";
import ProductTitle from "../../atoms/ProductTitle";
import { SliderProduct } from "../../atoms/Slider";

import "./styles.scss";

const ProductDesk = () => {
    return (
        <section className="container__desk">
            <SliderProduct />
            <div className="info__container">
                <ProductTitle
                    title={"Rasteira Tira Dedo"}
                    code={"RT 0568 | 03.07.0653"}
                />

                <ProductPrice price={69.9} offer={55.2} portion={6} />

                <ProductColors />

                <ProductSize />

                <Button
                    text={"Adicionar à sacola"}
                    color={"white"}
                    bgColor={"#32917B"}
                    size={"btn__large"}
                    full={true}
                />

                <ProductDescription
                    text={
                        "Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal."
                    }
                />
            </div>
        </section>
    );
};

export default ProductDesk;
