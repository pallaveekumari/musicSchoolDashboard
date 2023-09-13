import React from 'react';
import styles from "./Sidebar.module.css"
import logo from "../../../images/Logo.png"
import homeLogo from "../../../images/homeLogo.png";
import courseLogo from "../../../images/courseLogo.png";

const Sidebar = () => {
  return (
    <div className={styles.mainContainer} >
        <img className={styles.logo} src={logo} alt="" />
        <img className={styles.homelogo} src={homeLogo} alt="" />
        <img className={styles.homelogo} src={courseLogo} alt="" />
    </div>
  )
}

export default Sidebar