import React from 'react';
import { motion } from 'framer-motion';

import './NoMatch.css';

import img404 from '../../assets/images/404c.png';

function NoMatch() {
  return (
    <div className="divNoMatch"> 
      <motion.img 
        className="imgNoMatch" 
        src={img404} 
        alt="Error" 
        animate={{rotate: 360}}
        transition={{duration: 1,
          repeatDelay: 0.5,
          repeatType: 'reverse',
          type: 'tween',
          ease: 'linear'}}
      />
    </div>
  );

}
export default NoMatch;