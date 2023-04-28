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

    // __________________________

//   const handleChangeInput = (event) => {
//     setInputText({
//       ...inputText,
//       [event.target.name]: event.target.value,
//     });

//     if (event.target.value.match(/[0-9]/)) {
//       alert('Пожалуйста, вводите только буквы');
//     } else if (event.target.value === '') {
//       alert('Пожалуйста, заполните все поля');
//     }
//   };

//   useEffect(() => {
//     if (
//       inputText.english === '' ||
//       inputText.transcription === '' ||
//       inputText.russian === '' ||
//       inputText.tags === ''
//     ) {
//       setIsEmpty(true);
//     } else {
//       setIsEmpty(false);
//     }
//   }, [inputText]);

//   function onSubmit() {
//     if (
//       inputText.english === '' ||
//       inputText.transcription === '' ||
//       inputText.russian === '' ||
//       inputText.tags === ''
//     ) {
//       alert('Error: Please fill in all the fields');
//     } else {
//       console.log('Form parameters:', inputText);
//       // addWord(inputText);
//       // setIsEmpty();
//       addWord(inputText);
//       setInputText({});
//       setIsEmpty(true);
//     }
//   }

//   const clearForm = () => {
//     setIsEmpty();
//     setIsEmpty(true);
//   };

  return (
    <motion.div
      className='inputContainer'
      initial={{ opacity: 0, scale: 3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <span className='inputLable'> ADD WORD:</span>

      <input
        // className={`inputEnter ${inputText.english}`}
        className='inputEnter'
        type='text'
        placeholder='english'
        name='english'
        value={inputText.english || ''}
        onChange={(e) => SetuserEnglish(e.target.value)}
      ></input>
      <input
        // className={`inputEnter${inputText.transcription}`}
        className='inputEnter'
        type='text'
        placeholder='transcription'
        name='transcription'
        value={inputText.transcription || ''}
        onChange={(e) => SetuserTranscription(e.target.value)}
      ></input>
      <input
        // className={`inputEnter ${inputText.russian}`}
        className='inputEnter'
        type='text'
        placeholder='russian'
        name='russian'
        value={inputText.russian || ''}
        onChange={(e) => SetuserRussian(e.target.value)}
      ></input>
      <input
        // className={`inputEnter ${inputText.tags}`}
        className='inputEnter'
        type='text'
        placeholder='tags'
        name='tags'
        value={inputText.tags || ''}
        onChange={(e) => SetuserTags(e.target.value)}
      ></input>

      <div className='card-buttons'>
        <div className='inputSaveButton'>
          <img
            src={save_pink}
            className={`inputIcon icon ${isEmpty ? 'disabled' : ''}`}
            disabled={isEmpty}
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
