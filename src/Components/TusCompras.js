import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const TusCompras = () => {
  const currrentUser = useSelector((state) => state.user);
  console.log(currrentUser);

  const [compras, setCompras] = useState(null);
  console.log("compras", compras);

  useEffect(() => {
    if (currrentUser) {
      axios
        .get(
          `http://localhost:4000/turno/client/${
            currrentUser.email ? currrentUser.email : currrentUser.user.email
          }`
        )
        .then((response) => {
          setCompras([response.data]);
        });
    }
  }, []);
  return (
    <div>
      <p>tus compras!</p>
      {compras &&
        compras[0].map((e) => (
          <div className="card col-md-8">
            <p className="card-title">{e.peluqueria.name}</p>
            <p className="card-text" >{e.service.name}</p>
            <p className="card-text">{e.service.price}</p>
            <p className="card-text">{e.date}</p>
            <p className="card-text">{e.time}</p>
          </div>
        ))}
    </div>
  );
};

export default TusCompras;
