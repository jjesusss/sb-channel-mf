import React from "react";
import "./styles.scss";
import CardSlider from "../CardSlider";
import validateImageUrl from "../../utils/validateImageUrl";
import formatRangeDateAndHour from "../../utils/formatRangeDateAndHour";
import LiveCard from "../LiveCard/LiveCard";

const FeaturedEvents = (props: {
  items: any;
  title: any;
  emptyListMessage: any;
}) => {
  // eslint-disable-next-line react/prop-types
  const { items, title, emptyListMessage } = props;

  return (
    <div className="FeaturedEvents">
      <h3>
        <img src="/images/imageAuthor.svg" alt="" /> Eventos indicados por{" "}
        {title}
      </h3>
      <div className="content">
        {
          // eslint-disable-next-line react/prop-types
          items?.length ? (
            <CardSlider
              positionButtons={65}
              visibleCards={5}
              cardWidth={215}
              cardHeight={220}
            >
              {
                // eslint-disable-next-line react/prop-types
                items?.map((item: any) => (
                  <LiveCard
                    title={item.eventName}
                    thumbUrl={validateImageUrl(item.auctionImageUrl)}
                    time={formatRangeDateAndHour(
                      item.beginDateTime,
                      item.endDateTime
                    )}
                    description={item.eventFullDescription}
                    className="liveCard"
                    productsPreviewImgs={item?.gallery || []}
                    isLive={false}
                    charactersLimit={50}
                  />
                ))
              }
            </CardSlider>
          ) : (
            <span className="noContent">{emptyListMessage}</span>
          )
        }
      </div>
    </div>
  );
};

export default FeaturedEvents;
