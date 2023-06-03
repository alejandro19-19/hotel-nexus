import React from "react";
import "./cardRoom.scss";
import { useTranslation } from "react-i18next";

const CardRoom = ({ number, available, data }) => {
  const [t] = useTranslation("cardRoom");
  return (
    <div className="CardRoom">
      <div className="bg_img"></div>
      <div className="text">
        <p>{t("room")}</p>
        <p>{number}</p>
        <p>{available ? t("free") : t("occupied")}</p>
      </div>
      <button>Ver</button>
    </div>
  );
};

export default CardRoom;
