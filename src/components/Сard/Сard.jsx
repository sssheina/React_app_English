import React, { useState } from "react";


import "./Card.css";
import "../styles/variables.css";

// import back_pink from "../images/back_pink-pink.png";
import back_pink from "../images/back_pink-pink.png";
import delete_pink from "../images/delete_pink.png";
import edit_pink from "../images/edit_pink.png";
import save_pink from "../images/save_pink-pink.png";

export default function Card(props) {
  // const [pressed, setPressed] = useState(false);
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
  // let classCardButtons;
  // if (pressed) classCardButtons = "selected";

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
            <div className="cardSaveButton">
              <img src={save_pink} className="save icon" alt="Save"></img>
            </div>
            <div className="cardCancelButton" onClick={onCancelClick}>
              <img src={back_pink} className="back icon" alt="back"></img>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>{english}</h2>
          <p className="card-item">
            <span className="card-span"> {transcription}</span>{" "}
          </p>
          <p className="card-item">
            <span className="card-span">{russian}</span>
          </p>
          <p className="card-item">
            <span className="card-span">{tags}</span>
          </p>

          <div className="card-buttons">
            <div className="cardEditButton" onClick={onEditClick}>
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

// export default function Card(props) {
//   const [pressed, setPressed] = useState(false);
//   const {
//     english,
//     transcription,
//     russian,
//     tags,
//     } = props;

//   const handleChange = () => {
//     setPressed(!pressed);
//   };
//   let classCardButtons;
//     if (pressed) classCardButtons = "selected";
//   return (

//     <div className={`card-word ${classCardButtons}`} >
//       <h2>{english}</h2>
//         <p className='card-item'>
//           <span className='card-span'> {transcription}</span>
//         </p>
//         <p className='card-item'>
//           <span className='card-span'>{russian}</span>
//         </p>
//         <p className='card-item'>
//           <span className='card-span'>{tags}</span>
//         </p>
//         {/* <div className="card-buttons">{ pressed? <><button className="cardSaveButton" onClick={handleChange} >✔</button><button className="cardCancelButton" onClick={handleChange}>🔙</button></> : <><button className="cardEditButton" onClick={handleChange}>🖋</button> <button className="cardDeleteButton">🗑</button></>}  */}

//         <div className="card-buttons">{ pressed? <><div className="cardSaveButton" onClick={handleChange} ><img src={save_pink} className="save icon" alt="Save"></img></div><div className="cardCancelButton" onClick={handleChange}><img src={back_pink} className="back icon" alt="back"></img></div></> : <><div className="cardEditButton" onClick={handleChange}><img src={edit_pink} className="edit icon" alt="edit"></img></div> <div className="cardDeleteButton"><img src={delete_pink} className="delete icon" alt="delete"></img></div></>}

//           {/* { !pressed && <div className="card-buttons"><button className="cardEditButton">🖋</button><button className="cardDeleteButton" >🗑</button></div>} */}
//         </div>
//       </div>
//   );
// }

// import { useState } from "react";
// import styles from "../RowTable/row.module.scss";

// export default function Card(props) {
//   const { english, transcription, russian, tags } = props;
//   const [isEdit, setIsEdit] = useState(false);
//   const [inputText, setInputText] = useState(props);

//   function onEditClick() {
//     setIsEdit(!isEdit);
//   }

//   function onCancelClick() {
//     setInputText(props);
//     setIsEdit(!isEdit);
//   }

//   return (
//     <table>
//       {isEdit ? (
//         <tr className={styles.row}>
//           <td>
//             <input type="text" value={inputText.english} name={english} />
//           </td>
//           <td>
//             <input
//               type="text"
//               value={inputText.transcription}
//               name={transcription}
//             />
//           </td>
//           <td>
//             <input type="text" value={inputText.russian} name={russian} />
//           </td>
//           <td>
//             <input type="text" value={inputText.tags} name={tags} />
//           </td>
//           <td>
//             <button className={styles.save__btn}>Save</button>
//             <button onClick={onCancelClick} className={styles.cancel__btn}>
//               Exit
//             </button>
//           </td>
//         </tr>
//       ) : (
//         <tr className={styles.row}>
//           <td>{english}</td>
//           <td>{transcription}</td>
//           <td>{russian}</td>
//           <td>{tags}</td>
//           <td>
//             <button onClick={onEditClick} className={styles.edit__btn}>
//               Edit
//             </button>
//             <button className={styles.del__btn}>Delete</button>
//           </td>
//         </tr>
//       )}
//     </table>
//   );
// }

// class Card extends React.Component {
//   render() {
//     const {
//       english,
//       transcription,
//       russian,
//       tags,
//       isSelected,
//       } = this.props;

//       let classCardButtons;
//     if (isSelected) classCardButtons = "selected";

//     return (
//       <div className= {`card-word ${classCardButtons}`}>
//         <h2>{english}</h2>
//         <p>
//           <span></span> {transcription}
//         </p>
//         <p>
//           <span></span> {russian}
//         </p>
//         <p>
//           <span></span> {tags}
//         </p>
//         <div className="card-buttons">

//   { isSelected && <div className="card-buttons"><button className="cardSaveButton" >✔</button> <button className="cardEditButton">🖋</button> <button className="cardDeleteButton">🗑</button></div>}
//           { !isSelected && <div className="card-buttons"><button className="cardEditButton">🖋</button><button className="cardDeleteButton" >🗑</button></div>}
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;

// function Card(props) {

//   let classCardButtons;
//     if (isSelected) classCardButtons = "selected";

//   return (
//     <div className="card-word">
//       <h2>{props.english}</h2>
//       <p>
//         <span></span> {props.transcription}
//       </p>
//       <p>
//         <span></span> {props.russian}
//       </p>
//       <p>
//         <span></span> {props.tags}
//       </p>
//       <div className={`card-buttons ${classCardButtons}`}>

// { isSelected && <div className="card-buttons"><button className="cardSaveButton" >S</button>, <button className="cardEditButton" >E</button>, <button className="cardDeliteButton">D</button></div>}
//         { !isSelected && <div className="card-buttons"><button className="cardEditButton">E</button>,<button className="cardDeliteButton" >D</button></div>}
//       </div>
//     </div>
//   );
// }
