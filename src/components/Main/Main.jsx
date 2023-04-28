// import React, {useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getWords } from '../../redux/action';
import { POST_ACTION } from '../../redux/action';
import GET from '../../redux/GET';

import Card from '../Сard/Сard';
// import { CollectionWordsContext } from '../../context/CollectionWordsContext';

import '../../assets/styles/variables.css';
import FormWords from '../FormWords/FormWords';



function Main() {

  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  // const {
  //   isLoading, dictionary
  // } = useContext(CollectionWordsContext);

  useEffect(() => {
    async function get() {
      const data = await GET.getWords();
      dispatch(getWords(data));
    }
    get();
  }, [dispatch, posts]);

  const handleNewWord = (newWord) => {
    dispatch(POST_ACTION(newWord));
  };


  return (
    <div className='main'>
      <h1>WORDLIST</h1>
      <FormWords onNewWord={handleNewWord} />
      <div className='cards-map'>
      {posts.map((card, i) => ( 
          
          <Card 
            key={card.id}
            id={card.id}
            english={card.english}
            transcription={card.transcription}
            russian={card.russian}
            tags={card.tags}
            isSelected={card.isSelected} />))}
      </div>
    
    </div>
          
  );}

export default Main;