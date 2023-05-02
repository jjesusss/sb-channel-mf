import React from "react";
import "./styles.scss";

const CardBlog = () => {
  return (
    <div className="box">
      <img src="./images/imageBlog.svg" alt="" />
      <div className="content">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <p>
          Aenean interdum lacus quam, sed convallis mi auctor id. Curabitur
          facilisis feugiat
        </p>
        <div className="author">
          <img src="/images/imageAuthor.svg" alt="" />
          <span>Márcia Souza</span>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
