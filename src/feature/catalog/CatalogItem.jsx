import PropTypes from "prop-types";
import styles from "./CatalogItem.module.css";
import { Link } from "react-router";

const CatalogItem = ({id, title, price, imageUrl}) => {
    return (
        <Link to={id} className={styles.catalogItem}>
            <img className={styles.image} src={imageUrl} alt={title}/>
            <h2 className={`${styles.text} ${styles.title}`}>{title}</h2>
            <p className={`${styles.text} ${styles.price}`}>{price}</p>
        </Link>
    );
}

CatalogItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default CatalogItem;