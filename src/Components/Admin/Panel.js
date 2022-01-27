import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Panel.css' 
function Panel() {
  let currentAdmin = useSelector(state => state.user);
  console.log('usuario', currentAdmin);
  // let username; 
  // if(currentAdmin.email) username = currentAdmin.email; // 
  // else if(currentAdmin.user.email) username = currentAdmin.user.email;     nono JAJJAJA escribe re de la nada asi q te anda como el tuje
  const [pelu, setPelu] = useState(null);
  const [horariosOcupados, setHorariosOcupados] = useState([])
  const [horariosRegistrados, setHorariosRegistrados] = useState()

  useEffect(() => {
    if(currentAdmin) axios.get(`http://localhost:4000/peluqueria/username/${currentAdmin.email ? currentAdmin.email: currentAdmin.user.email}`).then((response) => {
      setPelu(response.data);
    });

  }, []);

  
  function ocuparHorario(e, horario){
    e.preventDefault()
    setHorariosOcupados([...horariosOcupados, horario])
  }

  console.log(horariosOcupados)
  return (
    <div>
      <div>
        {/* <p>{selectedPelu.name}</p> */}
        {pelu !== null ? 
          <div>
            <p>{pelu.name}</p>
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
                {pelu.turnero.map(horario => {
                   horariosOcupados.map(e => e !== horario) ?  
                    <tr>
                      <th scope="col">Libre</th>
                      <th scope="col">{horario}</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <button name={horario} onClick={e => ocuparHorario(e, horario)}>Ocupar</button>
                    </tr>
                   :
                   <tr>
                     <th scope="col">Ocupado</th>
                     <th>{horario}</th>
                     <th></th>
                     <th></th>
                   </tr>
                  })
                }
              </tbody> 
              {/* <tbody> 
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
              </tbody> */}
            </table>
          </div>
          :
          <div>Loading</div>
        }
      </div>
    </div>
  );
}

export default Panel;

