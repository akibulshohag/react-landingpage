import React from "react";
import styles from "./thirdView.module.css";

const ThirdView = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.contribute}>
          <p>How can you contribute to protect earth</p>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </span>
        </div>
        <div className={styles.OverviewContainer}>
          <div className={styles.overview}>
            <div
              style={{
                width: 120,
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid #3ccf5e",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 16, fontWeight: 700 }}>Overview</p>
            </div>
            <div
              style={{
                width: 120,
                fontWeight: 700,
                color: "#1239",
                textAlign: "center",
              }}
            >
              <p>Impact</p>
            </div>
            <div
              style={{
                width: 120,
                fontWeight: 700,
                color: "#1239",
                textAlign: "center",
              }}
            >
              <p>What we do</p>
            </div>
          </div>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdView;
