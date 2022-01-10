import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector} from "react-redux";
import { getPeluquerias } from '../Redux/actions/peluqueria';



const PeluDetail = () => {
  const dispatch  = useDispatch();
  useEffect(()=>{dispatch(getPeluquerias())}, []);

  const {peluquerias} = useSelector((state) => state);
    
    return (
        <div>
            {peluquerias.map((p)=>{return (<p>{p.name}</p>)})}
        </div>
    );
};

export default PeluDetail;