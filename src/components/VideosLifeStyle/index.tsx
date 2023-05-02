import React from "react";
import "./styles.scss";

const VideosLifeStyle = () => (
  <div className="VideosPage">
    <h3>Videos lifestyle</h3>
    <span />
    <div className="content">
      <div className="cards">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
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

export default VideosLifeStyle;
