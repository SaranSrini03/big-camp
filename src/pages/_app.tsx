import "@/styles/globals.css";
import type { AppProps } from "@/imports/globalimport";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
