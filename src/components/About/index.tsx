import React from "react";
import "./styles.scss";
import CardBlog from "../CardBlog";
import CardSlider from "../CardSlider";

const About = () => (
  <div className="AboutPage">
    <h3>Tudo sobre colecionáveis</h3>
    <span />
    <div className="content">
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
