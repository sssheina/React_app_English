import './App.css';
import Card from './components/card';

const cards = [
{
  word: "word",
  transcription: "|wɜːrd|",
  translation: "слово",
  topic: "basic",
},
{
  word: "reword",
  transcription: "|riːˈwɜːd|",
  translation: "выражать другими словами, менять формулировку, повторять",
  topic: "basic",
},
{
  word: "business",
  transcription: "|ˈbɪznəs|",
  translation: "бизнес, дело, фирма, занятие, деловой, практический",
  topic: "basic",
}

];



function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <div className="main">
      <h1>СЛОВАРЬ</h1>
      <div className="cards-map">
      {
      cards.map((card) => 
      <Card word={card.word} transcription={card.transcription} translation={card.translation} topic={card.topic} />
      )
      }
      </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
