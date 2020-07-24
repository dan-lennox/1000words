import { useState, createContext } from 'react';
import croatian from '../../data/wordSets/croatian';
import WordCountSlider from './WordCountSlider';

const GameState = createContext({
  //words: []
});

export default () => {

  const [words, setWords] = useState([]);

  const defaultWordCount = 100;

  //console.log('croatian', croatian);

  const setWordsList = (count) => {
    setWords(croatian.slice(0, count));
  }

  return (
    <div id="game">
      <h1>{words.length || 100} words</h1>

      <WordCountSlider wordCount={defaultWordCount} update={setWordsList} />

      <div id="start">
        <button className="btn">Start Game</button>
      </div>
    </div>
  );
}