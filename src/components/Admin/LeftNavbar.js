

import React from 'react'
import styles from "../../styles/Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCog, faRocket, faSignOut, faTachometerAlt } from "@fortawesome/free-solid-svg-icons"


const LeftNavbar = () => {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Apni Dukan</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li><FontAwesomeIcon icon={faTachometerAlt} style={{ width: "18px", cursor: "pointer" }} /><a href="#">Dashboard</a></li>
          <li><FontAwesomeIcon icon={faRocket} style={{ width: "18px", cursor: "pointer" }} /><a href='./orders'>Orders</a></li>
          <li><FontAwesomeIcon icon={faCog} style={{ width: "18px", cursor: "pointer" }} /><a href='./addProductPage'>Settings</a></li>
          <li><FontAwesomeIcon icon={faSignOut} style={{ width: "18px", cursor: "pointer" }} /><a href="./">Logout</a></li>

        </ul>
      </div>
    </div>
  )
}

export default LeftNavbar