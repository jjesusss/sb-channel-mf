import React, { lazy } from "react";
import "./styles.scss";
import SelectedProduct from "../../components/SelectedProduct";
import AboutLifeStyle from "../../components/About";
import FindProduct from "../../components/FindProduct";
import VideosLifeStyle from "../../components/VideosLifeStyle";

function HomeSection() {
  return (
    <main className="bidPage">
      <div className="content">
        {/* <FeaturedEvents
          title={"Marcia Souza"}
          items={upcommingEvents}
          emptyListMessage={""}
        /> */}

        <AboutLifeStyle />

        <SelectedProduct />

        <div className="sectionBanner">
          <img src="/images/miniBanner1.svg" alt="" />
          <img src="/images/miniBanner2.svg" alt="" />
        </div>

        <FindProduct />

        <VideosLifeStyle />
      </div>
    </main>
  );
}

export default HomeSection;
