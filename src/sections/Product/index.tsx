import React from "react";
import "./styles.scss";

const ProductSection = () => (
  <div className="ProductPage">
    <h3>Tudo sobre lifestyle</h3>
    <span />
    <div className="content">
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
          // <CardBidTv key={i} {...mockCardBidTvProps} />
          <img src="/images/imageOffer.png" alt="" />
        ))}
      </div>
    </div>
  </div>
);

export default ProductSection;
