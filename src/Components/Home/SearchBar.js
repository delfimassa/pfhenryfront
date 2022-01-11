import { React, useState } from "react";
import { useDispatch } from "react-redux";
import SearchCiudad from "./SearchCiudad";
import SearchNombre from "./SearchNombre";
import SearchServicio from "./SearchServicio";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("nombre");
  function botonBusqueda(valor, e) {
    e.preventDefault();
    setSearchBar(valor);
  }

  return (
    <div className="barraSearch">
      <div className="conenidoTitleBarra">
        <h2>Encontrá tu peluquería donde sea que estes!</h2>
        {searchBar === "ciudad" ? (
          <SearchCiudad />
        ) : searchBar === "nombre" ? (
          <SearchNombre />
        ) : (
          <SearchServicio />
        )}
        <div className="mt-4">
          <button
            onClick={(e) => {
              botonBusqueda("nombre", e);
            }}
            style={{ borderRadius: "3px" }}
            className="btn btn-primary my-2 mx-1 my-sm-0"
          >
            Buscar por Nombre
          </button>
          <button
            onClick={(e) => {
              botonBusqueda("ciudad", e);
            }}
            style={{ borderRadius: "3px" }}
            className="btn btn-primary my-2 mx-1 my-sm-0"

          >
            Buscar por ciudad
          </button>
          <button
            onClick={(e) => {
              botonBusqueda("servicio", e);
            }}
            style={{ borderRadius: "3px" }}
            className="btn btn-primary my-2 mx-1 my-sm-0"
          >
            Buscar por servicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
