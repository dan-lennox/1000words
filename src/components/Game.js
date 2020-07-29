/**
 * Game Component.
 */
import React, { useState, useEffect, createContext, Fragment } from 'react';
import { shuffleArray } from '../lib/helpers';
import croatian from '../../data/wordSets/croatian';
import WordCountSlider from './WordCountSlider';
import Word from './Word';
import Progress from './Progress';
import Result from './Result';

// const GameState = createContext({
//   //words: []
// });

const Game = () => {
  const NONE = 0
  const IN_PROGRESS = 1;
  const FINISHED = 2;
  const defaultWordCount = 100;

  const [words, setWords] = useState([]);

  const [gameStatus, setGameStatus] = useState(NONE);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    words.length === 0 && setWordsList(defaultWordCount);
  });


  const setWordsList = (count) => {
    setWords(shuffleArray(croatian.slice(0, count)));
  }

  const startGame = () => {
    setGameStatus(IN_PROGRESS);
  }

  const resetGame = () => {
    setCurrentWordIndex(0);
    startGame();
  }

  const nextWord = () => {
    const nextWordIndex = currentWordIndex + 1;
    if (nextWordIndex < words.length) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
    else {
      setGameStatus(FINISHED);
    }
  }

  return (
    <div id="game" className="center">
      <h1>{words.length} words</h1>

      { gameStatus === NONE &&
        <Fragment>
          <WordCountSlider wordCount={defaultWordCount} update={setWordsList} />
          <button id="start-game" className="btn" onClick={startGame}>Start Game</button>
        </Fragment>
      }

      {gameStatus === IN_PROGRESS &&
        <Fragment>
          <Progress current={currentWordIndex} total={words.length} />
          <Word word={words[currentWordIndex]}/>
          {/* todo: Input. */}
          <button id="skip" className="btn red" onClick={nextWord}>Skip</button>
        </Fragment>
      }

      { gameStatus === FINISHED &&
        <Fragment>
          <Result />
          <button id="play-again" className="btn" onClick={resetGame}>Play Again</button>
        </Fragment>
      }
    </div>
  );
}

export default Game;