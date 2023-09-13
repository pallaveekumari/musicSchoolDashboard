import React from 'react'
import styles from "../Login/Login.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Login = () => {

const navigate=useNavigate()

const handleLogin=()=>{
    axios.post('https://reqres.in/api/login', {
        "email":"eve.holt@reqres.in",
    "password":"cityslicka"
      });
}

  return (
    <div className={styles.mainContainer}>
    <div className={styles.formContainer}>
        <h1>Login</h1>
        <br />
        
        <div className={styles.eachTextFieldBox}>
            <input  placeholder="Email" type="email"/>

        </div>
        <div className={styles.eachTextFieldBox}>
            <input  placeholder="Password" type="password" />

        </div>
        <button className={styles.signUpBtn} onClick={()=>{
            handleLogin()
            alert("Login Successfully")
            // localStorage.setItem("token")
            navigate("/course")
        }}>Login</button>
    </div>
    

</div>
  )
}

export default Login