import styles from "./BuyCounter.module.css";
import PropTypes from "prop-types";

const BuyCounter = ({count, incrementCount, decrementCount}) => {
    return (
        <div className={styles.buyCounter}>
            {count === 1 && <button className={styles.button} onClick={decrementCount} disabled>—</button>}
            {count > 1 && <button className={styles.button} onClick={decrementCount}>—</button>}
            <p data-testid="counter" className={styles.count}>{count}</p>
            <button className={styles.plusButton} onClick={incrementCount}>+</button>
        </div>
    )
}

BuyCounter.propTypes = {
    incrementCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default BuyCounter;