import React from "react";
import "./styles.scss";

const VideosSection = () => (
  <div className="VideoSection">
    <h3>Videos sobre colecionáveis</h3>
    <span />
    <div className="content">
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="cards_item" key={i}>
            <img src="/images/imageCar.svg" alt="" />
            <p className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VideosSection;
