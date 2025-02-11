import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVisibility } from "../../visibilityContext";
import "./style.scss";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

export function SearchMovie() {
  const { isSearchVisible } = useVisibility();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Limpa a mensagem de erro antes de fazer a pesquisa

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "08d267a3266551c5fcdef613021bfcc5",
            language: "pt-BR",
            query: searchTerm,
          },
        }
      );

      if (response.data.results.length > 0) {
        const firstMovie = response.data.results[0];
        navigate(`/movie/${firstMovie.id}`); // Redireciona para a página de detalhes do filme
      } else {
        setErrorMessage("Nenhum filme encontrado com esse nome."); // Define a mensagem de erro
      }
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
      setErrorMessage("Ocorreu um erro ao buscar o filme. Tente novamente."); // Define a mensagem de erro em caso de falha na requisição
    }
  };

  if (!isSearchVisible) return null;

  return (
    <form className="input-search-container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Pesquisar filme"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <IoIosSearch />
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
}
