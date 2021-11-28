import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class AppDocument extends Document {
  static getInitialProps = async (context: DocumentContext) => {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  };
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>
        <body className="bg-bright text-dark dark:bg-dark dark:text-bright">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
