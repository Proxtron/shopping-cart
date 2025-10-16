import { Link, useLocation } from "react-router";
import styles from "./Header.module.css";
import uniqloLogo from "../assets/uniqlo-logo.svg";
import cart from "../assets/cart.svg";

const Header = () => {
    const location = useLocation();
    const catalogSelected = location.pathname.includes("/catalog");
    const cartSelected = location.pathname === "/cart";

    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <Link to="/" className={styles.headerLink}>
                    <img src={uniqloLogo} alt="Back to home page" className={styles.headerLogo}/>
                </Link>

                <Link to="catalog" 
                className={`${styles.headerLink} 
                    ${catalogSelected && styles.underlined}
                `} 
                >Catalog</Link>

                <Link to="cart" 
                className={`${styles.headerLink}
                    ${cartSelected && styles.underlined}
                `} 
                >
                    <img src={cart} alt="Navigate to Cart Page"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header;