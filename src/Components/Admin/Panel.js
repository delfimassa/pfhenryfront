<<<<<<< HEAD
import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Panel() {

    const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    // dispatch(searchPokemonId(id))
=======
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Panel() {
  const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  useEffect(() => {
>>>>>>> db603768a6424816438982a91aa2e433be89acb1
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
    });
  }, []);

<<<<<<< HEAD
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
=======
  console.log(id);
  console.log(pelu[0]);
  return (
    <div>
      <div>
        {/* <p>{selectedPelu.name}</p> */}
        {pelu == null ? (
          <div>Loading</div>
        ) : (
          <div>
            <p>{pelu[0].name}</p>
            <p>{pelu[0].address}</p>
            <p>{pelu[0].phone}</p>
            <img src={pelu[0].avatar} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Panel;
>>>>>>> db603768a6424816438982a91aa2e433be89acb1
