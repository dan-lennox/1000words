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

      mdcSlider.listen('MDCSlider:change', (event: CustomEvent) => {
        if (event.detail.value !== wordCount) {
          update(event.detail.value);
        }
      });

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

    // <div ref={sliderElementRef} className="mdc-slider mdc-slider--discrete" data-step="20">
    //   <div className="mdc-slider__track">
    //     <div className="mdc-slider__track--inactive" />
    //     <div className="mdc-slider__track--active">
    //       <div className="mdc-slider__track--active_fill" />
    //     </div>
    //   </div>
    //   <div
    //     className="mdc-slider__thumb"
    //     role="slider"
    //     tabIndex={0}
    //     aria-label="Discrete slider demo"
    //     aria-valuemin={20}
    //     aria-valuemax={1000}
    //     aria-valuenow={wordCount}
    //   >
    //     <div className="mdc-slider__value-indicator-container">
    //       <div className="mdc-slider__value-indicator">
    //         <span ref={sliderElementRef} className="mdc-slider__value-indicator-text">
    //           {wordCount}
    //         </span>
    //       </div>
    //     </div>
    //     <div className="mdc-slider__thumb-knob" />
    //   </div>
    // </div>
  );
};
export default WordCountSlider;
