import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>TESTE</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://styles.redditmedia.com/t5_3lghn1/styles/communityIcon_r0qvuvdcmh661.png?width=256&s=d7dce24fd4fe33687d991c28a903528461f844b4"
            type="image/x-icon"
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

export default CustomDocument;
