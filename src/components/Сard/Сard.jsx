import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import DELITE from '../../redux/DELITE';
import UPDATE from '../../redux/UPDATE';
import updateWordAndApi from '../../redux/store';

import './Card.css';
import '../../assets/styles/variables.css';

import back_pink from '../../assets/images/back_pink-pink.png';
import delete_pink from '../../assets/images/delete_pink.png';
import edit_pink from '../../assets/images/edit_pink.png';
import save_pink from '../../assets/images/save_pink-pink.png';

export default function Card(props) {
  const { id } = props;
  const [userId, SetuserId] = useState('');
  const [userEnglish, SetuserEnglish] = useState(props.english);
  const [userTranscription, SetuserTranscription] = useState(props.transcription);
  const [userRussian, SetuserRussian] = useState(props.russian);
  const [userTags, SetuserTags] = useState(props.tags);

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !userEnglish.trim() ||
      !userTranscription.trim() ||
      !userRussian.trim() ||
      !userTags.trim()
    ) {
      alert('Please fill in all fields');
      return;
    }
    const updatedWord = {
      id: userId,
      english: userEnglish,
      transcription: userTranscription,
      russian: userRussian,
      tags: userTags,
    };

    const response = await UPDATE(updatedWord);
    if (response) {
      dispatch(updateWordAndApi(response));
    }

    setIsEdit(false);
  };

  function onEditClick() {
    SetuserId(id);
    setIsEdit(!isEdit);
  }

  function onCancelClick() {
    clearForm();
    setIsEdit(!isEdit);
  }

  const clearForm = () => {
    SetuserId('');
    SetuserEnglish('');
    SetuserTranscription('');
    SetuserRussian('');
    SetuserTags('');
  };



  return (
    <motion.div className='card-word'
    onSubmit={handleSubmit}
    initial={{ opacity: 0, scale: 3 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
      
      {isEdit ? (
        <>
        <p className='card-item'>
            <input
              type='text'
              value={userId}
              name='id'
              className='card-input'
              onChange={(e) => SetuserId(e.target.value)}
            />
          </p>
          <p className='card-item'>
            <input
              type='text'
              value={userEnglish}
              name='english'
              className='card-input'
              onChange={(e) => SetuserEnglish(e.target.value)}
            />
          </p>
          <p className='card-item'>
            <input
              type='text'
              value={userTranscription}
              onChange={(e) => SetuserTranscription(e.target.value)}
              name='transcription'
              className='card-input'/>
          </p>
          <p className='card-item'>
            <input
              type='text'
              value={userRussian}
              onChange={(e) => SetuserRussian(e.target.value)}
              name='russian'
              className='card-input'/>
          </p>
          <p className='card-item'>
            <input
              type='text'
              value={userTags}
              onChange={(e) => SetuserTags(e.target.value)}
              name='tags'
              className='card-input'/>
          </p>
          <div className='card-buttons'>
            <div
              className='cardSaveButton'
              onClick={onSubmit}
            >
              <img src={save_pink}  className='save icon' alt='Save'></img>
            </div>

            <div className='cardCancelButton' onClick={onCancelClick}>
              <img src={back_pink} className='back icon' alt='back'></img>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className='card-item'>
            <span className='card-span'> {props.id}</span>
          </p>
          <h2>{props.english}</h2>
          <p className='card-item'>
            <span className='card-span'> {props.transcription}</span>
          </p>
          <p className='card-item'>
            <span className='card-span'>{props.russian}</span>
          </p>
          <p className='card-item'>
            <span className='card-span'>{props.tags}</span>
          </p>

          <div className='card-buttons'>
            <div className='cardEditButton' onClick={onEditClick}>
              <img src={edit_pink} className='edit icon' alt='edit'></img>
            </div>
            <div className='cardDeleteButton'onClick={() => DELITE(id)}>
              <img src={delete_pink} className='delete icon' alt='delete'></img>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
