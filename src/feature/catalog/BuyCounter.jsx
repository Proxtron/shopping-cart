import { useState } from "react";
import PropTypes from "prop-types";

const BuyCounter = ({count, incrementCount, decrementCount}) => {
    return (
        <div>
            {count === 1 && <button onClick={decrementCount} disabled>—</button>}
            {count > 1 && <button onClick={decrementCount}>—</button>}
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

BuyCounter.propTypes = {
    incrementCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default BuyCounter;