import FooterFooter from "../../atoms/FooterFooter";
import FooterSocial from "../../atoms/FooterSocial";
import FooterTitle from "../../atoms/FooterTitles";
import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer__container">
            <FooterSocial />
            <FooterTitle text={"Testando"} />
            <FooterFooter />
        </footer>
    );
};

export default Footer;
