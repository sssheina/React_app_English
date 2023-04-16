import React, {useContext} from 'react';
import Card from '../Сard/Сard';
import { CollectionWordsContext } from '../../context/CollectionWordsContext';

import '../../assets/styles/variables.css';




function Main() {
  const {
    isLoading, dictionary
  } = useContext(CollectionWordsContext);
  console.log(dictionary.map((obj)=> (obj.russian)));
  return (
    <div className="main">
      <h1>WORDLIST</h1>
      <div className="cards-map">
        {isLoading && <div >Loading...</div>}
        {!isLoading && dictionary && dictionary.map((card) => <Card key={card.id}
          english={card.english}
          transcription={card.transcription}
          russian={card.russian}
          tags={card.tags}
          isSelected={card.isSelected} />)}
      </div>
    
    </div>
          
  );}

export default Main;