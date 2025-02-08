import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import MovieList from "./components/MovieList/index"
import MovieDetails from "./components/pages/movieDetails"

export const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<MovieList/>}/>
                <Route path="/movie/:id" element={<MovieDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}