import { Fragment, useState } from "react";
import { useEffect } from "react";
import CatalogItem from "./CatalogItem";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
    const {catalogData, error, isLoading} = useCatalogData();


    return (
        <>
            <h1 className={styles.heading}>Catalog</h1>
            <div className={styles.catalogList}>
                {isLoading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {
                catalogData.map((item) => {
                    return (
                        <CatalogItem key={item.id} {...item}/>
                    )
                })
                }
            </div>
        </>
    );
}

const useCatalogData = () => {
    const [catalogData, setCatalogData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const customFetch = async () => {
            try {
                const response = await fetch("http://localhost:3000/products", { method: "GET"});
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
            setCatalogData(data);
            setError(null);
        })
        .catch((error) => {
            setCatalogData([]);
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });

    }, []);

    return {catalogData, error, isLoading}
}


export default CatalogPage;