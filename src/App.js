import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Landing from "./Components/Landing";
import Favoritos from "./Components/Favoritos";
import PeluDetail from "./Components/PeluDetail";
// import RegistroPelus from "./Components/RegistroPelus";
import Admin from "./Components/Admin";
import Panel from "./Components/Admin/Panel"
import Carrito from "./Components/Carrito";
import Perfil from "./Components/Perfil";
import TusCompras from "./Components/TusCompras";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Login from "./auth/Login";
import Register from "./auth/Register";
import RegisterAdmin from "./auth/RegisterAdmin";
import "bootswatch/dist/lux/bootstrap.min.css";
import FormReserva from "./Components/FormReserva/FormReserva"
import Home from "./Components/Visual/Home";
import { auth } from "./firebase-config";
import {setUser} from "./Redux/actions/register";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(setUser(authUser))
        // authUser.getIdTokenResult().then((token) =>{console.log(token)})
      } else{
        dispatch(setUser(null))
      }
    })
  }, [dispatch])
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />} /> {/* AÑADIR PATH LOGIN*/}
        <Route path="/register" element={<Register />} />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />
        {/* <Route path="/registersalon" element={<RegistroPelus />} /> */}
        <Route path="/favoritos" element={<Favoritos />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/perfil" element={<Perfil />}/>
        <Route path="/tuscompras" element={<TusCompras />}/>
        <Route path="/admin"  element={<Panel />}/>
        {/* <Route path="/detallepeluqueria/:id" element={<PeluDetail />}/> */}
        {/* <Route path="/detallepeluqueria/:id" element={({match})=> <PeluDetail id={match.params.id}/>}/> */}
        <Route path="/:id" element={<PeluDetail />} />
        <Route path="/reserva/:id" element={<FormReserva />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
