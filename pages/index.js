import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import { Featured } from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home({productList, admin}) {
    const [close, setClose] = useState(true);

    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza.Ho App</title>
                <meta name="description" content="BE THE #1 PIZZA SHOP IN THE CITY" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            {admin && <AddButton setClose={setClose}/>}
            <PizzaList productList={productList} />
            {!close && <Add setClose={setClose}/>}
        </div>
    );
}


export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }
    const res = await axios.get(BASE_URL + "/api/products/");
    return {
        props: {
            productList: res.data,
            admin
        },
    };
};