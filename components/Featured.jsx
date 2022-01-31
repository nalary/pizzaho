import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export const Featured = () => {
    const images = [
        {
            src: "/img/featured1.jpg",
            productId: "61f3d428c08de3d214af25ed",
        },
        {
            src: "/img/featured2.jpg",
            productId: "61f3b0b9a570d4d0df0d1d6f",
        },
        {
            src: "/img/featured3.jpg",
            productId: "61f3ae73a570d4d0df0d1d2e",
        },
    ];

    const [index, setIndex] = useState(0);

    const handleArrow = (direction) => {
        if (direction === "left") {
            setIndex(index !== 0 ? index - 1 : images.length - 1);
        }

        if (direction === "right") {
            setIndex(index !== images.length - 1 ? index + 1 : 0);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("left")}>
                <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)`} }>
                {images.map((image, index) => (
                    <div key={index} className={styles.imgContainer}>
                        <Link href={`/products/${image.productId}`} passHref>
                            <a>
                                <Image src={image.src} alt="" layout="fill" priority objectFit="contain"/>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("right")}>
                <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain"/>
            </div>            
        </div>
    );
};
