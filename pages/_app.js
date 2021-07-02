import '../styles/reset.css'; /* CSS reset file */
import '../styles/pages/haidernism.css'
import '../styles/pages/tiabn.css'
import '../styles/fonts/wavehaus.css';
import '../styles/fonts/GTWalsheim.css';
import '../styles/globals.css';
import PageLayout from '../layouts/PageLayout/PageLayout.jsx';
import CarouselLayout from '../layouts/CarouselLayout/CarouselLayout.jsx'
import ProfileLayout from '../layouts/ProfileLayout/ProfileLayout.jsx';

let layouts = {
  PageLayout,
  CarouselLayout,
  ProfileLayout
}

function MyApp({ Component, pageProps }) {
  let Layout = PageLayout;

  /* Use the specified custom layout if the page asks for one. */
  if(Component?.layout && Component.layout in layouts){
    Layout = layouts[Component.layout]
  }
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
