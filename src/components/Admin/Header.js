

import React from 'react'
import styles from "../../styles/Home.module.css"


const Header = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Hello,<span>Admin</span></h2>
          {/* currently hardcord */}
          <p>Welcome to the board</p>
        </div>
      </div>
      <div className={styles.profile}>
        {/* <img src={Apni} alt="profile" className={styles.image}/> */}
      </div>
    </div>
  )
}

export default Header