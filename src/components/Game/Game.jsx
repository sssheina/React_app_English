import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Game.css";
import "../../assets/styles/variables.css";

// import GetServices from "../Services/GetServices";
// import Card from "../components/Card/Card";
import Array from "../../utils/cards";

export default function Game() {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  let word = Array[index];
  // const [posts, setPosts] = useState([]);
  // const [arrId, setArrId] = useState([]);
  const [counter, setCounter] = useState(1);
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
  const handleNextClick = () => {
    if (index + 1 >= Array.length) {
      setIndex(1);
    } else setIndex(index + 1);

    setNextClick(!clickedNext);
    handleCount();
  };

  const [clickedNext, setNextClick] = useState(false);

  // let pressedNextArrow;
  // if (clickedNext) {
  //   pressedNextArrow = "pressedNextArrow";
  // }

  //Prev card

  const handlePrevClick = () => {
    if (index - 1 < 0) {
      setIndex(Array.length - 1);
    } else setIndex(index - 1);

    setPrevClick(!clickedPrev);
    handleCount2();
  };

  const [clickedPrev, setPrevClick] = useState(false);

  // let pressedPrevArrow;
  // if (clickedPrev) {
  //   pressedPrevArrow = "pressedPrevArrow";
  // }

  // const handleChange = () => {
  //   const id = posts[index].id;
  //   const copyIdTrue = arrId.filter((item) => item === id);
  //   if (copyIdTrue.length < 1) {
  //     setArrId([...arrId, id]);
  //   }
  //   setPressed(true);
  //   handleCount();
  // };

  const handleCount = () => {
    setCounter(counter + 1);
  };

  const handleCount2 = () => {
    setCounter(counter - 1);
  };

  const handleChanges = () => {
    setPressed(!pressed);
  };

  return (
    <div className="game">
      <motion.button className="game-prev" onClick={handlePrevClick} 
      initial={{
          x:-30,
          opacity:0,
        }}
        animate={{
          x:0,
          opacity:1,
        }}
        transition={{
          delay: 0.5,
          }}>
        PREV
      </motion.button>

      <motion.div
        className="game-card"
        {...index}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        
        <h2 className="game-english">{word.english}</h2>
        <p>
          <span className="game-span">{word.transcription}</span>
        </p>
        {/* <p>
          <span className="game-translate">{russian}</span> 
        </p> */}
        <div className="game-counter">{counter}</div>
        <button className="game-button" onClick={handleChanges}>
          {pressed ? (
            <p className="game-translate">{word.russian}</p>
          ) : (
            <p className="game-buttonName"> translate</p>
          )}

          {/* { !pressed && <div className="card-buttons"><button className="cardEditButton">🖋</button><button className="cardDeleteButton" >🗑</button></div>} */}
        </button>
        
      </motion.div>

      <motion.button className="game-next" onClick={handleNextClick} initial={{
          x:30,
          opacity:0,
        }}
        animate={{
          x:0,
          opacity:1,
        }}
        transition={{
          delay: 0.5,
          }}>
        NEXT
      </motion.button>
    </div>
  );
}
