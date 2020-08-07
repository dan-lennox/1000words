/**
 * AnswerForm Component.
 */
import { SyntheticEvent, useState, ChangeEvent } from 'react';

type Props = {
  answerCallback: (answer: string) => void
}

const AnswerForm = ({ answerCallback }: Props) => {

  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    answerCallback(answer);
    event.preventDefault();
  }

  const handleChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
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