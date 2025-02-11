import React from "react";
import { useVisibility } from "../visibilityContext";
import "./style.scss";

export default function Navbar() {
  const { isNavbarVisible } = useVisibility();

  if (!isNavbarVisible) return null;

  return (
    <div className="navbar">
      <h1 className="title_navbar">Filmes</h1>
    </div>
  );
}
