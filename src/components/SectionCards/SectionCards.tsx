import React from "react";
import styles from "./styles.module.scss";

const SeactionCards = (props: any) => {
  const { videos } = props;
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [modalVideo, setModalVideo] = useState(undefined);\

  return (
    <>
      <div className={styles["cards"]}>
        {videos?.items.map((item: any, i: number) => (
          <div
            className={styles["cards_item"]}
            key={i}
            style={item.id?.videoId ? {} : { display: "none" }}
            onClick={() => {
              // setModalVideo(item.id.videoId);
              // setIsModalVisible(true);
            }}
          >
            <img src={item.snippet.thumbnails.high.url} alt="" />
            <p className={styles["title"]}>{item.snippet.title}</p>
          </div>
        ))}
      </div>
      {/* <Modal
        handleClose={() => {
          setIsModalVisible(false);
        }}
        className={styles.modal}
        show={isModalVisible}
      >
        <VideoFrame
          autoPlay={false}
          controls
          UrlVideo={`https://www.youtube.com/watch?v=${modalVideo}`}
        />
      </Modal> */}
    </>
  );
};

export default SeactionCards;
