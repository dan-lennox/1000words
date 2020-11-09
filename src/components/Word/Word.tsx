/**
 * AnswerForm Component.
 */

import { Word as WordType } from '../../types/Word.type';
import { ReactElement } from 'react';
import styles from './word.module.scss';

type Props = {
  word: WordType;
};

const Word = ({ word }: Props): ReactElement => {
  return <h3 className={styles.word}>{word.croatian}</h3>;
};
export default Word;
