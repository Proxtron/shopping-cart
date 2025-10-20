import PropTypes from "prop-types";
import { useOutletContext, Link } from "react-router";
import styles from "./CartPage.module.css";
import CartItem from "./CartItem";

const CartPage = () => {
    const {numberInCart, itemsInCart, updateItemCount} = useOutletContext();

    if(numberInCart === 0) {
        return <div className={styles.cartPageEmpty}><h1>Looks like your shopping cart is empty! Head to the <Link to="/catalog">catalog page</Link></h1></div>;
    }

    return (
        <div className={styles.cartPage}>
            <h1 className={styles.heading}>Shopping Cart</h1>
            <div className={styles.cartWrapper}>
                <div className={styles.itemsSection}>
                    {
                        itemsInCart.map((item) => 
                             <CartItem key={item.id} {...item} 
                                updateItemCount={updateItemCount}/>
                        )
                    }
                </div>
                <div className={styles.summarySection}>
                    <h2>Order Summary</h2>
                    <h2>{numberInCart} item(s)</h2>
                </div>
            </div>
        </div>
    );
}

export default CartPage;