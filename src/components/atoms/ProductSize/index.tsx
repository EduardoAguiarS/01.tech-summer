import { useState } from "react";
import "./styles.scss";

const ProductSize = () => {
    const sizes = [33, 34, 35, 36, 37, 38, 39, 40, 41];
    const [sSize, setSSize] = useState(sizes[0]);

    function getSize(event: any) {
        setSSize(event.target.value);
    }

    return (
        <div className="size">
            <div className="size__guide">
                <div>
                    <span>Tamanho: </span>
                    <span className="size__value">{`(${sSize})`}</span>
                </div>
                <a href="#">Guia de tamanhos</a>
            </div>

            {sizes.map((number, index) => (
                <label className="radio__container">
                    <input
                        className="radio__input"
                        type="radio"
                        name="size"
                        value={number}
                        key={index}
                        defaultChecked={index == 0 ? true : false}
                        onClick={getSize}
                    />
                    <span
                        className="radio__style"
                        style={{
                            background: `${
                                sSize == number ? "#de8f75" : "white"
                            }`,
                            color: `${sSize == number ? "white" : "#5F75AA"}`
                        }}
                    >
                        {number}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default ProductSize;
