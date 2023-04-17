import React from "react";
import LayoutDefault from "../../components/LayoutDefault";
import Img404 from "../../assets/img/cinema-com-pipoca.png";
import "./style.css";

function Page404() {
  return (
    <LayoutDefault>
      <img src={Img404} alt="Imagem de Error na pagina" className="error" />
      <p className="info">404</p>
      <p className="info">Sorry, page not found</p>
    </LayoutDefault>
  );
};

export default Page404;
