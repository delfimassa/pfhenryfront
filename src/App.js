import React, {useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
 
import SearchBar from './Components/Home/SearchBar';
import Landing from "./Components/Home/Landing";
import Navbar from "./Components/Common/Navbar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Components/Visual/Home";
import "bootswatch/dist/lux/bootstrap.min.css";
import { auth } from "./firebase-config";
import {setUser} from "./Redux/actions/register"

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
      {/* <Home /> */}
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} /> {/* AÑADIR PATH LOGIN*/}
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
