import React from "react";
import VideoFrame from "../VideoFrame/VideoFrame";
import "./styles.scss";

const SeactionDetails = (props: {
  isLive?: boolean;
  logo: any;
  text: any;
  urlVideo: any;
  channel: any;
}) => {
  const { isLive = true, logo, text, urlVideo, channel } = props;

  return (
    <div className="sectionDetails">
      {isLive && (
        <div className="videoSection">
          <VideoFrame autoPlay UrlVideo={urlVideo} controls />
        </div>
      )}
      <div className="infoSection">
        {isLive && <span className="live">AO VIVO</span>}
        <img className="imgAgro" src={logo} alt="" />
        <p className="text">{text}</p>
        <button
          className="subscribe"
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
