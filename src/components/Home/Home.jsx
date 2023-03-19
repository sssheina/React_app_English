import React from 'react';

import { motion } from 'framer-motion';

import './Home.css';

import picLogo from '../../assets/images/picLogo.png';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="homePage">
      <div className="homePage__wrap_left">
        <motion.h1
          className="homePage__title"
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
          WEB APPLICATION FOR LEARNING ENGLISH
        </motion.h1>
        <motion.div
          className="homePage__buttons"
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
          <motion.button
            className="button__words"
            whileHover={{
              scale: 1.2,
            }}
          >
            <Link to="/words" className="button__words-link">
              WORDS
            </Link>
          </motion.button>
          <motion.button
            className="button__game"
            whileHover={{
              scale: 1.2,
            }}
          >
            <Link to="/game" className="button__game-link">
              GAME
            </Link>
          </motion.button>
        </motion.div>
      </div>

      <div className="homePage__wrap_right">
        <motion.img
          className="picLogo"
          src={picLogo}
          alt="Logo"
          animate={{ rotate: 720 }}
          transition={{
            duration: 1,
            // delay: 0.5,
            repeatDelay: 0.5,
            repeatType: 'reverse',
            type: 'tween',
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}
export default Home;
