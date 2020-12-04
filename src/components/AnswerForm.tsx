/**
 * AnswerForm Component.
 */
import React, { SyntheticEvent, useState, ChangeEvent, ReactElement, useRef, useEffect } from 'react';
import { Button } from '@material/react-button';
import { MDCTextField } from '@material/textfield';

type Props = {
  answerCallback: (answer: string) => void;
};

const AnswerForm = ({ answerCallback }: Props): ReactElement => {
  const [answer, setAnswer] = useState('');
  const answerInput: React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

  useEffect(() => {
    // When the answer form is made visible, the answer input field should be in focus for quick answers.
    answerInput?.current?.focus();
    new MDCTextField(answerInput.current as HTMLInputElement);
  });

  const handleSubmit = (event: SyntheticEvent): void => {
    answerCallback(answer);
    event.preventDefault();
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setAnswer(value);
  };

  // @todo: Using MDC text field here directly as this is so far the only text field in the application.
  // Move to an Input component once a second input is required.
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-field">
        <label className="mdc-text-field mdc-text-field--outlined" ref={answerInput}>
          <span className="mdc-notched-outline">
            <span className="mdc-notched-outline__leading" />
            <span className="mdc-notched-outline__notch">
              <span className="mdc-floating-label" id="label">
                Answer
              </span>
            </span>
            <span className="mdc-notched-outline__trailing" />
          </span>
          <input
            type="text"
            name="answer"
            id="answer"
            className="mdc-text-field__input"
            aria-labelledby="label"
            value={answer}
            onChange={handleChange}
          />
        </label>
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
