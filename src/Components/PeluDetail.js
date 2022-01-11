import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeluqueriaById } from "../Redux/actions/peluqueria";
import { useParams } from "react-router";
import axios from "axios";

const PeluDetail = () => {
  //   const dispatch  = useDispatch();
  //   const params = useParams();
  //   console.log("params desde detail", params);
  //   useEffect(()=>{dispatch(getPeluqueriaById(params.id))}, [dispatch]);
  //   const selectedPelu = useSelector((state) => state.selectedPelu);
  //   console.log("selectedPelu desde detail", selectedPelu);

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
};

export default PeluDetail;
