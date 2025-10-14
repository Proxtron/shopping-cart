import PropTypes from "prop-types";

const CatalogItem = ({title, price, imageUrl}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{price}</p>
            <img src={imageUrl} alt={title}/>
        </div>
    );
}

CatalogItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default CatalogItem;