import React from "react";
import styles from "./styles.module.scss";

const CardProduct = () => (
  <div className={styles["CardProduct"]}>
    <h3>Encontre o carro ideal pra você</h3>
    <span />
    <div className={styles["content"]}>
      {[1, 2, 3, 4, 5].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles["cardProduct"]} key={i}>
          <img src="/images/imageFind.svg" alt="" />
          <div className={styles["fcard"]}>
            <h4>Para família</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default CardProduct;
