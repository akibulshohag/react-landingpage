import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.main}>
    
      <div className={styles.navbar__item}>
        <div style={{ cursor: "pointer" }}>
        <h2>{'{'}Finsweet</h2>
        </div>
        <div className={styles.nav__item}>
          <p style={{color:'#000'}}>Home</p>
          <p style={{color:'#1239'}}>About Us</p>
          <p style={{color:'#1239'}}>What We Do</p>
          <p style={{color:'#1239'}}>Media</p>
          <p style={{color:'#1239'}}>Contact</p>
          <button className={styles.button}>Donate</button>
        </div>
      </div>
  
    
    
  </div>
  )
}

export default Navbar