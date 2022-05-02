interface TitleProps {
    title: string;
    code: string;
}

const ProductTitle = ({ title, code }: TitleProps) => {
    return (
        <header>
            <h1>{title}</h1>
            <span>{code}</span>
        </header>
    );
};

export default ProductTitle;
