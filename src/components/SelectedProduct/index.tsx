import React from "react";
import styles from "./styles.module.scss";
import CardSlider from "../CardSlider";

const SelectedProduct = () => (
  <div className={styles["SelectedPage"]}>
    <h3>Carros em destaque</h3>
    <span />
    <div className={styles["content"]}>
      <CardSlider visibleCards={5} cardWidth={210} cardHeight={305}>
        <img src="/images/imageOffer.png" alt="" />
        <img src="/images/imageOffer.png" alt="" />
        <img src="/images/imageOffer.png" alt="" />
        <img src="/images/imageOffer.png" alt="" />
        <img src="/images/imageOffer.png" alt="" />
        <img src="/images/imageOffer.png" alt="" />
        <img src="/images/imageOffer.png" alt="" />
      </CardSlider>
    </div>
  </div>
);

export default SelectedProduct;
