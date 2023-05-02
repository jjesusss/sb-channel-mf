import React from "react";
import "./styles.scss";
import CardBlog from "../../components/CardBlog";

const BlogSection = () => (
  <div className="BlogPage">
    <h3>Tudo sobre colecionáveis</h3>
    <span />
    <div className="content">
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
          <CardBlog key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default BlogSection;
