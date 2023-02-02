import './card.css';


function Card(props) {
    return (
    <div className="card-word">
    <h2>{props.word}</h2>
    <p><span>ТРАНСКРИПЦИЯ:</span> {props.transcription}</p>
    <p><span>ПЕРЕВОД:</span> {props.translation}</p>
    <p><span>ТЕМА:</span> {props.topic}</p>
    </div>
    
    );
}

export default Card;