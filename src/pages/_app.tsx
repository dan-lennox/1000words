import '@material/react-button/dist/button.css';
import { ComponentClass } from 'react';

type Props = {
  Component: ComponentClass,
  pageProps: any
}

function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default App