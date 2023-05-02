import React from "react";
import "./styles.scss";

const NotificationSection = () => (
  <div className="NotificationPage">
    <h3>Preferências de notificações</h3>
    <span />
    <div className="content">
      <p>Sobre quais tópicos relacionados a lifestyle você deseja receber notificações?</p>
      <ul className="list">
        <li className="list-item">
          <input type="radio" name="" id="" /> Produtos selecionados para você
        </li>
        <li className="list-item">
          <input type="radio" name="" id="" /> Eventos selecionados para você
        </li>
        <li className="list-item">
          <input type="radio" name="" id="" /> Novos vídeos e posts do blog
        </li>
        <li className="list-item">
          <input type="radio" name="" id="" /> Todos os tópicos
        </li>
      </ul>

      <input className="input-text" type="text" placeholder="Confirme o email onde deseja receber as notificações" />

      {/* <Button label={"Enviar"} size="small" template="purple" /> */}
    </div>
  </div>
);

export default NotificationSection;
