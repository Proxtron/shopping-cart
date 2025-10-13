import { Link } from "react-router";
import parka from "../../assets/pufftech-parka.jpg";
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <img className={styles.parkaImage} src={parka}/>
            <div className={styles.featuredProductInfo}>
                <h1>PUFFTECH Parka</h1>
                <p>Everyday warmth with lightweight insulation and a water-repellant finish</p>
                <h2 className={styles.price}>$89.90</h2>

                <Link to="catalog"><button className={styles.viewButton}>View</button></Link>
            </div>
        </div>
    );
}

export default HomePage;