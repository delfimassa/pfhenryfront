import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices, filterServices } from "../../Redux/actions/service";

const SearchServicio = () => {
  const servicios = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  // console.log(servicios);

  function handleOnChange(e) {
    // e.preventDefault();
    dispatch(filterServices(e.target.value));
  }

  return (
    <div>
      <p>Filtrar Por:</p>
      <select name="filterServices" onChange={handleOnChange}>
        <option value="services" label={"Busca por servicios"} />

        {servicios &&
          servicios.map((s) => {
            return <option key={s.id} value={s._id} label={s.name} />;
          })}
      </select>
    </div>
  );
};

export default SearchServicio;
