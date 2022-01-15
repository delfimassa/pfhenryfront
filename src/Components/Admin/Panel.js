import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Panel() {

    const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    // dispatch(searchPokemonId(id))
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
    });
  }, []);

  console.log("pelu", pelu);

  return (
    <div>
      {/* <p>{selectedPelu.name}</p> */}
      {pelu == null ? <div>Loading</div> :
      <div>
          <p>{pelu[0].name}</p>
          <p>{pelu[0].address}</p>
          <p>{pelu[0].phone}</p>
          <img src={pelu[0].avatar}/> 
      </div>
      }
    </div>
  );

}

export default Panel
