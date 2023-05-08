import React from "react";
import styles from "./styles.module.scss";

const VideoFrame = (props: {
  UrlVideo: any;
  autoPlay?: boolean;
  controls?: boolean;
}) => {
  const { UrlVideo, autoPlay = true, controls = false } = props;
  const embedId = UrlVideo?.split("?v=")[1];

  return (
    <div className={styles["videoResponsive"]}>
      <iframe
        className={styles["videoIframe"]}
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&controls=${
          controls ? 1 : 0
        }&mute=0&loop=1&playlist=${embedId}`}
        allow={`accelerometer; controls=0;  modestbranding=1; ${
          autoPlay ? "autoplay;" : ""
        } clipboard-write; encrypted-media; gyroscope; picture-in-picture`}
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default VideoFrame;
