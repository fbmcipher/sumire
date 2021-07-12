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
import '../styles/fonts/Wavehaus.css';
import '../styles/fonts/GTWalsheim.css';
import '../styles/globals.css';
import PageLayout from '../layouts/PageLayout/PageLayout.jsx';
import CarouselLayout from '../layouts/CarouselLayout/CarouselLayout.jsx'
import ProfileLayout from '../layouts/ProfileLayout/ProfileLayout.jsx';
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation.jsx';

let layouts = {
  PageLayout,
  CarouselLayout,
  ProfileLayout
}

const App = ({ Component, pageProps }) => {

  /** begin mock data */
  const members = [
    {
        name: 'HAIDER SAMSARA',
        imageSrc: '/artists/haidersamsara/pic.jpg',
        backgroundSrc: '/artists/haidersamsara/bg.jpg',
        username: 'haidersamsara'
    },
    {
        name: 'Caracara',
        imageSrc: '/artists/caracara/pic.jpg',
        username: 'caracara',
    },
    {
        name: 'pier_ogii',
        imageSrc: '/artists/pier_ogii/pic.jpg',
        username: 'pier_ogii'
    },
    {
        name: 'pjd.',
        imageSrc: '/artists/pjd/pic.jpg',
        username: 'pjd'
    },
    {
        name: 'HAM',
        imageSrc: '/artists/ham/pic.jpg',
        username: 'ham'
    },
    {
      name: 'faiz',
      imageSrc: '/artists/faiz/pic.jpg',
      username: 'faiz'
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
          <BackgroundAnimation />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AudioHandler>
      </ShoppingCartHandler>
    </DataContext.Provider>
  )
}

export default App
