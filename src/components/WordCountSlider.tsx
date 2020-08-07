/**
 * WordCountSlider Component.
 */

type Props = {
  wordCount: number,
  update: (count: number) => void
}

const WordCountSlider = ({ wordCount, update }: Props) => {
  return (
    <form action="#">
      <p className="range-field">
        <input
          type="range"
          className="word-count-range"
          min="50"
          max="1000"
          step="50"
          defaultValue={wordCount}
          onChange={e => update(parseInt(e.target.value))}
        />
      </p>
    </form>
  );
}
export default WordCountSlider;