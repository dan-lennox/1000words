/**
 * Result Component.
 */
import { ReactElement } from 'react';
import { Answer } from '../types/Answer.type';

type Props = {
  results: Array<Answer>;
};

const FinalResult = ({ results }: Props): ReactElement => {
  const correctAnswerCount = results.reduce(function countCorrect(correct: number, result: Answer) {
    result.correct && correct++;
    return correct;
  }, 0);

  return (
    <div className="final-result">
      <h3>Done!</h3>
      <h4>{`${correctAnswerCount} / ${results.length}`}</h4>
    </div>
  );
};

FinalResult.defaultProps = {
  results: [],
};

export default FinalResult;
