import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/locallibrary_logo.jpg" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
        <title>Local Library</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
