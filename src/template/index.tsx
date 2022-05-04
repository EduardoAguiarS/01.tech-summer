import Footer from "../components/organisms/footer";
import HeaderHero from "../components/organisms/HeaderHero";
import Product from "../components/organisms/Product";
import "./styles.scss";

export default function Front() {
    return (
        <main>
            <HeaderHero />
            <Product />
            <Footer />
        </main>
    );
}
