import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import { Featured } from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';
import { axiosRequest } from '../util/config';

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
    const res = await axiosRequest.get("/products/");
    return {
        props: {
            productList: res.data,
            admin
        },
    };
};