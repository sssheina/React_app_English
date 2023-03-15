import React from "react";
// import Card from "./components/Сard/Сard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Main from "./Main";
import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
      <Header />

      <Routes>
      <Route path="/words" element={<Main />} />
      <Route path="/game" element={<Game />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
      </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
