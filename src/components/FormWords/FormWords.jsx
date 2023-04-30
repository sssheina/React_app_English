import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import POST from '../../redux/POST';
import { POST_ACTION } from '../../redux/action.js';

import { motion } from 'framer-motion';

import './FormWords.css';

import save_pink from '../../assets/images/save_pink-pink.png';
import delete_pink from '../../assets/images/delete_pink.png';

export default function FormWords() {
  const [userEnglish, SetuserEnglish] = useState('');
  const [userTranscription, SetuserTranscription] = useState('');
  const [userRussian, SetuserRussian] = useState('');
  const [userTags, SetuserTags] = useState('');

  const dispatch = useDispatch();




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEnglish || !userTranscription || !userRussian || !userTags) {
      alert('Please fill in all fields');
      return;
    }
    const newWord = {
      english: userEnglish,
      transcription: userTranscription,
      russian: userRussian,
      tags: userTags,
    };

    const response = await POST(newWord);

    if (response) {
      dispatch(POST_ACTION(response));
    }
    clearForm();
  };

    const clearForm = () => {
        SetuserEnglish('');
        SetuserTranscription('');
        SetuserRussian('');
        SetuserTags('');
      };

    

  return (
    <motion.div
      className='inputContainer'
      initial={{ opacity: 0, scale: 3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <span className='inputLable'> ADD WORD:</span>

      <input
        className='inputEnter'
        type='text'
        placeholder='english'
        name='english'
        value={userEnglish || ''}
        onChange={(e) => SetuserEnglish(e.target.value)}
      ></input>
      <input
        className='inputEnter'
        type='text'
        placeholder='transcription'
        name='transcription'
        value={userTranscription || ''}
        onChange={(e) => SetuserTranscription(e.target.value)}
      ></input>
      <input
        className='inputEnter'
        type='text'
        placeholder='russian'
        name='russian'
        value={userRussian || ''}
        onChange={(e) => SetuserRussian(e.target.value)}
      ></input>
      <input
        className='inputEnter'
        type='text'
        placeholder='tags'
        name='tags'
        value={userTags || ''}
        onChange={(e) => SetuserTags(e.target.value)}
      ></input>

      <div className='card-buttons'>
        <div className='inputSaveButton'>
          <img
            src={save_pink}
            className='inputIcon icon'
            alt='Save'
            onClick={handleSubmit}
          ></img>
        </div>
        <div className='inputDeleteButton'>
          <img
            src={delete_pink}
            className='inputIcon icon'
            alt='Delete'
            onClick={clearForm}
          ></img>
        </div>
      </div>
    </motion.div>
  );
}
