import React, { useState } from "react";

import Card from "./components/Сard/Сard";
import cards from "./utils/cards";
import "./components/styles/variables.css";

// import Array from "../../utils/cards";


function Main() {
    return (
              <div className="main">
          <h1>WORDLIST</h1>
          <div className="cards-map">
            {cards.map((card) => (
              <Card
                english={card.english}
                transcription={card.transcription}
                russian={card.russian}
                tags={card.tags}
                isSelected={card.isSelected}
              />
            ))}
          </div>
          </div>
          )}

          export default Main;