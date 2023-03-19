import React, { useState } from 'react';
import { motion } from 'framer-motion';


import './Card.css';
import '../../assets/styles/variables.css';


import back_pink from '../../assets/images/back_pink-pink.png';
import delete_pink from '../../assets/images/delete_pink.png';
import edit_pink from '../../assets/images/edit_pink.png';
import save_pink from '../../assets/images/save_pink-pink.png';

export default function Card(props) {
  
  const { english, transcription, russian, tags } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(props);

  function onEditClick() {
    setIsEdit(!isEdit);
  }

  function onCancelClick() {
    setInputText(props);
    setIsEdit(!isEdit);
  }

  return (
    <div className="card-word">
      {isEdit ? (
        <>
          <p className="card-item">
            <input type="text" value={inputText.english} name={english} className="card-input"/>
          </p>
          <p className="card-item">
            <input
              type="text"
              value={inputText.transcription}
              name={transcription} className="card-input"
            />
          </p>
          <p className="card-item">
            <input type="text" value={inputText.russian} name={russian} className="card-input" />
          </p>
          <p className="card-item">
            <input type="text" value={inputText.tags} name={tags} className="card-input"/>
          </p>
          <div className="card-buttons">
            <motion.div className="cardSaveButton" whileHover={{
              scale: 1.1,
            }}>
              <img src={save_pink} className="save icon" alt="Save"></img>
            </motion.div>

            <motion.div className="cardCancelButton" onClick={onCancelClick} whileHover={{
              scale: 1.1,
            }}>
              <img src={back_pink} className="back icon" alt="back"></img>
            </motion.div>
          </div>
        </>
      ) : (
        <>
          <h2>{english}</h2>
          <p className="card-item">
            <span className="card-span"> {transcription}</span>{' '}
          </p>
          <p className="card-item">
            <span className="card-span">{russian}</span>
          </p>
          <p className="card-item">
            <span className="card-span">{tags}</span>
          </p>

          <div className="card-buttons">
            <motion.div className="cardEditButton" onClick={onEditClick} whileHover={{
              scale: 1.1,
            }}>
              <img src={edit_pink} className="edit icon" alt="edit"></img>
            </motion.div>
            <motion.div className="cardDeleteButton" whileHover={{
              scale: 1.1,
            }}>
              <img src={delete_pink} className="delete icon" alt="delete"></img>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}

