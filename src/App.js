import React, {useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
 
import SearchBar from './Components/Home/SearchBar';
import Landing from "./Components/Home/Landing";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Login from "./auth/Login";
import Register from "./auth/Register";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
