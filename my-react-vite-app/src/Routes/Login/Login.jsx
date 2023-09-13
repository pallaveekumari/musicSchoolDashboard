import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin =async () => {
    const [formData,setFormData] = useState({email:'',password:''})
  let res = await  axios.post("https://reqres.in/api/login",formData);
    let data = res.data;
    console.log(data);
    if(res.data.token){
        localStorage.setItem('token',JSON.stringify(res.data.token))
    }
  };

  const handleChange=(e)=>{
const {name,value} = e.target;
setFormData({...formData,[name]:value})
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <br />

        <div className={styles.eachTextFieldBox}>
          <input name="email" onChange={(e)=>handleChange(e)} placeholder="Email" type="email" />
        </div>
        <div className={styles.eachTextFieldBox}>
          <input name='password' onChange={(e)=>handleChange(e)} placeholder="Password" type="password" />
        </div>
        <button
          className={styles.signUpBtn}
          onClick={async () => {
           await handleLogin();
            alert("Login Successfully");
            // localStorage.setItem("token")
            navigate("/course");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
