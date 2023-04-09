import React, { useState, useEffect } from 'react';

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
  const [isEmpty, setIsEmpty] = useState(true);

  const onChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      inputText.english === '' ||
      inputText.transcription === '' ||
      inputText.russian === '' ||
      inputText.tags === ''
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [inputText]);

  const errorClass = (value) => {
    return typeof value === 'string' && value.trim()  === '' ? 'error' : '';
  };
  
  function onEditClick() {
    setIsEdit(!isEdit);
  }

  function onCancelClick() {
    setInputText(props);
    setIsEdit(!isEdit);
  }

  //вывести в консоль сообщение с параметрами формы и закрыть режим редактирования
  function onSaveClick() {
    if (
      inputText.english === '' ||
      inputText.transcription === '' ||
      inputText.russian === '' ||
      inputText.tags === ''
    ) {
      alert('Error: Please fill in all the fields');
    } else {
      console.log('Form parameters:', inputText);
      setIsEdit(false); // закрывает режим редактирования
    }
  }

  return (
    <div className="card-word">
      {isEdit ? (
        <>
          <p className="card-item">
            <input
              type="text"
              value={inputText.english}
              name="english"
              className={`card-input ${errorClass(inputText.english)}`}
              onChange={onChange}
            />
          </p>
          <p className="card-item">
            <input
              type="text"
              value={inputText.transcription}
              name="transcription"
              className={`card-input ${errorClass(inputText.transcription)}`}
              onChange={onChange}
            />
          </p>
          <p className="card-item">
            <input
              type="text"
              value={inputText.russian}
              name="russian"
              className={`card-input ${errorClass(inputText.russian)}`}
              onChange={onChange}
            />
          </p>
          <p className="card-item">
            <input
              type="text"
              value={inputText.tags}
              name="tags"
              className={`card-input ${errorClass(inputText.tags)}`}
              onChange={onChange}
            />
          </p>
          <div className="card-buttons">
            <div
              className={`cardSaveButton ${isEmpty ? 'disabled' : ''}`}
              onClick={onSaveClick}
            >
              <img src={save_pink} className="save icon" alt="Save"></img>
            </div>

            <div
              className="cardCancelButton"
              onClick={onCancelClick}
            >
              <img src={back_pink} className="back icon" alt="back"></img>
            </div>
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
            <div
              className="cardEditButton"
              onClick={onEditClick}
            >
              <img src={edit_pink} className="edit icon" alt="edit"></img>
            </div>
            <div className="cardDeleteButton">
              <img src={delete_pink} className="delete icon" alt="delete"></img>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
