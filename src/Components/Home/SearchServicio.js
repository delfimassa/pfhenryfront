import { React, useState } from "react";
import { useDispatch } from "react-redux";

const SearchServicio = () => {
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
          placeholder="Servicio"
          onChange={(e) => handleOnChange(e)}
        />
        <button
          type="submit"
          className="btn btn-primary my-0"
        >
          Buscar
        </button>{" "}
      </form>
  );
};

export default SearchServicio;
