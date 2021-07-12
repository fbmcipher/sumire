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
        username: 'haidersamsara',
        bio: `is a musician, visual artist, filmmaker, and a bunch of other words that don't really represent what he does and just seek to label oneself instead of actually speaking for the work he makes. He prefers the art to speak for himself, so here it is.
        
He is also the Editor-in-Chief and Director of [COSY](https://www.cosy.land), a multimedia magazine, and finds that a much more interesting, fulfilling pastime than plugging art.`,
        links: [
          {
            icon: 'Instagram',
            title: 'Instagram',
            username: '@username',
            href: 'javascript:alert("stubbed")'
          },
          {
            icon: 'Twitter',
            title: 'Twitter',
            username: '@username',
            href: 'javascript:alert("stubbed")'
          }
        ]
    },
    {
        name: 'Caracara',
        name_full: 'Caracara (Samuel Hart)',
        imageSrc: '/artists/caracara/pic.jpg',
        username: 'caracara',
        bio: `is a musician and filmmaker. His music is ambient and textural in nature, and always carries a heavy emotional weight. In his first release, he created soundscapes that were nostalgic, extroverted and reminiscient in sound - in his new project, the opposite - cold, dark, and singular. It's a testament to his talents and intuition in music production and audio engineering that he's able to convey such a wide palette of emotion in whatever he creates.`,
        links: [
          {
            icon: 'Instagram',
            title: 'Instagram',
            href: 'javascript:alert("stubbed")'
          },
          {
            icon: 'Twitter',
            title: 'Twitter',
            href: 'javascript:alert("stubbed")'
          }
        ]
    },
    {
        name: 'pier_ogii',
        name_full: 'pier_ogii (Martyna)',
        imageSrc: '/artists/pier_ogii/pic.jpg',
        username: 'pier_ogii',
        bio: `is the founder and chief aesthetic designer of [COSY](https://www.cosy.land)! She draws every single asset and infographic for COSY, creating its irresistible, iconic and universal design, and talks to writers all around the world every day to keep the cogs of COSY as a publication spinning! She also works with the rest of the COSY team in developing ideas for new features!`,
        links: [
          {
            icon: 'Instagram',
            title: 'Instagram',
            href: 'javascript:alert("stubbed")'
          },
          {
            icon: 'Twitter',
            title: 'Twitter',
            href: 'javascript:alert("stubbed")'
          }
        ]
    },
    {
        name: 'pjd.',
        imageSrc: '/artists/pjd/pic.jpg',
        username: 'pjd',
        disabled: true
    },
    {
        name: 'HAM',
        imageSrc: '/artists/ham/pic.jpg',
        username: 'ham',
        disabled: true
    },
    {
        name: 'faiz',
        imageSrc: '/artists/faiz/pic.jpg',
        username: 'faiz',
        disabled: true
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
