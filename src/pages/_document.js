import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&family=Roboto+Slab:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="A JurisMilitar é um curso especializado no concurso de oficiais da Polícia Militar/RJ."
          />
          <meta
            name="keywords"
            content="policia militar, oficial, cfo, bacharel, direito, advogados, concurso publico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
