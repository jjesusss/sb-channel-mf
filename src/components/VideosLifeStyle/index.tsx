import React from "react";
import styles from "./styles.module.scss";

const VideosLifeStyle = () => (
  <div className={styles["VideosPage"]}>
    <h3>Videos lifestyle</h3>
    <span />
    <div className={styles["content"]}>
      <div className={styles["cards"]}>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
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

export default VideosLifeStyle;
