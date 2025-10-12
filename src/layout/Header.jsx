import { Link } from "react-router";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="catalog">Catalog</Link>
                <Link to="cart">Cart</Link>
            </nav>
        </header>
    )
}

export default Header;