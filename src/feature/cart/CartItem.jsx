import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

const CartItem = ({title, price, imageUrl, amount}) => {
    return (
        <div className={styles.cartItemSection}>
            <img className={styles.image} src={imageUrl} alt={title}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>{price}</p>
            <p className={styles.amount}>{amount}</p>
        </div>
    )
}

CartItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};

export default CartItem;