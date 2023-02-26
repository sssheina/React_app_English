import React, { useState } from "react";

import "./Game.css";
import "../styles/variables.css";

// import GetServices from "../Services/GetServices";
// import Card from "../components/Card/Card";
import Array from "../../utils/cards"

export default function Game() {
  
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  let word = Array[index];
  // const [posts, setPosts] = useState([]);
  // const [arrId, setArrId] = useState([]);
  // const [counter, setCounter] = useState(0);
  // const { english, transcription, russian } = props;

  //2.Вызвали эту обработку в usEffect
  // useEffect(() => {
  //   getWord();
  // }, []);

  //1. Обработали метод класса и поместили результат запроса в состояние
  // async function getWord() {
  //   const data = await GetServices.getWord();
  //   setPosts(data);
  // }

  // useEffect(() => {
  //   setWords(item);
  //   const copyId = arrId.filter((id) => id == item);
  //   if (copyId < 1) {
  //     setPressed(false);
  //   }
  // }, [item]);

 

  // let classButtonCard;
  // if (pressed) classButtonCard = "selectedGame";

  //NEXT card
  const handleNextClick = () =>  {
    if (index + 1 >= Array.length) {
      setIndex(0);
      } 
    else setIndex(index + 1);
   
    setNextClick(!clickedNext);
  };

  const [clickedNext, setNextClick] = useState(false);

  let pressedNextArrow;
  if (clickedNext) {
    pressedNextArrow = "pressedNextArrow";
  }
  

  //Prev card
  

  const handlePrevClick = () =>  {
    
    if (index - 1 < 0) {
      setIndex(Array.length - 1);
      } 
    else setIndex(index - 1);
    
    setPrevClick(!clickedPrev);
  };

  const [clickedPrev, setPrevClick] = useState(false);

  let pressedPrevArrow;
  if (clickedPrev) {
    pressedPrevArrow = 'pressedPrevArrow';
  }

  // const handleChange = () => {
  //   const id = posts[index].id;
  //   const copyIdTrue = arrId.filter((item) => item === id);
  //   if (copyIdTrue.length < 1) {
  //     setArrId([...arrId, id]);
  //   }
  //   setPressed(true);
  //   handleCount();
  // };

  // const handleCount = () => {
  // setCounter(counter + 1);
  // };

  const handleChanges = () => {
    setPressed(!pressed);
  };


  return (
    
      <div className='game'>
    <button className="game-prev" onClick={handlePrevClick}>PREV</button>

    <div className='game-card' {...index}>
      <h2 className="game-english">{word.english}</h2>
      <p>
        <span className="game-span">{word.transcription}</span>
      </p>
      {/* <p>
          <span className="game-translate">{russian}</span> 
        </p> */}

      <button className="game-button" onClick={handleChanges}>
        {pressed ? (
          <p className="game-translate">{word.russian}</p>
        ) : (
          <span className="game-buttonName">translate</span>
        )}

        {/* { !pressed && <div className="card-buttons"><button className="cardEditButton">🖋</button><button className="cardDeleteButton" >🗑</button></div>} */}
      </button>
    </div>
    
    <button className="game-next" onClick={handleNextClick}>NEXT</button>
    </div>
  );
}








