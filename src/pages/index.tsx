import Head from 'next/head'
import Game from '../components/Game';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>1000 Words</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A tool to assist learning the Croatian language by memorising the most common 1000 words." />
        <meta name="keywords" content="croatian, languages, learning, 1000 most common words" />

        {/* Import Google Icon Font */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        {/* Import materialize.css */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

        {/* Import materialize.js */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
      </Head>
      <main>
        <Game />
      </main>

      {/*<footer>https://github.com/dan-lennox</footer>*/}
    </div>
  )
}
