export default ({ wordCount, update }) => {
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
          onChange={e => update(e.target.value)}
        />
      </p>
    </form>
  );
}