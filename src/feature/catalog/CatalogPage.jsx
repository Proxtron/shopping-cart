import { useState } from "react";
import { useEffect } from "react";

const CatalogPage = () => {
    const {catalogData} = useCatalogData();

    return (
        <div>
            Hello from the catalog page
            {catalogData.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <img src={item.imageUrl}/>
                    </div>
                )
            })}
        </div>
    );
}

const useCatalogData = () => {
    const [catalogData, setCatalogData] = useState([]);

    useEffect(() => {
        const customFetch = async () => {
            const response = await fetch("http://localhost:3000/products", { method: "GET"});
            if(!response.ok) {
                throw new Error(`An error occured when retrieving catalog data: ${response.statusText}`);
            }
            return await response.json();
        }

        customFetch().then((data) => {
            setCatalogData(data);
        })
    }, []);

    return {catalogData}
}


export default CatalogPage;