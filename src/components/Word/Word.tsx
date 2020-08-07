/**
 * AnswerForm Component.
 */

export type WordType = {
  english: string,
  croatian: string
}

type Props = {
  word: WordType
}

const Word = ({ word }: Props) => {
  return (
    <h3>{word.croatian}</h3>
  );
}
export default Word;