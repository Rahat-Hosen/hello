import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const isDev = process.env.NODE_ENV === "development";

    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico?v=2" />
          {!isDev ? (
            <script
              async
              src="https://analytics.umami.is/script.js"
              data-website-id="6e431bc3-cebc-4206-a5d2-bd963aab57a8"
            ></script>
          ) : null}
        </Head>
        <body className="bg-neutral-50 font-sans dark:bg-neutral-950">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
