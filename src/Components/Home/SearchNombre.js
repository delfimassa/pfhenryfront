import { React, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { searchName } from "../../Redux/actions/search";

function SearchNombre({ searchName }) {
  function mins(string) {
    return string.toLowerCase();
  }

  function buscadorChange(e) {
    searchName(mins(e.target.value));
    console.log(e.target.value);
  }

  // const [search, setSearch] = useState("");
  // const dispatch = useDispatch();

  // function handleOnSubmit(e) {
  //   e.preventDefault();
  //   dispatch(console.log(search)); // con dispatch usar la function que viene desde actions
  // }
  // function handleOnChange(e) {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // }

  return (
    <form className="d-flex">
      <input
        className="form-control input-search"
        type="text"
        placeholder="Nombre de tu peluqueria"
        onChange={buscadorChange}
      />
      <button
        style={{ borderRadius: "3px" }}
        type="submit"
        className="btn btn-primary my-2 my-sm-0"
      >
        Search
      </button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    texto: state.text,
  };
}

export default connect(mapStateToProps, { searchName })(SearchNombre);
