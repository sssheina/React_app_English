import React from "react";
// import Card from "./components/Сard/Сard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Main from "./components/Main/Main";
import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home";

import {
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";


function App() {
  return (
    
      <div className="App">
      <Header />

      <Routes>
      <Route exact path="/words" element={<Main />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
