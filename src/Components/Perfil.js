import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./Perfil.module.css";

const Perfil = () => {
  const user = useSelector((state) => state.user);
  const userMongo = useSelector((state) => state.userMongo);

  // console.log("user: ", user);
  // console.log("userMongo: ", userMongo);

  return (
    <div>
      <div className={s.head}>
        {user.photoURL ? (
          <img className={s.imagenPerfil} src={user.photoURL} alt="profile" />
        ) : (
          <img
            className={s.imagenPerfil}
            src="https://i.pinimg.com/564x/bc/bc/dc/bcbcdc7fcb71c075789596e7f288c579.jpg"
            alt="profile"
          />
        )}
        <h1 style={{ marginTop: "15px", marginLeft: "15px" }}>
          {userMongo.name}
        </h1>
      </div>
      <div className={s.panel}>
        <div className={s.parentFilterpanel}>
          <p>Email: {userMongo.username}</p>
          {user.phone ? (
            <p>Phone Number: {user.phoneNumber}</p>
          ) : (
            <p>Phone Number: -</p>
          )}
          {<p>Adress: -</p>}
        </div>
        <div>
          <h3 className={s.title}>Mi Perfil</h3>
          <Link style={{ textDecoration: "none" }} to="/favoritos">
            <div className={s.buttons}>
              <p className={s.divisionName}>MIS FAVORITOS</p>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/tuscompras">
            <div className={s.buttons}>
              <p className={s.divisionName}>MIS COMPRAS</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
