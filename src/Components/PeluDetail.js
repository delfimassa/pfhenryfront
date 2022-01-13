import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector} from "react-redux";
import { getPeluqueriaById } from "../Redux/actions/peluqueria";
import { useParams } from "react-router-dom";
import axios from 'axios';


const PeluDetail = () => {
//   const dispatch  = useDispatch();
//   const params = useParams();
//   console.log("params desde detail", params);
//   useEffect(()=>{dispatch(getPeluqueriaById(params.id))}, [dispatch]);
//   const selectedPelu = useSelector((state) => state.selectedPelu);
//   console.log("selectedPelu desde detail", selectedPelu);

const [pelu, setPelu] = useState(null)
let { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu(response.data);
    });
  }, []);
    
    return (
        <div>
            <p>{pelu.name}</p>
            <p>detalle peluuu</p>
        </div>
    );
};

export default PeluDetail;