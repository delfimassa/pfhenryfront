import React, { useState, useEffect } from "react";
import Card from "../Cards/Card";
import FilterPanel from "./FilterPanel";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

import "./Home.css";
import { async } from "@firebase/util";
import { firestore } from "../../firebase-config";

function Home() {
  const currentUser = useSelector((state) => state.user);
  // const adminUserr = useSelector((state) => state.adminUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }

    // const obtenerDatos = async () => {
    //   const q = query(collection(firestore, "users"));
    //   const querySnapshot = await getDocs(q);
    //   const querysss = []
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // };

    // obtenerDatos();
    console.log("user home " + currentUser);
  }, [currentUser, navigate]);

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);
  return (
    <div>
      <SearchBar />
      <div className="container">
        <FilterPanel />
        <Card />
      </div>
      <div class="containerImg">
        <img
          src="https://album.mediaset.es/eimg/2020/04/16/TFkIELZDad4N9wJvYdCP06.jpg?w=1200&h=900"
          alt="Avatar"
          class="image"
        />
        <div class="middle">
          <a href="#" class="card-link">
            <button type="button" class="btn btn-primary">
              Comprar
            </button>
          </a>
          <a href="#" class="card-link">
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{ paddingTop: "5.5px", paddingBottom: "5.5px" }}
            >
              +Info
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
//agregar algo para q las cards bajen a partir de cierto punto
export default Home;
