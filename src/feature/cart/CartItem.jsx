import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import BuyCounter from "../catalog/BuyCounter";

const CartItem = ({title, price, imageUrl, amount, updateItemCount}) => {
    return (
        <div className={styles.cartItemSection}>
            <img className={styles.image} src={imageUrl} alt={title}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>{price}</p>
            <BuyCounter count={amount} />
        </div>
    )
}

CartItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    updateItemCount: PropTypes.func.isRequired
};

export default CartItem;