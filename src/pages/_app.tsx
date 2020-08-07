import '@material/react-button/dist/button.css';
import '@material/react-material-icon/dist/material-icon.css';
import { ComponentClass } from 'react';

type Props = {
  Component: ComponentClass,
  pageProps: any
}

function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default App