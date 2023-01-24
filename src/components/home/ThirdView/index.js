import React from "react";
import styles from "./thirdView.module.css";
import sunset from '../../../assets/sunset.jpg'

const ThirdView = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.contribute}>
          <p>How we user your donation</p>
          
        </div>
        <div className={styles.OverviewContainer}>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </span>
         
        </div>
        <div className={styles.OverviewContainer}>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </span>
         
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={sunset} alt="sunset" className={styles.image} />
        <div className={styles.middleContainer}>
          <p>You can contribute to make the environment greener!</p>
          <div style={{marginLeft:130}}>
            <button className={styles.button}>Join as a volunteer</button>
            <button style={{backgroundColor:'#fff',color:'#000',marginLeft:20}} className={styles.button}>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdView;
