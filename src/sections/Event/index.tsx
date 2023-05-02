import React from "react";
import "./styles.scss";
import LiveCard from "../../components/LiveCard/LiveCard";

const EventSection = () => {
  const liveCardData = {
    thumbUrl: "https://example.com/thumb.jpg",
    progress: 50,
    title: "Live Event Title",
    time: "12:30 PM EST",
    description: "This is a description of the live event.",
    className: "my-live-card",
    imgWidth: "200",
    imgHeight: "100",
    productsPreviewImgs: [
      {
        image: {
          originalFileName: "product1.jpg",
          fileName: "product1.jpg",
          link: "https://example.com/product1.jpg",
          contentType: "image/jpeg",
        },
        description: "Product 1",
      },
      {
        image: {
          originalFileName: "product2.jpg",
          fileName: "product2.jpg",
          link: "https://example.com/product2.jpg",
          contentType: "image/jpeg",
        },
        description: "Product 2",
      },
    ],
    isLive: true,
  };

  return (
    <div className="EventPage">
      <h3>Coleções selecionadas para você</h3>
      <span className="span" />

      <div className="content">
        <div className="cards">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item: any) => (
            <LiveCard
              key={item.title}
              thumbUrl={liveCardData.thumbUrl}
              title={liveCardData.title}
              time={liveCardData.time}
              description={liveCardData.description}
              productsPreviewImgs={[]}
              charactersLimit={50}
              className={undefined}
              isLive={undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
