import React, { useState } from "react";

import "./Game.css";
import "../styles/variables.css";

export default function Game(props) {
  const [pressed, setPressed] = useState(false);
  const { english, transcription, russian } = props;

  const handleChange = () => {
    setPressed(!pressed);
  };
  let classButtonCard;
  if (pressed) classButtonCard = "selectedGame";
  return (
    <div className={`game-card ${classButtonCard}`}>
      <h2 className="game-english">{english}</h2>
      <p>
        <span className="game-span">{transcription}</span>
      </p>
      {/* <p>
          <span className="game-translate">{russian}</span> 
        </p> */}

      <button className="game-button" onClick={handleChange}>
        {pressed ? (
          <p className="game-translate">{russian}</p>
        ) : (
          <span className="game-buttonName">translate</span>
        )}

        {/* { !pressed && <div className="card-buttons"><button className="cardEditButton">🖋</button><button className="cardDeleteButton" >🗑</button></div>} */}
      </button>
    </div>
  );
}
