import { React, useState } from "react";
import { useDispatch } from "react-redux";

const SearchNombre = () => {
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
          placeholder="Nombre de tu peluqueria"
          onChange={(e) => handleOnChange(e)}
        />
        <button
          style={{ borderRadius: "3px" }}
          type="submit"
          className="btn btn-primary my-2 my-sm-0"
        >
          Search
        </button>{" "}
      </form>
    );
  };

export default SearchNombre;