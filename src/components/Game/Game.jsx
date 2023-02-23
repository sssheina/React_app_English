import React, { useState, useEffect } from "react";

import "./Game.css";
import "../styles/variables.css";

import GetServices from "../Services/GetServices";
// import Card from "../components/Card/Card";

export default function Game() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const [arrId, setArrId] = useState([]);
  const [counter, setCounter] = useState(0);
  const [pressed, setPressed] = useState(false);
  // const { english, transcription, russian } = props;

  //2.Вызвали эту обработку в usEffect
  useEffect(() => {
    getWord();
  }, []);

  //1. Обработали метод класса и поместили результат запроса в состояние
  async function getWord() {
    const data = await GetServices.getWord();
    setPosts(data);
  }

  // useEffect(() => {
  //   setWords(item);
  //   const copyId = arrId.filter((id) => id == item);
  //   if (copyId < 1) {
  //     setPressed(false);
  //   }
  // }, [item]);

  const handleChanges = () => {
    setPressed(!pressed);
  };
  // let classButtonCard;
  // if (pressed) classButtonCard = "selectedGame";

  function handlePrevClick() {
    let result = index;
    if (result--) {
      setIndex(result);
      setPressed(false);
    } 
    // else {
    //   setIndex = 0;
    // }
  }

  function handleNextClick() {
    let result = index;
    result++;
    setIndex(result);
    setPressed(false);
  }

  const handleChange = () => {
    const id = posts[index].id;
    const copyIdTrue = arrId.filter((item) => item === id);
    if (copyIdTrue.length < 1) {
      setArrId([...arrId, id]);
    }
    setPressed(true);
    handleCount();
  };

  const handleCount = () => {
  setCounter(counter + 1);
  };


  return (
<>
        <button onClick={handlePrevClick}>PREV</button>
        <Game
          item={posts[index]}
          pressed={pressed}
          setPressed={setPressed}
          handleChange={handleChange}
          handleChanges={handleChanges}
          arrId={arrId}
        />
        <button onClick={handleNextClick}>NEXT</button>
        <div>{counter + "/" + posts.length}</div>
      
</>


    // <>
    // <button onClick={handlePrevClick}>PREV</button>
    // <div className={`game-card ${classButtonCard}`}>
    //   <h2 className="game-english">{english}</h2>
    //   <p>
    //     <span className="game-span">{transcription}</span>
    //   </p>
    //   {/* <p>
    //       <span className="game-translate">{russian}</span> 
    //     </p> */}

    //   <button className="game-button" onClick={handleChanges}>
    //     {pressed ? (
    //       <p className="game-translate">{russian}</p>
    //     ) : (
    //       <span className="game-buttonName">translate</span>
    //     )}

    //     {/* { !pressed && <div className="card-buttons"><button className="cardEditButton">🖋</button><button className="cardDeleteButton" >🗑</button></div>} */}
    //   </button>
    // </div>
    // <button onClick={handleNextClick}>NEXT</button></>
  );
}
