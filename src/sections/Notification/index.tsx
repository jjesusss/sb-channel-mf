import React from "react";
import styles from "./styles.module.scss";

const NotificationSection = () => (
  <div className={styles["NotificationPage"]}>
    <h3>Preferências de notificações</h3>
    <span />
    <div className={styles["content"]}>
      <p>
        Sobre quais tópicos relacionados a lifestyle você deseja receber
        notificações?
      </p>
      <ul className={styles["list"]}>
        <li className={styles["list-item"]}>
          <input type="radio" name="" id="" /> Produtos selecionados para você
        </li>
        <li className={styles["list-item"]}>
          <input type="radio" name="" id="" /> Eventos selecionados para você
        </li>
        <li className={styles["list-item"]}>
          <input type="radio" name="" id="" /> Novos vídeos e posts do blog
        </li>
        <li className={styles["list-item"]}>
          <input type="radio" name="" id="" /> Todos os tópicos
        </li>
      </ul>

      <input
        className={styles["input-text"]}
        type="text"
        placeholder="Confirme o email onde deseja receber as notificações"
      />

      {/* <Button label={"Enviar"} size="small" template="purple" /> */}
    </div>
  </div>
);

export default NotificationSection;
