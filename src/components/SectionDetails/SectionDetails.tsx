import React from "react";
import VideoFrame from "../VideoFrame/VideoFrame";
import styles from "./styles.module.scss";

const SeactionDetails = (props: {
  isLive?: boolean;
  logo: any;
  text: any;
  urlVideo: any;
  channel: any;
}) => {
  const { isLive = true, logo, text, urlVideo, channel } = props;

  return (
    <div className={styles["sectionDetails"]}>
      {isLive && (
        <div className={styles["videoSection"]}>
          <VideoFrame autoPlay UrlVideo={urlVideo} controls />
        </div>
      )}
      <div className={styles["infoSection"]}>
        {isLive && <span className={styles["live"]}>AO VIVO</span>}
        <img className={styles["imgAgro"]} src={logo} alt="" />
        <p className={styles["text"]}>{text}</p>
        <button
          className={styles["subscribe"]}
          onClick={() =>
            window.open(`https://youtube.com/${channel}?sub_confirmation=1`)
          }
        >
          <img src="/images/youtubeIcon.svg" alt="" />
          Inscreva-se no canal
        </button>
      </div>
    </div>
  );
};

export default SeactionDetails;
