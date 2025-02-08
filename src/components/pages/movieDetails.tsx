import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import axios from "axios";
import { Movie } from "../types/movie";
import "./style.scss";

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: "08d267a3266551c5fcdef613021bfcc5",
            language: "pt-BR",
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="movie-details-page">
      <div
        className="background-image"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
      ></div>
      <div className="content">
        <h1>{movie.title}</h1>
        <p>{movie.release_date && new Date(movie.release_date).getFullYear()}</p>
        <p>{movie.runtime} minutos</p>
        <div className="overview">
        <p>{movie.overview}</p>
        </div>
        
        <Link to="/home" className="btn-container">
            <button className="btn-default">Ver mais</button>
        </Link>
       
       
      </div>
    </div>
  );
};

export default MovieDetailsPage;