/**
 * AnswerForm Component.
 */

import { Word as WordType } from './Word.type';

type Props = {
  word: WordType
}

const Word = ({ word }: Props) => {
  return (
    <h3>{word.croatian}</h3>
  );
}
export default Word;
