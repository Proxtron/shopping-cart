import { Link } from "react-router";

const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="catalog">Catalog</Link>
            <Link to="cart">Cart</Link>
        </header>
    )
}

export default Header;