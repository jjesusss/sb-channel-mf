import React from "react";
import styles from "./styles.module.scss";
import Tabs from "../../components/Tabs";
import HomeSection from "../../sections/Home/index";
import VideosSection from "../../sections/Videos";
import BlogSection from "../../sections/Blog";
import ProductSection from "../../sections/Product";
import EventSection from "../../sections/Event";
import NotificationSection from "../../sections/Notification";

function LifeStylePage() {
  return (
    <main className={styles["ScreenBidPage"]}>
      <div className={styles["banner"]}>
        <div className={styles["text"]}>
          <img className={styles["title"]} src="/images/bidt-logo.svg" alt="" />
          <p className={styles["description"]}>
            Somos a plataforma número 1 para colecionadores e amantes de carros
            clássicos e esportivos.
          </p>
        </div>
      </div>
      <Tabs
        tabs={[
          {
            title: "Início",
            content: <HomeSection />,
          },
          {
            title: "Produtos",
            content: <ProductSection />,
          },
          {
            title: "Coleções",
            content: <EventSection />,
          },
          {
            title: "Vídeos",
            content: <VideosSection />,
          },
          {
            title: "Blog",
            content: <BlogSection />,
          },
          {
            title: "Sobre",
            content: "",
          },
          {
            title: "Notificações",
            content: <NotificationSection />,
          },
        ]}
      />
    </main>
  );
}

export default LifeStylePage;
