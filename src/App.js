import './App.css';
import bottomImg from './images/bottom.png';

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { instance } from "./agent"

import Header from './components/Header';
import Tip from './components/Tip';
import Resume from './views/Resume';

function App() {

  useEffect (()=>{
    let getData = () => {
      instance.get("/polls")
      .then(res => console.log(res))
      .catch(err => console.log(err.toJSON()))
    }
    getData();
  },[])


  return (
    <div className="App">
      <Header />
      <Tip />
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
      <img src={bottomImg} alt="" className="bottomImg" />
    </div>
  );
}

export default App;
