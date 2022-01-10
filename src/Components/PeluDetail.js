import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector} from "react-redux";
import { getPeluqueriaById } from "../Redux/actions/peluqueria";
import { useParams } from "react-router-dom";


const PeluDetail = () => {
  const dispatch  = useDispatch();
  const params = useParams();
  console.log("params desde detail", params);
  useEffect(()=>{dispatch(getPeluqueriaById(params.id))}, [dispatch]);
  const selectedPelu = useSelector((state) => state.selectedPelu);
  console.log("selectedPelu desde detail", selectedPelu);
    
    return (
        <div>
            <p>{selectedPelu.name}</p>
        </div>
    );
};

export default PeluDetail;