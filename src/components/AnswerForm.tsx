/**
 * AnswerForm Component.
 */
import { SyntheticEvent, useState, ChangeEvent, ReactElement } from 'react';

type Props = {
  answerCallback: (answer: string) => void;
};

const AnswerForm = ({ answerCallback }: Props): ReactElement => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: SyntheticEvent): void => {
    answerCallback(answer);
    event.preventDefault();
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setAnswer(value);
  };

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
};

export default AnswerForm;
