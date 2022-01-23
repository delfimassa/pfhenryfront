
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import './Panel.css'

function Panel() {
  const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
    });
  }, []);

  return (
    <div>
      <div>
        {/* <p>{selectedPelu.name}</p> */}
        {pelu == null ? (
          <div>Loading</div>
        ) : (
          <div>
            <p>{pelu[0].name}</p>
            <table class="table">
              <thead class="color-thead">
                <tr>
                  <th scope="col">nombre</th>
                  <th scope="col">fecha/turno</th>
                  <th scope="col">servicio</th>
                  <th scope="col">contacto</th>
                  <th scope="col">admin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lucho</td>
                  <td>16/01/2022 13:00</td>
                  <td>Corte</td>
                  <td>3489569730</td>
                  <td>
                    <button>Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Panel;

