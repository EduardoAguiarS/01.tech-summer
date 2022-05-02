import { LogoHeader } from "../../atoms/Logo";
import "./styles.scss";
import burger from "../../../../public/assets/icons/burger.svg";
import cart from "../../../../public/assets/icons/cart.svg";
import search from "../../../../public/assets/icons/search.svg";
import MenuItems from "../../atoms/MenuItems";

export default function Header() {
    let items = 0;
    return (
        <>
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
            <nav className="menu__nav">
                <div className="login">
                    <span>
                        <a href="#">Entrar | Cadastrar</a>
                    </span>
                </div>
                <ul className="menu__list">
                    <MenuItems link="#" text="Sapatos" />
                    <MenuItems link="#" text="Bolsas" />
                    <MenuItems link="#" text="Acessórios" />
                    <MenuItems link="#" text="OFF" />
                </ul>
                <div className="search__cart">
                    <div className="search">
                        <img src={search} alt="Busca" />
                        <input type="text" placeholder="Busca" />
                    </div>
                    <div className="cart">
                        <img src={cart} alt="Carrinho de compras" />
                        <span>{items}</span>
                    </div>
                </div>
            </nav>
        </>
    );
}
