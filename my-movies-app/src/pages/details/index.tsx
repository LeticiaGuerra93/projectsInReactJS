import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutDefault from "../../components/LayoutDefault";
import Back from "../../assets/img/back.png";
import "./styles.css";

function Details() {
  const location = useLocation();
  const history = useNavigate();

  function close() {
    history("/");
  }

  return (
    <LayoutDefault>
      <div className="close" onClick={() => close()}>
        <img src={Back} alt="Icone back" />
      </div>
      <div className="movies-details">
        <span>
          Filme: <span className="label-value">{location.state.Title}</span>
        </span>
        <span>
          Gênero: <span className="label-value">{location.state.Genre}</span>
        </span>
        <span>
          Sinopse: <span className="label-value">{location.state.Plot}</span>
        </span>
        <span>
          Imdb: <span className="label-value">{location.state.imdbRating}</span>
        </span>
        <img src={location.state.Poster} alt="Poster do filme" />

        <span>
          Ano de Lançamento: <span className="label-value">{location.state.Year}</span>
        </span>
        <span>
          Premiações: <span className="label-value">{location.state.Awards}</span>
        </span>
        <span>
          Atores: <span className="label-value">{location.state.Actors}</span>
        </span>
        <span>
          Diretor (a): <span className="label-value">{location.state.Director}</span>
        </span>
        <span>
          Escritor (a): <span className="label-value">{location.state.Writer}</span>
        </span>
        <span>
          Produção: <span className="label-value">{location.state.Production}</span>
        </span>
      </div>
    </LayoutDefault>
  );
}

export default Details;
