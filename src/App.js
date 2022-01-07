import { 
  Routes,
  Route,
  Link 
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SearchBar from './Components/Home/SearchBar';
// import Landing from "./Components/Home/Landing";
import Navbar from "./Components/Common/Navbar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Components/Visual/Home";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Login />} /> {/* AÑADIR PATH LOGIN*/}
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
