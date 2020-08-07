/**
 * AnswerForm Component.
 */

import { Word as WordType } from './Word.type';
import { ReactElement } from 'react';

type Props = {
  word: WordType;
};

const Word = ({ word }: Props): ReactElement => {
  return <h3>{word.croatian}</h3>;
};
export default Word;
