import React, { useState } from "react";
import "./styles.scss";

// eslint-disable-next-line react/prop-types
function Tabs(props: any) {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-wrapper">
      <div className="tab-header">
        {/* <img src={bidtImage} alt="" /> */}
        {
          // eslint-disable-next-line react/prop-types
          tabs?.map((tab: any, index: number) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={[
                "tab-button ",
                activeTab === index ? "active" : "",
              ].join(" ")}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))
        }
      </div>
      <div className="tab-content">
        {
          // eslint-disable-next-line react/prop-types
          tabs.map((tab: any, index: React.Key | null | undefined) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={index}
              className={["tab-pane", activeTab === index ? "active" : ""].join(
                " "
              )}
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
