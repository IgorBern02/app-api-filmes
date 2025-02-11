import { Link } from "react-router-dom";
import { Movie } from "../types/movie";
import StarRating from "../Stars";
import { useVisibility } from "../visibilityContext";
import "./style.scss";

export interface Props {
  movie: Movie;
}

function MovieCard(props: Props) {
  const movie = props.movie;
  const { setNavbarVisibility, setSearchVisibility } = useVisibility();

  const handleClick = () => {
    setNavbarVisibility(false); // Esconde o Navbar ao clicar no card
    setSearchVisibility(false); // Esconde o input de pesquisa
  };

  return (
    <Link to={`/movie/${movie.id}`} onClick={handleClick}>
      <li className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            id="img"
          />
        </div>
        <div className="movie-infos">
          <p className="movie-title">{movie.title}</p>
          {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}

          <div className="hidden-content">
            {movie.overview && (
              <p className="description">
                {movie.overview.length > 100
                  ? `${movie.overview.substring(0, 100)}...`
                  : movie.overview}
              </p>
            )}

            <button className="btn-default">Ver mais</button>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default MovieCard;
