import { Word as WordType } from './Word.type';

/**
 * Word Typescript Type
 */
export type Answer = {
  word: WordType;
  response: string;
  correct: boolean;
};
