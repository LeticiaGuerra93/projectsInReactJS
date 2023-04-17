import React, { useEffect, useContext, useState } from "react";
import { ListBase } from "./styles";
import { Movie } from "../../types/movie";
import MovieService from "../../service/movie-service";
import { useNavigate } from "react-router-dom";
import Plus from "../../assets/img/plus.png";
import "./style.css";

import Context from "../../common/context/context";

function List() {
  const { movies, setMovies } = useContext(Context);

  const history = useNavigate();

  useEffect(() => {}, [movies]);

  function movieDetails(event: any, item: Movie) {
    event.preventDefault();
    history("/details", { state: item });
  }

  return (
    <ListBase>
      {movies?.slice(0, 10).map((item: any, index: any) => (
        <li
          key={index}
          className="item"
          onClick={() => movieDetails(event, item)}
        >
          <div className="movies">
            <img src={item.Poster} alt="Poster do filme" />
            <div className="description">
              <span>
                Filme: <span className="label-value">{item.Title}</span>
              </span>
              <span>
                Nota imdb:{" "}
                <span className="label-value">{item.imdbRating}</span>
              </span>
            </div>
            <div className="more-info">
              <img src={Plus} alt="Icone mais informações" />
            </div>
          </div>
        </li>
      ))}
    </ListBase>
  );
}

export default List;
