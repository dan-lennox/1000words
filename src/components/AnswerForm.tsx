/**
 * AnswerForm Component.
 */
import { useState } from 'react';

const AnswerForm = ({ answerCallback }) => {

  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    answerCallback(answer);
    event.preventDefault();
  }

  const handleChange = ({ target: { value }}) => {
    setAnswer(value);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          type="text"
          name="answer"
          id="answer"
          className="center"
          aria-label="Answer"
          value={answer}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
export default AnswerForm;