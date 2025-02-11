import { useVisibility } from "../../visibilityContext";
import "./style.scss";
import { IoIosSearch } from "react-icons/io";

export function SearchMovie() {
  const { isSearchVisible } = useVisibility();

  if (!isSearchVisible) return null;

  return (
    <div className="input-search-container">
      <input type="text" placeholder="Pesquisar filme" />
      <IoIosSearch />
    </div>
  );
}
