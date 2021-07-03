/** This component handles the Audio Context (keeping track of playback across
 *  pages/components) and the Now Playing view */
 import AudioHandler from '../components/AudioHandler/AudioHandler.jsx';

 /** Use another context to keep track of all mock data used in this prototype.
  *  This would be replaced with actual API response data in a release build.
  */
 import DataContext from '../contexts/DataContext.jsx';
 
 /* Import ShoppingCartHandler (which manages shopping cart state and displays
    ShoppingCart component on all pages.) */
 import ShoppingCartHandler from '../components/ShoppingCartHandler/ShoppingCartHandler';

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

const App = ({ Component, pageProps }) => {

  /** begin mock data */
  const members = [
    {
        name: 'faiz',
        imageSrc: 'https://via.placeholder.com/150x150',
        username: 'faiz'
    },
    {
        name: 'HAIDER SAMSARA',
        imageSrc: 'https://assets.cosy.land/images/2021/02/HD26.jpg',
        backgroundSrc: '/artists/haidersamsara/bg.jpg',
        username: 'haidersamsara'
    },
    {
        name: 'Caracara',
        imageSrc: 'https://via.placeholder.com/150x150',
        username: 'caracara',
    },
    {
        name: 'pier_ogii',
        imageSrc: 'https://via.placeholder.com/150x150',
        username: 'pier_ogii'
    },
    {
        name: 'pjd.',
        imageSrc: 'https://via.placeholder.com/150x150',
        username: 'pjd'
    },
    {
        name: 'HAM',
        imageSrc: 'https://via.placeholder.com/150x150',
        username: 'ham'
    }
  ]
  const helpers = {
      getArtistByUsername: (username) => {
          /**
           * Returns an artist from the members array.
           * -normally- i would fetch this data using an API or something,
           * but since this assignment is front-end only, i just need
           * enough functionality to actually bring in data
           */
      
          return members.filter(member => member.username === username)[0];
      }
  }
  const exhibits = [
      {
      title: "HAIDERNISM",
      slug: 'haidernism', /* slug = URL-safe identifier */
      artists: [
          helpers.getArtistByUsername('haidersamsara')
      ],
      imageSrc: '/exhibits/haidernism.png',
      type: 'album'
      },
      {
      title: "There Is A Beautiful Nothing",
      slug: 'thereisabeautifulnothing',
      artists: [
          helpers.getArtistByUsername('caracara')
      ],
      imageSrc: '/exhibits/thereisabeautifulnothing.jpg',
      type: 'album'
      },
      {
      title: "the fruity collection",
      slug: 'fruity', /* slug = URL-safe identifier */
      artists: [
          helpers.getArtistByUsername('ham')
      ],
      imageSrc: '/exhibits/ham/fruity.png',
      type: 'fashion collection'
      },
  ]
  const data = {members, exhibits, helpers};
  /** end mock data */

  let Layout = PageLayout;

  /* Use the specified custom layout if the page asks for one. */
  if(Component?.layout && Component.layout in layouts){
    Layout = layouts[Component.layout]
  }
  
  return (
    <DataContext.Provider value={data}>
      <ShoppingCartHandler>
        <AudioHandler>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AudioHandler>
      </ShoppingCartHandler>
    </DataContext.Provider>
  )
}

export default App
