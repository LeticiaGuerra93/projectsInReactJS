import React from "react";
import { FooterBase } from "./styles";
import { Image } from "../Image/styles";
import IconVideoPlay from "../../assets/img/video-player.png";
import "./styles.css";

function Footer() {
  return (
    <FooterBase>
      <p className="signed">Desenvolvido por Letícia Guerra </p>
      <Image
        src={IconVideoPlay}
        alt="Icone de video play"
        width="20px"
        height="20px"
      />
    </FooterBase>
  );
}

export default Footer;
