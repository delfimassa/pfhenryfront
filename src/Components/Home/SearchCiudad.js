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
    <form className="d-flex" onSubmit={(e) => handleOnSubmit(e)}>
      <input
        className="form-control input-search"
        type="text"
        placeholder="Ciudad"
        onChange={(e) => handleOnChange(e)}
      />
      <select style={{ outline: "none", width: "200px" }} className="me-sm-2">
        <option name="ciudad">Ciudad</option>
        <option name="servicio">Servicio</option>
      </select>
      <button
        style={{ borderRadius: "3px" }}
        type="submit"
        className="btn btn-primary my-2 my-sm-0"
      >
        Buscar
      </button>{" "}
    </form>
  );
};

export default SearchCiudad;
