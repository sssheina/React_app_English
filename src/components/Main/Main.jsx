import React from "react";
import Card from "../Сard/Сard";
import cards from "../../utils/cards";
import "../../assets/styles/variables.css";




function Main() {
    return (
              <div className="main">
          <h1>WORDLIST</h1>
          <div className="cards-map">
            {cards.map((card) => (
              <Card
                key={card.id}
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