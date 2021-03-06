import { useState } from "react";
import "./styles.scss";

const ProductColors = () => {
    const colors = ["Red", "Teal", "Orange", "Black"];
    const [cor, setCor] = useState(colors[0]);
    function getValue(event: any) {
        setCor(event.target.value);
    }

    return (
        <div className="color">
            <div className="color__name">
                <span>Cor:</span>
                <span className="color__value">{`(${cor})`}</span>
            </div>
            {colors.map((color, index) => (
                <label className="radio__container">
                    <input
                        className="radio__input"
                        key={index}
                        type="radio"
                        name="color"
                        value={color}
                        defaultChecked={index == 0 ? true : false}
                        onClick={getValue}
                    />
                    <span
                        className={`radio__style`}
                        style={{
                            background: `${color}`,
                            border: "2px solid white",
                            boxShadow: `${
                                cor == color ? `0 0 0 2px ${color}` : "none"
                            }`
                        }}
                    ></span>
                </label>
            ))}
        </div>
    );
};

export default ProductColors;
