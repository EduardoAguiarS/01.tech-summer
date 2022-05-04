import "./styles.scss";
import prodImg from "../../../../public/images/prod.png";
import chevronUp from "../../../../public/icons/chevron-up.svg";
import chevronDown from "../../../../public/icons/chevron-down.svg";

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
