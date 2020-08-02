import { useState, useEffect } from 'react';
import Head from 'next/head'

export default function Home() {
  const [loadingState, updateLoadingState] = useState(true);
  const [contentState, updateContentState] = useState({})
  const content = {
    header: "Section A",
    intro: "In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells. ",
    list: [
      "Dusk",
      "Tusk",
      "Rusk",
    ]
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{contentState.header}</h1>
        <p> {contentState.intro}</p>
        <ul>
          {contentState.list.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            )
          })}
        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{
      .loading {
              color: transparent;
	background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
	background-size: 400%;
	animation: loading 1.2s ease-in-out infinite;
}

li {
          margin - bottom: .5em;
}

@keyframes loading {
          0 % {
            background- position: 100% 50%;
	}
	100% {
          background - position: 0 50%;
	}
}
</style>
    </div>
  )
}
