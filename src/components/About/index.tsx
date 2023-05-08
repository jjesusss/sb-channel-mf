import React from "react";
import styles from "./styles.module.scss";
import CardBlog from "../CardBlog";
import CardSlider from "../CardSlider";

const About = () => (
  <div className={styles["AboutPage"]}>
    <h3>Tudo sobre colecionáveis</h3>
    <span />
    <div className={styles.content}>
      <CardSlider visibleCards={2} cardHeight={187}>
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </CardSlider>
    </div>
  </div>
);

export default About;
