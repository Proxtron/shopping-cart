import { Link } from "react-router";
import styles from "./Header.module.css";
import uniqloLogo from "../assets/uniqlo-logo.svg";
import cart from "../assets/cart.svg";
import { useState } from "react";

const Header = () => {
    const [catalogSelected, setCatalogSelected] = useState(false);
    const [cartSelected, setCartSelected] = useState(false);

    function handleHomeClick() {
        setCatalogSelected(false);
        setCartSelected(false);
    }

    function handleCatalogClick() {
        setCatalogSelected(true);
        setCartSelected(false);
    }

    function handleCartClick() {
        setCartSelected(true);
        setCatalogSelected(false);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <Link to="/" className={styles.headerLink} onClick={handleHomeClick}>
                    <img src={uniqloLogo} alt="Back to home page" className={styles.headerLogo}/>
                </Link>

                <Link to="catalog" 
                className={`${styles.headerLink} 
                    ${catalogSelected && styles.underlined}
                `} 
                onClick={handleCatalogClick}>Catalog</Link>

                <Link to="cart" 
                className={`${styles.headerLink}
                    ${cartSelected && styles.underlined}
                `} 
                onClick={handleCartClick}>
                    <img src={cart} alt="Navigate to Cart Page"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header;