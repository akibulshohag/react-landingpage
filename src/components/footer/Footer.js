import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    
    <div className={styles.footer}>
      <div className={styles.content__wrapper}>
        <div className={styles.brand__content__wrapper}>
          <div>
            <h2>Finsweet</h2>
          </div>
        </div>
        <div className={styles.page__content__wrapper}>
          <div className={styles.page__info__content}>
              <h4>Our Team</h4>
              <ul>
                  <li>
                      <p>About us</p>
                  </li>
                  <li>
                      <p>Team</p>
                  </li>
                  <li>
                      <p>What we do</p>
                  </li>
                  <li>
                      <p>Contact</p>
                  </li>
              </ul>
          </div>
          <div className={styles.page__info__content}>
              <h4>More</h4>
              <ul>
                  <li>
                      <p>Projects</p>
                  </li>
                  <li>
                      <p>Events</p>
                  </li>
                  <li>
                      <p>Donate</p>
                  </li>
                  <li>
                      <p>Blog</p>
                  </li>
                 
              </ul>
          </div>
          <div className={styles.page__info__content}>
              <h4>Contact</h4>
              <ul>
                  <li>
                      <p>Facebook</p>
                  </li>
                  <li>
                      <p>Instagram</p>
                  </li>
                  <li>
                      <p>Twitter</p>
                  </li>
                  <li>
                      <p>Linkedin</p>
                  </li>
              </ul>
          </div>
          
        </div>
        <div className={styles.subscribe}>
            <div className={styles.subscribeContent}>
              <h1>Subscribe to get latest updates</h1>
              </div>
              <div className={styles.inputContainer}>
                <input className={styles.input} type='text' placeholder='Your Email'></input>
                <button className={styles.button}>Subscribe</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer