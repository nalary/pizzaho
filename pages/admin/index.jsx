import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Index = ({products, orders}) => {
    const [pizzaList, setPizzaList] = useState(products);
    const [orderList, setOrderList] = useState(orders);

    const handleDelete = async (id) => {
        try {
            await axios.delete(BASE_URL + "/api/products/" + id);
            setPizzaList(pizzaList.filter(pizza => pizza._id !== id))
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                        <thead>
                            <tr className={styles.trTitle}>
                            <th>Pizza</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzaList.map(pizza => (
                            <tr key={pizza._id} className={styles.trTitle}>
                                <td>
                                    <Image src={pizza.img}
                                        width={50}
                                        height={50}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{pizza._id.slice(0, 10)}...</td>
                                <td>{pizza.title}</td>
                                <td>$ {pizza.prices[0]}</td>
                                <td>
                                    <button className={styles.button}>Edit</button>
                                    <button 
                                        className={styles.button} 
                                        onClick={() => handleDelete(pizza._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map(order => (                            
                            <Order key={order._id} order={order}/>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;

const Order = ({order}) => {
    const status = ["payment", "preparing", "on the way", "delivered"];
    const [currentStatus, setCurrentStatus] = useState(order.status);

    const handleStatus = async (id) => {
        try {
            const res = await axios.put(BASE_URL + "/api/orders/" + id, { status: currentStatus + 1 });
            setCurrentStatus(res.data.status);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <tr className={styles.trTitle}>
            <td>{order._id.slice(0, 10)}...</td>
            <td>{order.customer}</td>
            <td>{order.address}</td>
            <td>$ {order.total}</td>
            <td>{order.method === 0 ? (<span>cash</span>) : (<span>paid</span>)}</td>
            <td>{status[currentStatus]}</td>
            <td>
                {currentStatus >= 3 ? (
                    <button className={styles.doneButton} disabled>Done</button>
                ) : (
                    <button className={styles.statusButton} onClick={() => handleStatus(order._id)}>Next Stage</button>
                )}
            </td>
        </tr>
    );
};

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";

    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false,
            },
        };
    }

    const productRes = await axios.get(BASE_URL + "/api/products");
    const orderRes = await axios.get(BASE_URL + "/api/orders");

    return {
        props: {
            orders: orderRes.data,
            products: productRes.data,
        },
    };
};
