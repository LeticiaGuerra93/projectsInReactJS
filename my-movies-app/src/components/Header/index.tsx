import React from "react";
import { Link } from "react-router-dom";
import { HeaderBase } from "./styles";
import { Image } from "../Image/styles";
import IconVideoPlay from "../../assets/img/video-player.png";
import './styles.css'

function Header() {
  return (
    <HeaderBase>
      <Link to="/">
        <Image src={IconVideoPlay} alt="Icone de video play" />
      </Link>
      <h1 className="title">Let's go Movies</h1>
    </HeaderBase>
  );
}

export default Header;
