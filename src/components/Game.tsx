/**
 * Game Component.
 */
import React, { useState, useEffect, createContext, Fragment } from 'react';
import { shuffleArray } from '../lib/helpers';
import croatian from '../../data/wordSets/croatian.json';
import WordCountSlider from './WordCountSlider';
import { Word as WordType } from './Word/Word.type';
import Word from './Word/Word';
import AnswerForm from './AnswerForm';
import Progress from './Progress';
import Result from './Result';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

// const GameState = createContext({
//   //words: []
// });

const Game = () => {
  const NONE = 0
  const IN_PROGRESS = 1;
  const FINISHED = 2;
  const defaultWordCount = 100;

  const [words, setWords] = useState<Array<WordType>>([]);
  const [gameStatus, setGameStatus] = useState<number>(NONE);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    words.length === 0 && setWordsList(defaultWordCount);
  });


  const setWordsList = (count: number) => {
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

  const processAnswer = (answer: string) => {
    if (answer.toUpperCase() === words[currentWordIndex].english.toUpperCase()) {
      console.log('correct');
    }
    else {
      console.log('incorrect - Correct is: ', words[currentWordIndex].english)
    }
    nextWord();
  }

  return (
    <div id="game" className="center">
      <h1>{words.length} words</h1>

      { gameStatus === NONE &&
        <Fragment>
          <WordCountSlider wordCount={defaultWordCount} update={setWordsList} />
          <Button id="start-game" unelevated={true} onClick={startGame}>Start Game</Button>
        </Fragment>
      }

      {gameStatus === IN_PROGRESS &&
        <Fragment>
          <Progress current={currentWordIndex} total={words.length} />
          <Word word={words[currentWordIndex]} />

          <div className="row">
            <div className="col s6 offset-s3">
              <AnswerForm answerCallback={processAnswer} />
            </div>
          </div>

          <div className="row">
            <div className="col push-s2 s4">
              { currentWordIndex > 0 &&
                <Button onClick={resetGame} trailingIcon={<MaterialIcon icon='refresh' />}>Restart</Button>
              }
            </div>
            <div className="col push-s2 s4">
              <Button
                id="skip"
                unelevated={true}
                className="mdc-theme--secondary"
                onClick={nextWord}
              >
                Skip
              </Button>
            </div>
          </div>
        </Fragment>
      }

      { gameStatus === FINISHED &&
        <Fragment>
          <Result />
          <Button id="play-again" unelevated={true} onClick={resetGame}>Play Again</Button>
        </Fragment>
      }
    </div>
  );
}

export default Game;