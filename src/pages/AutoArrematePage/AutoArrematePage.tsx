import React from "react";
import { useEffect } from "react";
import { SeactionCards } from "../../components/SectionCards";
import { SeactionDetails } from "../../components/SectionDetails";
import { useChannelContext } from "../../context/ChannelContext";
import { useChannel } from "../../hooks";
import styles from "./styles.module.scss";

export function AutoArrematePage() {
  const { getAutoVideos, getLiveAutoVideos } = useChannel();
  const { autoArremateVideos, autoLiveArremateVideos } = useChannelContext();

  useEffect(() => {
    getAutoVideos();
    getLiveAutoVideos();
  }, []);
  return (
    <main className={styles.ScreenBidPage}>
      <div className={styles.content}>
        <SeactionDetails
          logo={"/images/logoAutoArremate.png"}
          text={`Auto Arremate® é a solução digital do segmento automotivo, que conecta compradores e vendedores de veículos. Com mais de 20 anos de experiência, equipe e sócios somam um profundo conhecimento do mercado automotivo ao know-how de dezenas de especialistas em negócios digitais.`}
          urlVideo={`https://www.youtube.com/watch?v=${autoLiveArremateVideos?.items[0]?.id?.videoId}`}
          isLive={autoLiveArremateVideos.items.length > 0 ? true : false}
          channel={"@autoarremate"}
        />

        <SeactionCards videos={autoArremateVideos} />
      </div>
    </main>
  );
}
