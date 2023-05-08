import React, { useState } from "react";
import styles from "./styles.module.scss";

// eslint-disable-next-line react/prop-types
function Tabs(props: any) {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <div className={styles["tab-wrapper"]}>
      <div className={styles["tab-header"]}>
        {/* <img src={bidtImage} alt="" /> */}
        {
          // eslint-disable-next-line react/prop-types
          tabs?.map((tab: any, index: number) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={[
                `${styles["tab-button"]}`,
                activeTab === index ? styles["active"] : "",
              ].join(" ")}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))
        }
      </div>
      <div className={styles["tab-content"]}>
        {
          // eslint-disable-next-line react/prop-types
          tabs.map((tab: any, index: React.Key | null | undefined) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={index}
              className={[
                `${styles["tab-pane"]}`,
                activeTab === index ? styles["active"] : "",
              ].join(" ")}
            >
              {tab.content}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Tabs;
