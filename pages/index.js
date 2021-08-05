/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styles from './index.module.css';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Members from '../components/Members/Members.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import ExhibitCard from '../components/ExhibitCard/ExhibitCard.jsx';
import DataContext from '../contexts/DataContext.jsx';
import { useContext } from 'react'
import { useMediaQuery } from 'react-responsive';

const Home = ()=>{
  const isMobile = useMediaQuery({query: '(max-width: 1000px)'});
  const {members, exhibits} = useContext(DataContext);
  return (
    <>
      <Head>
        <title>made by sumire</title>
        <meta name="description" content="a virtual art house based in creative hotspots around the world." />
        <link rel="icon" href="/favicon.ico" /> {/* TODO change this */}
      </Head>

      {isMobile ? 
      <header className={styles.headerMobile}>
        <Members members={members} />
      </header>
      : null }

      <main className={styles.main}>
        <Carousel>
          { /* Sort by reverse chronological */ }
          {exhibits.sort((a, b) => b.sort - a.sort).map(exhibit => {
            return <ExhibitCard key={exhibit.slug} exhibit={exhibit} />
          })
          }
        </Carousel>
      </main>
      
      {isMobile ? null: 
      <footer className={styles.footer}>
        <Members members={members} />
      </footer>
      }
    </>
  )
}

Home.layout = 'CarouselLayout';

export default Home;
