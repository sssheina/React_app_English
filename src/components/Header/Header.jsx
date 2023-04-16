import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


import './Header.css';

import logo from '../../assets/images/logo_1.png';

function Header() {
  
  return (
    <div className='header'>
      <motion.div
        className='logoBlock'
        whileHover={{
          scale: 1.03,
        }}
      >
        <img className='logo' src={logo} alt='logo' />
        <Link to='/' className='logoA'>
          ENGLISH CARDS          
        </Link>
      </motion.div>
      <nav className='menu'>
        <ul className='menuList'>
          <motion.li
            className='menuItem'
            whileHover={{
              scale: 1.2,
            }}
          >
            <Link to='/' className='menuA'>
              HOME
            </Link>
          </motion.li>
          <motion.li
            className='menuItem'
            whileHover={{
              scale: 1.2,
            }}
          >
            <Link to='/words' className='menuA'>
              WORDS
            </Link>
          </motion.li>
          <motion.li
            className='menuItem'
            whileHover={{
              scale: 1.2,
            }}
          >
            <Link to='/game' className='menuA'>
              GAME
            </Link>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
