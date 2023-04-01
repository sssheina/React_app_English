import { useState } from 'react';
import Game from '../Game/Game';

import './CardLearn.css';
import '../../assets/styles/variables.css';

function CardLearn() {
  const [learnWords, setLearnWords] = useState(1);

  const handleLearned = () => {
    setLearnWords(learnWords + 1);
  };
  return (
    <>
      <div className="cardLearn">YOU LEARNED: {learnWords} WORDS</div>
      <Game onLearned={handleLearned} />
    </>
  );
}

export default CardLearn;
