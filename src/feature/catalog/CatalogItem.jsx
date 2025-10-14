import PropTypes from "prop-types";
import styles from "./CatalogItem.module.css";

const CatalogItem = ({title, price, imageUrl}) => {
    return (
        <div>
            <img className={styles.image} src={imageUrl} alt={title}/>
            <h2 className={`${styles.text} ${styles.title}`}>{title}</h2>
            <p className={`${styles.text} ${styles.price}`}>{price}</p>
        </div>
    );
}

CatalogItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default CatalogItem;