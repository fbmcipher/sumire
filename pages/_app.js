import '../styles/globals.css'
import '../styles/reset.css'; /* CSS reset file */
import PageLayout from '../layouts/PageLayout/PageLayout.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default MyApp
