import { useState, useEffect, useCallback } from "react";
import "./style.scss";
import axios from "axios";
import { Movie } from "../types/movie";
import MovieCard from "../MovieCard/index";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const getMovies = useCallback(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "08d267a3266551c5fcdef613021bfcc5",
        language: "pt-BR",
        page: page,
      },
    }).then((response) => {
      if (page === 1) {
        setMovies(response.data.results); // Define os filmes iniciais
      } else {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]); // Adiciona novos filmes aos existentes
      }
      setPage((prevPage) => prevPage + 1); // Incrementa a página para a próxima solicitação
    });
  }, [page]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="movie-list-container">
        <ul className="movie-list">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>

      <div className="btn-more-container">
        <button onClick={getMovies} className="btn-more">
          Carregar mais
        </button>
      </div>
    </div>
  );
}
