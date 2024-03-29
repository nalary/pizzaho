import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import { axiosRequest } from "../../util/config";

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);

    const router = useRouter();

    const handleClick = async () => {
        try {
            await axiosRequest.post("/login", { username, password });
            router.push("/admin");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin Dashboard</h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.button} onClick={handleClick}>Sign In</button>
                {error && <span className={styles.error}>Wrong Credentials !!</span>}
            </div>
        </div>
    );
};

export default Login;
