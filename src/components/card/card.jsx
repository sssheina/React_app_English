import React from "react";

import "./card.css";

class Card extends React.Component {
  render() {
    const {
      english,
      transcription,
      russian,
      tags,
      } = this.props;

      let classCardButtons;
    if (isSelected) classCardButtons = "selected";

    return (
      <div className="card-word">
        <h2>{english}</h2>
        <p>
          <span></span> {transcription}
        </p>
        <p>
          <span></span> {russian}
        </p>
        <p>
          <span></span> {tags}
        </p>
        <div className={`card-buttons ${classCardButtons}`}>
          
  
  { isSelected && <div className="card-buttons"><button className="cardSaveButton" >S</button>, <button className="cardEditButton">E</button>, <button className="cardDeliteButton">D</button></div>}
          { !isSelected && <div className="card-buttons"><button className="cardEditButton">E</button>,<button className="cardDeliteButton" >D</button></div>}
        </div>
      </div>
    );
  }
}

export default Card;













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