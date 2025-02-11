import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useVisibility } from "../visibilityContext";
import axios from "axios";
import { Movie } from "../types/movie";
import "./style.scss";
import { FaArrowLeft } from "react-icons/fa";

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const { setNavbarVisibility, setSearchVisibility } = useVisibility();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "08d267a3266551c5fcdef613021bfcc5",
              language: "pt-BR",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    setNavbarVisibility(false); // Esconde o Navbar ao entrar na página de detalhes
    setSearchVisibility(false); // Esconde o input de pesquisa ao entrar na página de detalhes

    return () => {
      setNavbarVisibility(true); // Restaura a visibilidade ao sair da página de detalhes
      setSearchVisibility(true); // Restaura a visibilidade do input de pesquisa ao sair
    };
  }, [setNavbarVisibility, setSearchVisibility]);

  if (!movie) {
    return <div className="loading-moviedetails">Carregando...</div>;
  }

  return (
    <div className="movie-details-page">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      ></div>
      <div className="content">
        <h1>{movie.title}</h1>
        <p>
          {movie.release_date && new Date(movie.release_date).getFullYear()}
        </p>
        <p>{movie.runtime} minutos</p>
        <div className="overview">
          <p>{movie.overview}</p>
        </div>

        <Link to="/home" className="btn-container">
          {/* <button className="btn-default">Voltar</button>  */}
          <button className="btn-default">
            <FaArrowLeft />
            <span className="btn-text">Voltar</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
