import PropTypes from "prop-types";
import styles from "./CartTotal.module.css";

const CartTotal = ({itemsInCart}) => {
    const getSubTotal = () => {
        let subTotal = 0;
        itemsInCart.forEach((item) => {
            const priceWithoutDollarSign = item.price.slice(1);
            const priceParsed = parseFloat(priceWithoutDollarSign);
            subTotal += priceParsed * item.amount;
        })

        return subTotal.toFixed(2);
    }

    const getTax = (subTotal) => {
        subTotal = parseFloat(subTotal);
        const taxRate = 0.0875;
        return (subTotal * taxRate).toFixed(2);
    }

    const subTotal = getSubTotal();
    const tax = getTax(subTotal);
    const total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);

    return (
        <div className={styles.main}>
            <p>Subtotal</p>
            <p>${subTotal}</p>
            <p>Tax</p>
            <p>${tax}</p>
            <hr className={styles.line}/>
            <p>Total</p>
            <p>${total}</p>
        </div>
    );

    
}

CartTotal.propTypes = {
    itemsInCart: PropTypes.object.isRequired
}

export default CartTotal;