import { useState, useEffect } from "react";
import "./style.scss";
import axios from "axios";
import { Movie } from "../types/movie";
import MovieCard from "../MovieCard/index";
// import ReactLoading from "react-loading";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "08d267a3266551c5fcdef613021bfcc5",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results); // Armazena os filmes buscados no estado
    });

    // setIsLoading(false);
  };

  // if (isLoading) {
  //   return (
  //     <div className="loading-container">
  //       <ReactLoading type="spin" color="#6046ff" height={"5%"} width={"5%"} />
  //     </div>
  //   );
  // }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
