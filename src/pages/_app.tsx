import '../styles/globals.sass'
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app'
import Layout from '../layout'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout title="Online creator meta tags">
      <Component {...pageProps} />
    </Layout>
  )

  
}
export default MyApp
