import Head from 'next/head';
import Game from '../components/Game';
import { ReactElement, Fragment } from 'react';
import AppBar from '../components/AppBar/AppBar';

const Home = (): ReactElement => (
  <Fragment>
    <Head>
      <title>1000 Most Common Croatian Words</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="A tool to assist learning the Croatian language by memorising the most common 1000 words."
      />
      <meta name="keywords" content="croatian, languages, learning, 1000 most common words" />

      {/* Import Google Icon Font */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <AppBar />
    <main>
      <Game />
    </main>

    {/*<footer>https://github.com/dan-lennox</footer>*/}
  </Fragment>
);

export default Home;
