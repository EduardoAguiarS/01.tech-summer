import React, { ReactNode, useState } from "react";
import "./styles.scss";

const ProductColors = () => {
    const colors = ["Fucsia", "Teal", "Orange", "Black"];
    const [cor, setCor] = useState(colors[0]);
    function getValue(event: any) {
        setCor(event.target.value);
    }

    return (
        <div>
            <div>
                <span>Cor: {cor}</span>
            </div>
            <div>
                {colors.map((color, index) => (
                    <input
                        key={color}
                        type="radio"
                        style={{ outline: `${color}` }}
                        name="color"
                        value={color}
                        defaultChecked={index == 0 ? true : false}
                        onClick={getValue}
                    ></input>
                ))}
            </div>
        </div>
    );
};

export default ProductColors;
