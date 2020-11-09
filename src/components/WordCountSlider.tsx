/**
 * WordCountSlider Component.
 */
import { createRef, ReactElement, useEffect, useRef, RefObject, useState } from 'react';
import { MDCSlider } from '@material/slider';

type Props = {
  wordCount: number;
  update: (count: number) => void;
};

const WordCountSlider = ({ wordCount, update }: Props): ReactElement => {
  const sliderElementRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  const [slider, setSlider] = useState<any>(undefined);

  useEffect(() => {
    if (!slider) {
      let mdcSlider = new MDCSlider(sliderElementRef.current as HTMLDivElement);

      mdcSlider.listen(
        'MDCSlider:change',
        (event: CustomEvent) => {
          if (event.detail.value !== wordCount) {
            update(event.detail.value);
          }
        },
        slider
      );

      setSlider(mdcSlider);
    }
  });

  return (
    <div
      ref={sliderElementRef}
      className="mdc-slider mdc-slider--discrete"
      tabIndex={0}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={1000}
      aria-valuenow={wordCount}
      aria-label="Select Value"
    >
      <div className="mdc-slider__track-container">
        <div className="mdc-slider__track" />
      </div>
      <div className="mdc-slider__thumb-container">
        <div className="mdc-slider__pin">
          <span className="mdc-slider__pin-value-marker" />
        </div>
        <svg className="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875" />
        </svg>
        <div className="mdc-slider__focus-ring" />
      </div>
    </div>
  );
};
export default WordCountSlider;
