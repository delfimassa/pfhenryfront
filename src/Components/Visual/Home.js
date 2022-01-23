import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../Home/SearchBar";
import FilterPanel from "./FilterPanel";
import { getPeluquerias } from "../../Redux/actions/peluqueria";
import "./Home.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserMongo } from "../../Redux/actions/client";

function Home() {
  const currentUser = useSelector((state) => state.user);
  const allPeluquerias = useSelector((state) => state.allPeluquerias);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPeluquerias());
    if (!currentUser) {
      navigate("/");
    } else {
      dispatch(getUserMongo(currentUser.email));
    }
    // obtenerDatos();
    console.log("user home " + currentUser);
  }, [currentUser, navigate]);

  // useEffect(() => {
  //   getPeluquerias();
  // }, [getPeluquerias]);

  return (
    <div>
      <div className="barraSearch">
        <SearchBar />
      </div>

      <div className="container-home">
        <div className="filterpanel-container p-0"><FilterPanel /></div>
        <div className="cards-container">
          <Cards peluquerias={allPeluquerias} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    peluquerias: state.allPeluquerias,
    orden: state.orden,
  };
}

export default connect(mapStateToProps, { getPeluquerias })(Home);
