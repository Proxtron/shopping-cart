import { useOutletContext, useParams } from "react-router";
import { useState, useEffect } from "react";
import styles from "./CatalogItemPage.module.css";
import BuyCounter from "./BuyCounter";

const CatalogItemPage = () => {
    const { catalogItemId } = useParams();
    const { catalogItemData, isLoading, error } = useCatalogItemData(catalogItemId);
    const { addToNumberInCart } = useOutletContext();
    
    const [count, setCount] = useState(1);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        if(count > 1) {
            setCount(count - 1);
        }  
    }

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if(error) {
        return (
            <h1>{error}</h1>
        )
    }

    return (
        <div className={styles.catalogItemPage}>
            <div className={styles.catalogItemImageContainer}>
                <img data-testid="item_image" src={catalogItemData.imageUrl} alt={catalogItemData.title}/>
            </div>
            <div className={styles.catalogItemDetails}>
                <h1 className={styles.title}>{catalogItemData.title}</h1>
                <p className={styles.price}>{catalogItemData.price}</p>
                <div className={styles.actionGroup}>
                    <BuyCounter count={count} incrementCount={incrementCount}
                        decrementCount={decrementCount}/>
                    <button className={styles.addToCartBtn} onClick={() => {addToNumberInCart(count)}}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

const useCatalogItemData = (catalogItemId) => {
    const [catalogItemData, setCatalogItemData] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const customFetch = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/${catalogItemId}`, { method: "GET"});
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return await response.json();
            } catch(error) {
                throw new Error(`An error occured when retrieving catalog data: ${error.message}`);
            }
        }

        customFetch()
        .then((data) => {
            setCatalogItemData(data);
            setError(null);
        })
        .catch((error) => {
            setCatalogItemData({});
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [catalogItemId]);

    return {catalogItemData, error, isLoading}
}

export default CatalogItemPage;