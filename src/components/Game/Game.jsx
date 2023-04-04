import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import './Game.css';
import '../../assets/styles/variables.css';

import Array from '../../utils/cards';

export default function Game(props) {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [counter, setCounter] = useState(1);
  const [viewCard, setViewCard] = useState(false);

  let word = Array[index];

  const handleNextClick = () => {
    if (index + 1 >= Array.length) {
      setIndex(1);
    } else setIndex(index + 1);

    setNextClick(!clickedNext);

    setViewCard(false);
    setPressed(false);
    handleCount();
  };

  const [clickedNext, setNextClick] = useState(false);

  const handlePrevClick = () => {
    if (index - 1 < 0) {
      setIndex(Array.length - 1);
    } else setIndex(index - 1);

    setPrevClick(!clickedPrev);

    setViewCard(false);
    setPressed(false);
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

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleViewCard = () => {
    if (!viewCard) {
      setViewCard(true);
      props.onLearned();
    }
  };

  return (
    <div className="gameMain">
      <button className="gameLearn" onClick={handleViewCard}>
        Learned word
      </button>

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
          <button className="game-button" onClick={handleChanges} >
            {pressed ? (
              <div className="game-translate">{word.russian}</div>
            ) : (
              <motion.button
                className="game-buttonName"
                ref={ref}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {' '}
                translate
              </motion.button>
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
    </div>
  );
}
