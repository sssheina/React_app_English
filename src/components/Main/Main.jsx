import React, { useContext } from 'react';

import { CollectionWordsContext } from '../../context/CollectionWordsContext';

import FormWords from '../FormWords/FormWords';
import Card from '../Сard/Сard';

import '../../assets/styles/variables.css';
import './Main.css';

function Main() {
  const { isLoading, dictionary } = useContext(CollectionWordsContext);

  return (
    <div className='main'>
      <h1>WORDLIST</h1>
      <FormWords />
      <div className='cards-map'>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          dictionary && 
          dictionary.map((card) => (
            <>
              <Card
                key={card.id}
                id={card.id}
                english={card.english}
                transcription={card.transcription}
                russian={card.russian}
                tags={card.tags}
                isSelected={card.isSelected}
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default Main;
