import type { AppProps } from 'next/app'
import '../styles/main.scss'
import AuthXWidget from "../components/AuthXWidget";

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <AuthXWidget />
    <Component {...pageProps} />
  </div>
}

export default MyApp
