import "./styles.scss";

interface TitleProps {
    title: string;
    code: string;
}

const ProductTitle = ({ title, code }: TitleProps) => {
    return (
        <header className="product__title">
            <h1>{title}</h1>
            <span>{code}</span>
        </header>
    );
};

export default ProductTitle;
