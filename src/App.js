import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import Landing from "./Components/Home/Landing";
// import Login from "./Components/Login"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
