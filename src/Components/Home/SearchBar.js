import { React, useState } from "react";
import { useDispatch } from "react-redux";
import SearchCiudad from "./SearchCiudad";
import SearchNombre from "./SearchNombre";
import SearchServicio from "./SearchServicio";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("ciudad");
  function botonBusqueda(valor, e){
    e.preventDefault();
    setSearchBar(valor);
  }
  
  return (
    <div className="barraSearch">
      <div className="conenidoTitleBarra">
        <h2>Encontrá tu peluquería donde sea que estes!</h2>

        {searchBar === "ciudad" ? (
          <SearchCiudad />
        ) : (searchBar === "nombre" ? (
          <SearchNombre />
        ) : (
          <SearchServicio />
        ))}

        <div>
          <button onClick={(e)=>{botonBusqueda("nombre", e)}}>Buscar por Nombre</button>
          <button onClick={(e)=>{botonBusqueda("ciudad", e)}}>Buscar por ciudad</button>
          <button onClick={(e)=>{botonBusqueda("servicio", e)}}>
            Buscar por servicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
