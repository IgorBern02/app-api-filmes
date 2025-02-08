import MovieList from "./components/MovieList/index";
import Navbar from "./components/Navbar/index";
import "./components/fonts/_fonts.scss";
import "./globals.scss";

function App() {
  return (
    <div>
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
