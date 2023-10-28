import { AppProps } from "next/app";
import AppLink from "../components/app-link";
import layout from "../styles/layout.module.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={layout.app}>
      <aside className={layout.aside}>
        <AppLink href="tetris">Tetris</AppLink>
        <AppLink href="snake">Snake</AppLink>
        <AppLink href="tick-tack-toe">Tick Tack Toe</AppLink>
        <AppLink href="2048-game">2048</AppLink>
      </aside>
      <main className={layout.page}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
