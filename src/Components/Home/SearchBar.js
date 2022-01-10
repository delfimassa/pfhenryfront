import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";

const SearchBar = () => {
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
    // <div className="barraSearch">
    //   <div className="conenidoTitleBarra">
    //     <h2>Encontrá tu peluquería donde sea que estes!</h2>
    //     <form className="d-flex" onSubmit={(e) => handleOnSubmit(e)}>
    //       <input
    //         className="form-control input-search"
    //         type="text"
    //         placeholder="Search"
    //         onChange={(e) => handleOnChange(e)}
    //       />
    //       <select
    //         style={{ outline: "none", width: "200px" }}
    //         className="me-sm-2"
    //       >
    //         <option name="ciudad">Ciudad</option>
    //         <option name="servicio">Servicio</option>
    //       </select>
    //       <button
    //         style={{ borderRadius: "3px" }}
    //         type="submit"
    //         className="btn btn-primary my-2 my-sm-0"
    //       >
    //         Search
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="barraSearch">
            <div className='conenidoTitleBarra'>
                <h2>Encontrá tu peluquería donde sea que estes!</h2>
                <form className="d-flex" onSubmit={(e) => handleOnSubmit(e)}>
                    <input className="form-control input-search" type="text" placeholder="Search" onChange={(e) => handleOnChange(e)} />
                    <select style={{ outline: 'none', width: '200px' }} className="me-sm-2">
                        <option name="ciudad">Ciudad</option>
                        <option name="servicio">Servicio</option>
                    </select>
                    <button style={{borderRadius:"3px"}} type="submit" className="btn btn-primary my-2 my-sm-0">Search</button>
                </form>
                </div>
                </div>
  );
};

export default SearchBar;
