import {
  FlushedChunks,
  flushChunks,
  revalidate,
} from "@module-federation/nextjs-mf/utils";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

interface DocumentProps extends DocumentInitialProps {
  chunks: any;
}
class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    if (
      process.env.NODE_ENV === "development" &&
      ctx.req &&
      ctx.req.url &&
      !ctx.req.url.includes("_next")
    ) {
      await revalidate().then((shouldReload) => {
        if (shouldReload) {
          ctx.res?.writeHead(302, { Location: ctx.req?.url });
          ctx.res?.end();
        }
      });
    } else {
      ctx?.res?.on("finish", () => {
        revalidate();
      });
    }
    const chunks = await flushChunks();
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, chunks };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <FlushedChunks chunks={this.props.chunks} />
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
