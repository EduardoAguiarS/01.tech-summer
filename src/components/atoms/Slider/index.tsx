import "./styles.scss";
import prodImg from "../../../../public/images/prod.png";
import chevronUp from "../../../../public/icons/chevron-up.svg";
import chevronDown from "../../../../public/icons/chevron-down.svg";
import chevronRight from "../../../../public/icons/chevron-right.svg";
import chevronLeft from "../../../../public/icons/chevron-left.svg";

import prod01 from "../../../../public/images/prod01.png";
import prod02 from "../../../../public/images/prod02.png";
import prod03 from "../../../../public/images/prod03.png";
import prod04 from "../../../../public/images/prod04.png";
import ProductPrice from "../ProductPrice";

export const SliderProduct = () => {
    return (
        <section className="container__slider">
            <div className="thumbs">
                <div className="up">
                    <button>
                        <img src={chevronUp} alt="Cima" />
                    </button>
                </div>

                <div className="thumb__img">
                    <img src={prodImg} alt="Sandalias" />
                    <img src={prodImg} alt="Sandalias" />
                    <img src={prodImg} alt="Sandalias" />
                    <img src={prodImg} alt="Sandalias" />
                </div>

                <div className="down">
                    <button>
                        <img src={chevronDown} alt="Baixo" />
                    </button>
                </div>
            </div>

            <div className="hero__img">
                <img src={prodImg} alt="Sandalias" />
            </div>
        </section>
    );
};

export const SliderOther = () => {
    const imgs = [prod01, prod02, prod03, prod04];

    return (
        <div className="slider__o">
            <div className="slider__imgs">
                <div>
                    {imgs.map(img => (
                        <img src={img} alt="1" />
                    ))}
                </div>
            </div>
            <div className="slider__nav">
                <div className="button">
                    <img src={chevronLeft} alt="" />
                </div>
                <span>1 de 3</span>
                <div className="button">
                    <img src={chevronRight} alt="" />
                </div>
            </div>
        </div>
    );
};
