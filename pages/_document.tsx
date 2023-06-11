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
          <link
            rel="shortcut icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>"
          />
          {!isDev ? (
            <script
              async
              src="https://analytics.umami.is/script.js"
              data-website-id="6e431bc3-cebc-4206-a5d2-bd963aab57a8"
            ></script>
          ) : null}
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
