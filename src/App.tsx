// import MovieList from "./components/MovieList/index";
import Navbar from "./components/Navbar/index";
import "./components/fonts/_fonts.scss";
import "./globals.scss";
import { AppRoutes } from "./routes";

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <MovieList />
    // </div>
  <div>
    <Navbar />
    <AppRoutes />
  </div>
    
  );
}

export default App;
