import { React, useState } from "react";
import { useDispatch } from "react-redux";

const SearchCiudad = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(console.log(search)); // con dispatch usar la function que viene desde actions
  }
  function handleOnChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <form className="d-flex inputSearchs" onSubmit={(e) => handleOnSubmit(e)}>
      <input
        className="form-control input-search"
        type="text"
        placeholder="Ciudad"
        onChange={(e) => handleOnChange(e)}
      />
      <select className="mr-2">
        <option name="ciudad">Provincia</option>
        <option name="servicio">opc provincias</option>
      </select>
      <button
        type="submit"
        className="btn btn-primary my-2 my-sm-0"
      >
        Buscar
      </button>{" "}
    </form>
  );
};

export default SearchCiudad;
