import FooterFooter from "../../atoms/FooterFooter";
import FooterSocial from "../../atoms/FooterSocial";
import FooterTitle from "../../atoms/FooterTitles";
import Newsletter from "../../atoms/Newsletter";
import "./styles.scss";

const FooterMob = () => {
    return (
        <footer className="mfooter_container">
            <FooterTitle text={"Institucional"} />
            <FooterTitle text={"Institucional"} />
            <FooterTitle text={"Institucional"} />
            <div className="footer__comp">
                <FooterSocial />
                <Newsletter />
            </div>
            <FooterFooter />
        </footer>
    );
};

export default FooterMob;
