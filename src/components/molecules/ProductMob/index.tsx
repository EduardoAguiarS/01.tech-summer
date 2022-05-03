import Button from "../../atoms/Buttons";
import ProductColors from "../../atoms/ProductColor";
import ProductDescription from "../../atoms/ProductDescription";
import ProductPrice from "../../atoms/ProductPrice";
import ProductSize from "../../atoms/ProductSize";
import ProductTitle from "../../atoms/ProductTitle";
import "./styles.scss";

const ProductMob = () => {
    return (
        <section className="mob__container">
            <ProductTitle
                title={"Rasteira Tira Dedo"}
                code={"RT 0568 | 03.07.0653"}
            />

            <div
                style={{
                    width: "250px",
                    height: "325px",
                    border: "1px solid black",
                    margin: "0 auto"
                }}
            >
                Slide Here!
            </div>

            <ProductColors />

            <ProductSize />

            <div className="buy__container">
                <ProductPrice price={69.9} offer={55.2} portion={6} />
                <Button
                    text={"Adicionar à sacola"}
                    color={"white"}
                    bgColor={"#32917B"}
                    size={"btn__large"}
                    full={false}
                />
            </div>
            <ProductDescription
                text={
                    "Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal."
                }
            />
        </section>
    );
};

export default ProductMob;
