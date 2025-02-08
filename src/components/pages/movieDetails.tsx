// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Movie } from "../types/movie";
// import "./style.scss";

// export default function MovieDetails() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [movie, setMovie] = useState<Movie | null>(null);

//   //   useEffect(() => {
//   //     if (id) {
//   //       getMovieDetails(id as string);
//   //     }
//   //   }, [id]);

//   useEffect(() => {
//     if (router.isReady && id) {
//       getMovieDetails(id as string);
//     }
//   }, [router.isReady, id]);

//   const getMovieDetails = (movieId: string) => {
//     axios({
//       method: "get",
//       url: `https://api.themoviedb.org/3/discover/movie/${movieId}`,
//       params: {
//         api_key: "08d267a3266551c5fcdef613021bfcc5",
//         language: "pt-BR",
//       },
//     }).then((response) => {
//       setMovie(response.data);
//     });
//   };

//   if (!movie) {
//     return <div>Carregando...</div>;
//   }

//   return (
//     <div className="movie-details">
//       <div
//         className="background-image"
//         style={{
//           backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
//         }}
//       ></div>
//       <div className="content">
//         <h1>{movie.title}</h1>
//         <p>{movie.release_date?.split("-")[0]}</p>
//         <p>{movie.runtime} minutos</p>
//         <p>{movie.overview}</p>
//       </div>
//     </div>
//   );
// }
