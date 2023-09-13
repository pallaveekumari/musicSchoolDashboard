import React from 'react';
import styles from "./Sidebar.module.css"
import logo from "../../../images/Logo.png"
import homeLogo from "../../../images/homeLogo.png";
import courseLogo from "../../../images/courseLogo.png";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.mainContainer} >
        <img className={styles.logo} src={logo} alt="" />
        <img onClick={()=>{
            navigate("/overview")
        }} className={styles.homelogo} src={homeLogo} alt="" />
        <img  onClick={()=>{
            navigate("/course")
        }} className={styles.homelogo} src={courseLogo} alt="" />
    </div>
  )
}

export default Sidebar