import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Perfumes from "./components/Perfumes";
import Like from "./components/Like"
//routes je kao switch,a route case
//browserRouter sluzi kao omotac-sve rute moraju da buduu okviru njega
import { BrowserRouter, Routes, Route } from "react-router-dom";

//use state je za kuke
import { useState } from "react";

function App() {
  const [likedNum, setLikedNum] = useState(0);
  //inicijalno stanje prazan niz
  const [likedPerfumes, setLikedPerfumes] = useState([]);
  const [perfumes] = useState([
    {
      id: 1,
      title: "Gucci Guilty",
      img:"https://fraguru.com/mdimg/perfume/375x500.71377.jpg",
      description:  "Gornje note su Ljubičica, Mandora i Liči; srednje note su Šljiva, Tuberoza i Ylang-Ylang; bazne note su pačuli, Vanilija i vetiver.",
      amount: 0,
    },

    {
      id: 2, 
      title: "YSL Black Opium Illicit Green Woman Edp",
      img:"https://www.jasmin.rs/media/catalog/product/cache/c3885502dbfa89ce2d2028a3ae6c3079/b/l/black_opium_illicit_green_woman_edp_c.jpg",
      description:
      "Novi BLACK OPIUM EAU DE PARFUM ILLICIT GREEN sa cvetnim potpisom kafe koji izaziva zavisnost i energiju, prožet hrabrom mešavinom sočne zelene mandarine i kremaste smokve, oduševiće svaku ženu. ",
      amount: 0,
    },
     {
      id: 3,
      title: "One Jennifer Lopez", 
      img:"https://fraguru.com/mdimg/perfume/375x500.69243.jpg",
      description:
      "Gornje note su Bijela frezija, Cvet breskve i Ružičasti biber; srednje note su Clearwood, Kedar i jasmin; bazne note su Sandalovo drvo, Jelenja koža i Mahovina.",
      amount: 0,

    },
  ]);
  function refreshLiked() {
    let newPerfumes = perfumes.filter((p) => p.amount > 0);
    setLikedPerfumes(newPerfumes);
  }


  function addPerfume(title,id) {
     console.log("Lajkovan je parfem: " + title);
   setLikedNum(likedNum + 1);
   perfumes.forEach((p) => {
    if (p.id === id) {
      p.amount++;
    }
    console.log(p.amount);
  });
  refreshLiked();}

  function removePerfume(title,id) { 
    perfumes.forEach((p) => {
      if (p.id === id) {
   if (p.amount > 0) {
      console.log("Dislajkovan je parfem: " + title);
    setLikedNum(likedNum -1); 
        p.amount--;
      }else{alert("Broj lajkova je vec 0." );
   }
    }
      console.log(p.amount);
  });
        refreshLiked();}  
   


  return (
    <BrowserRouter className="App">
      <NavBar likedNum={likedNum}></NavBar>


       <Routes>
<Route path='/' element={<>
<h2 className='naslov1'>Izaberite ženski parfem godine 2022!</h2>
<Perfumes perfumes={perfumes} onAdd={addPerfume} onDelete={removePerfume}/>
</>} />
<Route path='/like' element={ <Like perfumes={likedPerfumes}/> }/>

      </Routes>


    </BrowserRouter>
  );
}
export default App;