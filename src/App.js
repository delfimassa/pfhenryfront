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
import Footer from "./Components/Common/Footer";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <div className="App">
            <Navbar />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Login />} /> {/* AÑADIR PATH LOGIN*/}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      <SearchBar />
    </div>
  );
}

export default App;
