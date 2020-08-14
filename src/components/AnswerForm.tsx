/**
 * AnswerForm Component.
 */
import React, { SyntheticEvent, useState, ChangeEvent, ReactElement, createRef, useEffect } from 'react';
import { Button } from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

type Props = {
  answerCallback: (answer: string) => void;
};

const AnswerForm = ({ answerCallback }: Props): ReactElement => {
  const [answer, setAnswer] = useState('');
  const answerInput = createRef<HTMLInputElement>();

  useEffect(() => {
    // When the answer form is made visible, the answer input field should be in focus for quick answers.
    answerInput?.current?.focus();
  });

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
          ref={answerInput}
          type="text"
          name="answer"
          id="answer"
          className="center"
          aria-label="Answer"
          value={answer}
          onChange={handleChange}
        />
      </div>
      <div className="buttons">
        <Button type="submit" unelevated={true} className="green">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AnswerForm;
