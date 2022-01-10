import React, { useEffect } from "react";
import Navbar from "../Common/Navbar";
import Cards from "../Cards/Cards";
import Card from "../Cards/Card";
import SearchBar from "../Home/SearchBar";
import FilterPanel from "./FilterPanel";
import { getPeluquerias } from "../../Redux/actions/peluqueria";
import "./Home.css";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home({ getPeluquerias, peluquerias }) {
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }

    // obtenerDatos();
    console.log("user home " + currentUser);
  }, [currentUser, navigate]);
  useEffect(() => {
    getPeluquerias();
  }, [getPeluquerias]);

  return (
    <div>
      <SearchBar />
      <div className="container-home">
        <FilterPanel />
        <div className="cards-container">
          <Cards peluquerias={peluquerias} />
        </div>
      </div>
    </div>
  );
}
//agregar algo para q las cards bajen a partir de cierto punto
function mapStateToProps(state) {
  return {
    peluquerias: state.allPeluquerias,
  };
}

export default connect(mapStateToProps, { getPeluquerias })(Home);
