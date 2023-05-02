import React from "react";
import { useEffect } from 'react';
import { SeactionCards } from '../../components/SectionCards';
import { SeactionDetails } from '../../components/SectionDetails';
import { useChannel } from '../../hooks';
import styles from './styles.module.scss';
import { useChannelContext } from '../../context';

export function AgrobidPage() {
  const { getAgroVideos, getLiveAgroVideos } = useChannel();
  const { agroVideos, agroLiveVideos } = useChannelContext();

  useEffect(() => {
    getAgroVideos();
    getLiveAgroVideos();
  }, [getAgroVideos, getLiveAgroVideos]);
  return (
    <main className={styles.ScreenBidPage}>
      <div className={styles.content}>
        <SeactionDetails
          logo={'/images/agrobidLogo-v2.png'}
          text={`Nosso propósito é aumentar a liquidez das operações de nossos
              clientes de forma sustentável. Um Marketplace transacional de
              produtos e serviços para o Agronegócio, com visão do negócio
              centrada no cliente.`}
          urlVideo={`https://www.youtube.com/watch?v=${agroLiveVideos?.items[0]?.id?.videoId}`}
          isLive={agroLiveVideos.items.length > 0 ? true : false}
          //urlVideo={`https://www.youtube.com/watch?v=lMTgg36Ki8U`}
          //isLive={true}
          channel={'@Agrobidnet'}
        />

        <SeactionCards videos={agroVideos} />
      </div>
    </main>
  );
}
