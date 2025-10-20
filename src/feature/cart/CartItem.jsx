import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import BuyCounter from "../catalog/BuyCounter";

const CartItem = ({id, title, price, imageUrl, amount, updateItemCount}) => {

    const incrementCount = () => {
        updateItemCount({id, title, price, imageUrl}, amount + 1);
    }

    const decrementCount = () => {
        updateItemCount({id, title, price, imageUrl}, amount - 1);
    }

    return (
        <div data-testid="cartItem" className={styles.cartItemSection}>
            <img className={styles.image} src={imageUrl} alt={title}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>{price}</p>
            <BuyCounter count={amount} incrementCount={incrementCount} decrementCount={decrementCount} />
        </div>
    )
}

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    updateItemCount: PropTypes.func.isRequired
};

export default CartItem;