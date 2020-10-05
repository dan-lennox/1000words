/**
 * Game Component.
 */
import React, { useState, useEffect, createContext, Fragment, ReactElement } from 'react';
// @todo: let's replace with the webcomponent version. The react library is now unsuported.
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
import croatian from '../../data/wordSets/croatian.json';
import type { Word as WordType } from '../types/Word.type';
import type { Answer } from '../types/Answer.type';
import { shuffleArray } from '../lib/helpers';
import WordCountSlider from './WordCountSlider';
import Word from './Word';
import AnswerForm from './AnswerForm';
import Progress from './Progress';
import Result from './Result';
import FinalResult from './FinalResult';

// @todo: Using global state is not very FP, avoid where possible.
// const GameState = createContext({
//   //words: []
// });

const Game = (): ReactElement => {
  const NONE = 0;
  const SHOW_QUESTION = 1;
  const SHOW_RESULT = 2;
  const FINISHED = 3;
  const defaultWordCount = 100;

  const [results, setResults] = useState<Array<Answer>>([]);
  const [words, setWords] = useState<Array<WordType>>([]);
  const [gameStatus, setGameStatus] = useState<number>(NONE);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    words.length === 0 && setWordsList(defaultWordCount);
  });

  const setWordsList = (count: number) => {
    setWords(shuffleArray(croatian.slice(0, count)));
  };

  const startGame = () => {
    setGameStatus(SHOW_QUESTION);
  };

  const resetGame = () => {
    setResults([]);
    setWordsList(words.length);
    setCurrentWordIndex(0);
    setGameStatus(NONE);
  };

  const nextWord = () => {
    const nextWordIndex = currentWordIndex + 1;
    if (nextWordIndex < words.length) {
      setGameStatus(SHOW_QUESTION);
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setGameStatus(FINISHED);
    }
  };

  const processAnswer = (answer: string) => {
    const result: Answer = {
      word: words[currentWordIndex],
      response: answer,
      correct: answer.toUpperCase() === words[currentWordIndex].english.toUpperCase(),
    };
    setResults([...results, result]);
    setGameStatus(SHOW_RESULT);
  };

  const numberOfWords = () => {
    return words.length > 0 ? words.length : defaultWordCount;
  };

  return (
    <div id="game" className="center">
      <h1>{numberOfWords()} words</h1>

      {gameStatus === NONE && (
        <Fragment>
          <WordCountSlider wordCount={numberOfWords()} update={setWordsList} />
          <Button id="start-game" unelevated={true} onClick={startGame} className="green">
            Start Game
          </Button>
        </Fragment>
      )}

      {gameStatus === SHOW_QUESTION && (
        <Fragment>
          <Progress current={currentWordIndex} total={words.length} />
          <Word word={words[currentWordIndex]} />

          <div className="row">
            <div className="col s6 offset-s3">
              <AnswerForm answerCallback={processAnswer} />

              <Button onClick={() => resetGame()} trailingIcon={<MaterialIcon icon="refresh" />}>
                Restart
              </Button>
              <Button id="skip" unelevated={true} className="mdc-theme--secondary" onClick={() => processAnswer('')}>
                Skip
              </Button>
            </div>
          </div>
        </Fragment>
      )}

      {gameStatus === SHOW_RESULT && <Result answer={results[currentWordIndex]} continueGameCallback={nextWord} />}

      {gameStatus === FINISHED && (
        <Fragment>
          <FinalResult results={results} />
          <Button id="play-again" unelevated={true} onClick={resetGame}>
            Play Again
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default Game;
