import React from "react";
import styles from "./styles.module.scss";
import CardBlog from "../../components/CardBlog";

const BlogSection = () => (
  <div className={styles["BlogPage"]}>
    <h3>Tudo sobre colecionáveis</h3>
    <span />
    <div className={styles["content"]}>
      <div className={styles["cards"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
          <CardBlog key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default BlogSection;
