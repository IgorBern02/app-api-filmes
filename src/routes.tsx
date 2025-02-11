import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MovieList from "./components/MovieList/index";
import MovieDetails from "./components/pages/movieDetails";
import { VisibilityProvider } from "./components/visibilityContext";
import Navbar from "./components/Navbar";
import { SearchMovie } from "./components/inputs/search";

export const AppRoutes = () => {
  return (
    <VisibilityProvider>
      <BrowserRouter>
        <Navbar />
        <SearchMovie />
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </VisibilityProvider>
  );
};
