import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Landing from "./Components/Home/Landing";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Login from "./Components/Login"

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
