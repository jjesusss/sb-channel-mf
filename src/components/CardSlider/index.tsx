import React, { useState } from "react";
import styles from "./styles.module.scss";

function CardSlider(props: any) {
  const {
    children,
    visibleCards,
    cardHeight,
    positionButtons = cardHeight * 0.5,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerWidth = 1280 / visibleCards;

  const slide = (direction: number) => {
    const lastIndex = children?.length - visibleCards;
    const nextIndex = currentIndex + direction;

    if (nextIndex < 0 || nextIndex > lastIndex) return;

    setCurrentIndex(nextIndex);
  };
  const renderDots = () => {
    const dots = [];
    const totalClicks = Math.ceil(children?.length / visibleCards) + 1;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < totalClicks; i++) {
      dots.push(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span
          key={i}
          className={`${styles["slider-dot"]} ${
            i === currentIndex ? styles["active"] : ""
          }`}
          onClick={() => {
            setCurrentIndex(i);
          }}
        />
      );
    }

    return dots;
  };

  return (
    <div className={styles["slider"]}>
      <div
        className={styles["slider-container"]}
        style={{
          transform: `translateX(-${currentIndex * containerWidth}px)`,
          width: `${containerWidth * children.length}px`,
        }}
      >
        {children?.map(
          (
            card:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal,
            index: React.Key
          ) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={index}
              className={styles["slider-card"]}
              style={{
                width: `${containerWidth}px`,
                height: `${cardHeight}px`,
              }}
            >
              {card}
            </div>
          )
        )}
      </div>
      <div
        style={{ top: positionButtons }}
        className={styles["slider-controls"]}
      >
        <div className={styles["slider-controls-container"]}>
          <button
            style={{
              background: `url(/images/ArrowLeft.svg) no-repeat`,
              backgroundPosition: "center",
              position: "relative",
              left: "-18px",
              border: "none",
            }}
            onClick={() => slide(-1)}
          />
          <button
            style={{
              background: `url(/images/ArrowRight.svg) no-repeat`,
              backgroundPosition: "center",
              position: "relative",
              right: "-25px",
              border: "none",
            }}
            onClick={() => slide(1)}
          />
        </div>
      </div>
      <div className={styles["slider-dots"]}>{renderDots()}</div>
    </div>
  );
}

export default CardSlider;
