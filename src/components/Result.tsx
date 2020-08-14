/**
 * Result Component.
 */
import { ReactElement } from 'react';
import type { Answer } from '../types/Answer.type';

type Props = {
  answer: Answer;
  continueGameCallback: () => void;
};

// @todo: Simple css transitions in and out.

const Result = ({ answer, continueGameCallback }: Props): ReactElement => {
  setTimeout(continueGameCallback, answer?.correct ? 1000 : 1500);
  return (
    <div className="answer">
      <div className={answer?.correct ? 'green-text' : 'red-text'}>
        {answer?.correct ? 'Correct' : `Incorrect - Answer is "${answer.word.english}"`}
      </div>
    </div>
  );
};
export default Result;
