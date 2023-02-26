import Card from "./components/Сard/Сard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

import cards from "./utils/cards";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1>WORDLIST</h1>
        <div className="cards-map">
          {cards.map((card) => (
            <Card
              english={card.english}
              transcription={card.transcription}
              russian={card.russian}
              tags={card.tags}
              isSelected={card.isSelected}
            />
          ))}
        </div>
        <Game/>
        {/* <div className="game-map">

          {cards.map((game) => (
            <Game
              english={game.english}
              transcription={game.transcription}
              russian={game.russian}
            />
          ))}
          
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
