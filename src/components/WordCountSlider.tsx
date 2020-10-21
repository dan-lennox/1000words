/**
 * WordCountSlider Component.
 */
import { createRef, ReactElement, useEffect, useRef, RefObject } from 'react';
import { MDCSlider } from '@material/slider';

type Props = {
  wordCount: number;
  update: (count: number) => void;
};

const WordCountSlider = ({ wordCount, update }: Props): ReactElement => {
  const sliderRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  useEffect(() => {
    const slider = new MDCSlider(sliderRef.current as HTMLDivElement);
    slider.listen('MDCSlider:change', () => update(slider.value));
  });

  return (
    <div
      ref={sliderRef}
      className="mdc-slider mdc-slider--discrete"
      tabIndex={0}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      aria-label="Select Value"
    >
      <div className="mdc-slider__track-container">
        <div className="mdc-slider__track"></div>
      </div>
      <div className="mdc-slider__thumb-container">
        <div className="mdc-slider__pin">
          <span className="mdc-slider__pin-value-marker"></span>
        </div>
        <svg className="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875"></circle>
        </svg>
        <div className="mdc-slider__focus-ring"></div>
      </div>
    </div>
    // <form action="#">
    //   <p className="range-field">
    //     <input
    //       type="range"
    //       className="word-count-range"
    //       min="20"
    //       max="1000"
    //       step="20"
    //       defaultValue={wordCount}
    //       onChange={(e) => update(parseInt(e.target.value))}
    //     />
    //   </p>
    // </form>
  );
};
export default WordCountSlider;
