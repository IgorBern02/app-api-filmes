import {
  // HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {} from "react-router-dom";

import MovieList from "./components/MovieList/index";
import MovieDetails from "./components/pages/movieDetails";
import { VisibilityProvider } from "./components/visibilityContext";
import Navbar from "./components/Navbar";
import { SearchMovie } from "./components/inputs/search";

export const AppRoutes = () => {
  return (
    <VisibilityProvider>
      {/* <Router> */}
      <Navbar />
      <SearchMovie />
      <Routes>
        <Route path="*" element={<Navigate to="home" />} />
        <Route path="/home" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      {/* </Router> */}
    </VisibilityProvider>
  );
};
