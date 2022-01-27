import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Panel.css'

function Panel() {
  let currentAdmin = useSelector(state => state.user);
  console.log('usuario', currentAdmin);
  // let username;
  // if(currentAdmin.email) username = currentAdmin.email;
  // else if(currentAdmin.user.email) username = currentAdmin.user.email;
  const [pelu, setPelu] = useState(null);

  useEffect(() => {
    if(currentAdmin) axios.get(`http://localhost:4000/peluqueria/username/${currentAdmin.email ? currentAdmin.email: currentAdmin.user.email}`).then((response) => {
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
                <tr className="color-cliente">
                  <td>Lucho</td>
                  <td>16/01/2022 13:00</td>
                  <td>Corte</td>
                  <td>3489569730</td>
                  <td>
                    <button>Eliminar</button>
                  </td>
                </tr>
                <tr>
                  <td>Libre</td>
                  <td>16/01/2022 12:00</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button>Ocupar</button>
                  </td>
                </tr>
                <tr className="color-ocupado">
                  <td>Ocupado</td>
                  <td>16/01/2022 12:00</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button>Desocupar</button>
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

