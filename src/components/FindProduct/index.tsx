import React from "react";
import "./styles.scss";

const FindProduct = () => (
  <div className="FindPage">
    <h3>Encontre o carro ideal pra você</h3>
    <span />
    <div className="content">
      {[1, 2, 3, 4, 5].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="cardProduct" key={i}>
          <img src="/images/imageFind.svg" alt="" />
          <div className="fcard">
            <h4>Para família</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default FindProduct;
