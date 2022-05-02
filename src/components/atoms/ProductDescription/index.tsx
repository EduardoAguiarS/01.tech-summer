import "./styles.scss";

interface DescProps {
    text: string;
}

const ProductDescription = ({ text }: DescProps) => {
    return (
        <div className="description">
            <span className="title">Descrição</span>
            <p className="desc">{text}</p>
        </div>
    );
};

export default ProductDescription;
