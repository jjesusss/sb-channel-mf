import React from "react";
import formatImageSize from "../../utils/formatImageSize";
import limitCharacters from "../../utils/limitCharacters";
import styles from "./styles.module.scss";

// eslint-disable-next-line react/prop-types
const LiveTag = (props: { text: string }) => (
  <strong className="liveTag">{props.text}</strong>
);

const LiveCard = (props: {
  thumbUrl?: string;
  title: any;
  time: any;
  description: any;
  className: any;
  imgHeight?: string;
  imgWidth?: string;
  productsPreviewImgs: any;
  isLive: any;
  charactersLimit?: number;
}) => {
  const {
    thumbUrl = "",
    title,
    time,
    description,
    className,
    imgHeight = "49.7%",
    imgWidth = "49.7%",
    productsPreviewImgs,
    isLive,
    charactersLimit = 60,
  } = props;

  const ImagesCard = productsPreviewImgs;
  const numberOfCards: any = {
    4: {
      background: `url(${formatImageSize(
        ImagesCard[0]?.link,
        true
      )}) 100% 0% / ${imgWidth} ${imgHeight} no-repeat ,url(${formatImageSize(
        ImagesCard[1]?.link,
        true
      )}) 0% 0% / ${imgWidth} ${imgHeight} no-repeat, url(${formatImageSize(
        ImagesCard[2]?.link,
        true
      )}) 0% 100% / ${imgWidth} ${imgHeight} no-repeat ,url(${formatImageSize(
        ImagesCard[3]?.link,
        true
      )}) 100% 100% / ${imgWidth} ${imgHeight} no-repeat `,
      objectFit: "cover",
      width: "100%",
      backgroundPosition: "top-left, top-right, bottom-left, bottom-right",
    },
    2: {
      background: `url(${formatImageSize(
        ImagesCard[0]?.link
      )}) 0% 100% / 49.5% 100% no-repeat ,url(${formatImageSize(
        ImagesCard[1]?.link
      )})  100% 50% / 49.5% 100%  no-repeat`,
      objectFit: "cover",
      backgroundPosition: "top-left, top-right, bottom-left, bottom-right",
      width: "100%",
    },
    0: {
      background:
        "linear-gradient(109.52deg, rgba(230, 109, 44, 0.8) 0%, rgba(190, 0, 255, 0.8) 100%)",
      backgroundColor: "white",
      objectFit: "cover",
      width: "100%",
    },
    1: {
      backgroundImage: `url(${ImagesCard[0]?.link})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      backgroundPosition: "center",
    },
  };
  const imagesPosition = (numberOfImages = 0) =>
    numberOfCards[`${numberOfImages === 3 ? 2 : numberOfImages}`];

  return (
    <div className={[`${styles["LiveCardContainer"]}, ${className}`].join(" ")}>
      {isLive && <LiveTag text="AO VIVO" />}
      <div
        className={styles["LiveCardContainer__cardVideo"]}
        style={imagesPosition(ImagesCard.length)}
      >
        <div className={styles["logoComponent"]}>
          <div
            style={{
              backgroundImage: `url(${thumbUrl})`,
              backgroundColor: "#fff",
              position: "absolute",
              height: "80px",
              width: "80px",
              borderRadius: "50%",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              backgroundPosition: "center",
              backgroundSize: "80px",
            }}
          />
        </div>
      </div>
      <time>{time}</time>
      <span className={styles["title"]}>{limitCharacters(title, 25)}</span>
      <span
        className={styles["description"]}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: limitCharacters(description, charactersLimit),
        }}
      />
    </div>
  );
};

export default LiveCard;
