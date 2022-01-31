import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({product}) => {
    return (
        <div className={styles.container}>
            <Link href={`/products/${product._id}`} passHref>
                <a>
                    <Image src={product.img || "/img/pizza.png"} alt="" width={500} height={500}/>
                </a>
            </Link>
            <h1 className={styles.title}>{product.title}</h1>
            <span className={styles.price}>$ {product.prices[0]}</span>
            <p className={styles.desc}>{product.desc}</p>
        </div>
    );
};

export default PizzaCard;
