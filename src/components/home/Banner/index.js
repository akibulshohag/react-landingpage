import React from 'react'
import styles from './Banner.module.css'
import donate from '../../../assets/donate.jpg'

const Banner = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <div className={styles.donateContainer}>
                <div className={styles.donate}></div>
                <p>Donate</p>
            </div>
            <div className={styles.nature}>
                <p>Making A donation for nature</p>
                <p style={{fontSize:14,fontWeight:'normal'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button className={styles.button}>Donate now</button>
            </div>
          </div>
          <div className={styles.image}>
            <img src={donate} alt="banner" style={{ width: "100%",borderRadius:10 }}/>
          </div>
        </div>
    </div>
  )
}

export default Banner