import FooterFooter from "../../atoms/FooterFooter";
import FooterSocial from "../../atoms/FooterSocial";
import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer__container">
            <FooterSocial />
            <FooterFooter />
        </footer>
    );
};

export default Footer;
