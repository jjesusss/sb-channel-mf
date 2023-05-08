import React from "react";
import styles from "./styles.module.scss";

const ProductSection = () => (
  <div className={styles["ProductPage"]}>
    <h3>Tudo sobre lifestyle</h3>
    <span />
    <div className={styles["content"]}>
      <div className={styles["cards"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
          // <CardBidTv key={i} {...mockCardBidTvProps} />
          <img key={i} src="/images/imageOffer.png" alt="" />
        ))}
      </div>
    </div>
  </div>
);

export default ProductSection;
