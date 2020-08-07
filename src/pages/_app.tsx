import '@material/react-button/dist/button.css';
import '@material/react-material-icon/dist/material-icon.css';
import { ComponentClass, ReactElement } from 'react';

type Props = {
  Component: ComponentClass;
  pageProps: any;
};

function App({ Component, pageProps }: Props): ReactElement {
  return <Component {...pageProps} />;
}

export default App;
