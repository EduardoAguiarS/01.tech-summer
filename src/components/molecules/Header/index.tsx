import { LogoHeader } from "../../atoms/Logo";
import "./styles.scss";
import burger from "../../../../public/assets/icons/burger.svg";
import cart from "../../../../public/assets/icons/cart.svg";
import search from "../../../../public/assets/icons/search.svg";

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="menu__burger">
                    <button>
                        <img src={burger} alt="Menu" />
                    </button>
                </div>
                <LogoHeader />
                <div className="right__items">
                    <button>
                        <img src={search} alt="busca" />
                    </button>
                    <button>
                        <img src={cart} alt="Carrinho de compras" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
