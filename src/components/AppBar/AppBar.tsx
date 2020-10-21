/**
 * Header Component.
 * https://material.io/develop/web/components/app-bars-top
 */

// @todo: Move working example of css modules somewhere else.

import { createRef, ReactElement, RefObject, useEffect, useRef } from 'react';
import { MDCTopAppBar } from '@material/top-app-bar';
import styles from './appBar.module.scss';

const AppBar = (): ReactElement => {
  const appBarRef: RefObject<HTMLElement> = createRef<HTMLElement>();

  useEffect(() => {
    new MDCTopAppBar(appBarRef.current as HTMLElement);
  });

  return (
    <header ref={appBarRef} className={`mdc-top-app-bar ${styles.appBar}`}>
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button
            className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
            aria-label="Open navigation menu"
          >
            menu
          </button>
          <span className="mdc-top-app-bar__title">1000 Words</span>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">
            favorite
          </button>
          <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">
            search
          </button>
          <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">
            more_vert
          </button>
        </section>
      </div>
    </header>
  );
};
export default AppBar;
