import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.jpg" alt="" priority layout="fill" objectFit="cover"/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.motto}>JOIN US AND EXPERIENCE LONGEST RUNNING PIZZERIA !!</h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        100/1 Rama IX Rd, <br/> Bangkok, 10310 <br/> +66 2 246 0535
                    </p>
                    <p className={styles.text}>
                        2505/6 Rama IV Rd, <br/> Bangkok, 10110 <br/> +66 2 115 2118
                    </p>
                    <p className={styles.text}>
                        582 22 Soi Shukhmvit 63, <br/>Bangkok, 10110 <br/> +66 2 391 9688
                    </p>
                    <p className={styles.text}>
                        123 Khaosan Rd, <br/> Bangkok, 10200 <br/> +66 2 282 0578
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY <br/> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY <br/> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
