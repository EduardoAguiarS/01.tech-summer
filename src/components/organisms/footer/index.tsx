import FooterFooter from "../../atoms/FooterFooter";
import FooterItems from "../../atoms/FooterItems";
import FooterSocial from "../../atoms/FooterSocial";
import FooterTitle from "../../atoms/FooterTitles";
import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__comp">
                <FooterSocial />
                <div className="footer_sections">
                    <FooterTitle text={"Institucional"} />
                    <ul className="footer__list">
                        <FooterItems text={"A Marca"} />
                        <FooterItems text={"Lojas"} />
                        <FooterItems text={"Contato"} />
                    </ul>
                </div>

                <div className="footer_sections">
                    <FooterTitle text={"Informações"} />
                    <ul className="footer__list">
                        <FooterItems text={"Formas de Pagamento"} />
                        <FooterItems text={"Trocas e Devoluções "} />
                        <FooterItems text={"Cuidados Com o Produto"} />
                    </ul>
                </div>

                <div className="footer_sections">
                    <FooterTitle text={"Conheça"} />
                    <ul className="footer__list">
                        <FooterItems text={"Franquias e Multimarcas"} />
                        <FooterItems text={"Trabalhe com a Gente"} />
                        <FooterItems text={"Procon-RJ"} />
                    </ul>
                </div>
            </div>
            <FooterFooter />
        </footer>
    );
};

export default Footer;
