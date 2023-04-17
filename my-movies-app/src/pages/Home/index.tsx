import React, { useState, useEffect } from "react";
import LayoutDefault from "../../components/LayoutDefault";
import { Input } from "../../components/Input/styles";
import { Movie } from "../../types/movie";
import MovieService from "../../service/movie-service";
import List from "../../components/List";
import "./styles.css";
import Button from "../../components/Button";
import { Image } from "../../components/Image/styles";
import TopArrow from "../../assets/img/top-arrow.png";
import BottomArrow from "../../assets/img/bottom-arrow.png";

import Context from "../../common/context/context";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [nameMovie, setNameMovie] = useState("Dungeons");
  const [movieYear, setMovieYear] = useState("");

  useEffect(() => {
    getMovies(nameMovie, movieYear);
  }, [nameMovie, movieYear]);

  function getMovies(name: string, year: string) {
    getMoviesByTitle(name, year);
  }

  function getMoviesByTitle(name: string, year: string) {
    return MovieService.get(name, year).then((response: any) => {
      let filmes = response.data.Search;

      getMoviesByIdImdb(filmes);
    });
  }

  function getMoviesByIdImdb(filmes: Movie[]) {
    filmes.map(async (item: any, index) => {
      await MovieService.getId(item.imdbID).then((response: any) => {
        let newMovie: Movie = {
          Title: response.data.Title,
          Year: response.data.Year,
          imdbID: response.data.imdbID,
          Type: response.data.Type,
          Poster: response.data.Poster,
          imdbRating: response.data.imdbRating,
          Actors: response.data.Actors,
          Director: response.data.Director,
          Writer: response.data.Writer,
          Genre: response.data.Genre,
          Plot: response.data.Plot,
          Awards: response.data.Awards,
          Production: response.data.Production,
        };
        filmes[index] = newMovie;
        setMovies([...filmes]);
      });
    });
  }

  function handleChange1(event: any) {
    setNameMovie(event.target.value);
  }

  function handleChange2(event: any) {
    setMovieYear(event.target.value);
  }

  function sortMoviesAscending() {
    let listOrder: Movie[] = [];
    listOrder = listOrder.concat(
      movies.slice(0, 10).sort((a, b) => {
        return a.Title < b.Title ? -1 : a.Title > b.Title ? 1 : 0;
      })
    );
    setMovies(listOrder);
  }

  function sortMoviesDescending() {
    let listOrder: Movie[] = [];
    listOrder = listOrder.concat(
      movies.slice(0, 10).sort((a, b) => {
        return a.Title < b.Title ? 1 : a.Title > b.Title ? -1 : 0;
      })
    );
    setMovies(listOrder);
  }

  return (
    <LayoutDefault>
      <Context.Provider value={{ movies, setMovies }}>
        <div className="row-top">
          <Input
            type="text"
            placeholder="Pesquise pelo nome do filme"
            value={nameMovie}
            onChange={handleChange1}
          />
          <Input
            type="text"
            placeholder="Pesquise pelo ano do filme (opcional)"
            value={movieYear}
            onChange={handleChange2}
          />
          <Button onClick={() => sortMoviesAscending()} type="button">
            Ordenar
            <Image
              src={TopArrow}
              alt="Icone seta para cima"
              width="20px"
              height="20px"
            />
          </Button>
          <Button onClick={() => sortMoviesDescending()} type="button">
            Ordenar
            <Image
              src={BottomArrow}
              alt="Icone seta para baixo"
              width="20px"
              height="20px"
            />
          </Button>
        </div>
        <List />
      </Context.Provider>
    </LayoutDefault>
  );
}

export default Home;
