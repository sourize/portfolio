import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J41N4GVFYJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J41N4GVFYJ');
          `}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
