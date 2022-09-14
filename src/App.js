import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Perfumes from "./components/Perfumes";

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <h2 className='naslov1'>Izaberite ženski parfem godine 2022!</h2>
      <Perfumes/>
    </div>
  );
}
