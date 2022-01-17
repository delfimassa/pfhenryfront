import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Panel() {
  const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
    });
  }, []);

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
