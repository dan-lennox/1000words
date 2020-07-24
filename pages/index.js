import Head from 'next/head'
import Game from '../src/components/Game';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Import Google Icon Font */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

        {/* Import materialize.css */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>

        {/* Import materialize.js */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>

      <main>
        <h1>1000 Words</h1>

        <Game />
      </main>

      {/*<footer>https://github.com/dan-lennox</footer>*/}
    </div>
  )
}
