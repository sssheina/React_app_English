import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './Game.css';
import '../../assets/styles/variables.css';

import Array from '../../utils/cards';

export default function Game() {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  let word = Array[index];

  const [counter, setCounter] = useState(1);

  const handleNextClick = () => {
    if (index + 1 >= Array.length) {
      setIndex(1);
    } else setIndex(index + 1);

    setNextClick(!clickedNext);
    handleCount();
  };

  const [clickedNext, setNextClick] = useState(false);

  const handlePrevClick = () => {
    if (index - 1 < 0) {
      setIndex(Array.length - 1);
    } else setIndex(index - 1);

    setPrevClick(!clickedPrev);
    handleCount2();
  };

  const [clickedPrev, setPrevClick] = useState(false);

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
      <motion.button
        className="game-prev"
        onClick={handlePrevClick}
        initial={{
          x: -30,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
      >
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

        <div className="game-counter">{counter}</div>
        <button className="game-button" onClick={handleChanges}>
          {pressed ? (
            <p className="game-translate">{word.russian}</p>
          ) : (
            <motion.p
              className="game-buttonName"
              whileHover={{
                scale: 1.1,
              }}
            >
              {' '}
              translate
            </motion.p>
          )}
        </button>
      </motion.div>

      <motion.button
        className="game-next"
        onClick={handleNextClick}
        initial={{
          x: 30,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        NEXT
      </motion.button>
    </div>
  );
}
