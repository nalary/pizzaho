import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({productList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>BE THE #1 PIZZA SHOP IN THE CITY</h1>
            <p className={styles.desc}>
                Without presence of delivery pizza concept, Pizza.Ho launched 1st store in 1990 and has become No.1 in Pizza delivery industry by providing innovative products with differentiated customer service. Pizza.Ho has worked hard to provide best pizza made of healthy ingredients with best service to our customers.
            </p>
            <div className={styles.wrapper}>
                {productList.map(product => (
                    <PizzaCard key={product._id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default PizzaList;
