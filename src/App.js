import Card from './components/card/card';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import cards from './utils/cards';

import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      <h1>WORDLIST</h1>
      <div className="cards-map">
      {
      cards.map((card) => 
      <Card english={card.english} transcription={card.transcription} russian={card.russian} tags={card.tags} isSelected={card.isSelected} />
      )
      }
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
