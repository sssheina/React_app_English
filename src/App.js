import React, { useState } from "react";
import { translation, TranslationContext } from "./context/TranslationContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CardLearn from "./components/CardLearn/CardLearn";
import Main from "./components/Main/Main";
import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home";
import Selection from "./components/Selection/Selection";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [words, setWords] = useState("english");

  return (
    <TranslationContext.Provider value={translation[words]}>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/words" element={<Main />} />
          <Route exact path="/game" element={<CardLearn />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Selection onWordSelect={setWords} />
        <Footer />
      </div>
    </TranslationContext.Provider>
  );
}

export default App;
