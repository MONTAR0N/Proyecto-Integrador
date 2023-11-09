import { useState } from "react";
import Validation from "./Validation";
import styles from './Form.module.css'
const Form = ({ login }) => {

    //HOOKS

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    //FUNCIONES

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        const newErrors = { ...errors }
        setUserData({ ...userData, [property]: value })
        Validation({ ...userData, [property]: value }, { ...newErrors }, setErrors)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData)
    }

    //RENDER

    return (
        <div className={styles.container1}>
            <div className={styles.formContainer}>
                <form onSubmit={submitHandler} className={styles.formLogin} >
                <img src="https://w0.peakpx.com/wallpaper/591/780/HD-wallpaper-evil-morty-2-and-rick.jpg" alt="" className={styles.imgLogin}/>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                    type="text"
                    value={userData.email}
                    name="email"
                        onChange={handleChange}
                        />
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                        type="text"
                        value={userData.password}
                        name="password"
                        onChange={handleChange}
                        />
                    <button className={styles.submit}> Submit</button>
                </form>
            </div>
        </div>

    )
}
export default Form;