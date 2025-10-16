import { useParams } from "react-router";
import { useState, useEffect } from "react";

const CatalogItemPage = () => {
    const { catalogItemId } = useParams();
    const { catalogItemData, isLoading, error } = useCatalogItemData(catalogItemId);
    
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
        <div>
            <img src={catalogItemData.imageUrl} alt={catalogItemData.title}/>
            <h1>{catalogItemData.title}</h1>
            <p>{catalogItemData.price}</p>
            <p>Amount: 1</p>
            <button>Add to Cart</button>
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