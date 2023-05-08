import React from "react";
import styles from "./styles.module.scss";

const VideosSection = () => (
  <div className={styles["VideoSection"]}>
    <h3>Videos sobre colecionáveis</h3>
    <span />
    <div className={styles["content"]}>
      <div className={styles["cards"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={styles["cards_item"]} key={i}>
            <img src="/images/imageCar.svg" alt="" />
            <p className={styles["title"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VideosSection;
