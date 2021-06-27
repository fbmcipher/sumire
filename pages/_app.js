import '../styles/globals.css'
import '../styles/reset.css'; /* CSS reset file */
import Layout from '../components/Layout/Layout.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
