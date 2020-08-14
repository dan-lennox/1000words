/**
 * WordCountSlider Component.
 */
import { ReactElement } from 'react';

type Props = {
  wordCount: number;
  update: (count: number) => void;
};

const WordCountSlider = ({ wordCount, update }: Props): ReactElement => {
  return (
    <form action="#">
      <p className="range-field">
        <input
          type="range"
          className="word-count-range"
          min="20"
          max="1000"
          step="20"
          defaultValue={wordCount}
          onChange={(e) => update(parseInt(e.target.value))}
        />
      </p>
    </form>
  );
};
export default WordCountSlider;
