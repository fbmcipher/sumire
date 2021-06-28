/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Track from '../../../classes/Track.js';
import Head from 'next/head'
import Image from 'next/image'

import Exhibit from '../../../components/Exhibit/Exhibit.jsx';
import AudioTrackPlaylist from '../../../components/AudioTrackPlaylist/AudioTrackPlaylist.jsx';

/* merge custom and default playlist styles */
import playlistStyles from '../../../components/AudioTrackPlaylist/AudioTrackPlaylist.module.css';
import customPlaylistStyles from './AudioTrackPlaylist.module.css';

import customExhibitStyles from './Exhibit.module.css';
import exhibitStyles from '../../../components/Exhibit/Exhibit.module.css';

import { ResponsiveStack, ResponsiveStackChild } from '../../../components/ResponsiveStack/ResponsiveStack.jsx';

import styles from './index.module.css';

const RedCard = ({children, className}) => {
    return (
        <div className={`${styles.redCard} ${className}`}>{children}</div>
    )
}

export default function Home() {
  let tracks = [
      {
          "title": "PRETENTIOUS",
          "explicit": true,
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track1.mp3",
          "id": "haidernism_track1"
      },
      {
          "title": "PRESSURE",
          "explicit": true,
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track2.mp3",
          "id": "haidernism_track2"
      },
      {
          "title": "THRU THE NITE",
          "explicit": true,
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              },
              {
                  "name": "Caracara",
                  "username": "caracara",
                  "href": "/@caracara"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track3.mp3",
          "id": "haidernism_track3"
      },
      {
          "title": "THOUGHT LOOPS",
          "explicit": true,
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track4.mp3",
          "id": "haidernism_track4"
      },
      {
          "title": "QUICKSAND",
          "explicit": true,
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track5.mp3",
          "id": "haidernism_track5"
      },
      {
          "title": "IN MY EYEZ",
          "explicit": true,
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              },
              {
                  "name": "Frank Lafunk"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track6.mp3",
          "id": "haidernism_track6"
      },
      {
          "title": "PAKI",
          "explicit": true,
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track7.mp3",
          "id": "haidernism_track7"
      },
      {
          "title": "PENITENT",
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              },
              {
                  "name": "Sylvia the House",
                  "username": "sylviathehouse",
                  "href": "/@sylviathehouse"
              }
          ],
          "explicit": true,
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track8.mp3",
          "id": "haidernism_track8"
      },
      {
          "title": "PHENOMENAL",
          "artists": [
              {
                  "name": "HAIDER SAMSARA",
                  "username": "haidersamsara",
                  "href": "/@haidersamsara"
              }
          ],
          "explicit": false,
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/haidernism/track9.mp3",
          "id": "haidernism_track9"
      }
  ].map(
    /* construct Track objects from these JSON objects */
    track => Track.from(track)
  );

  return (
    <div>
      <Head>
        <title>HAIDERNISM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> {/* TODO change this */}
      </Head>

      <Exhibit className="exhibit-haidernism" styles={Object.assign(exhibitStyles, customExhibitStyles)}>
          <ResponsiveStack>
              <ResponsiveStackChild className={styles.firstSection}>
                <RedCard className={styles.titleContainer}>
                    <div className={styles.titleSmaller}>LIONANDP EACE PRESE N TS</div>
                    <div className={styles.titleBigger}>HAIDERNISM</div>
                </RedCard>
                
                <div className={styles.releaseCoverContainer}>
                    <Image className={styles.releaseCover} src={require('./img/cover.png')} width={256} height={256} />
                </div>

                <AudioTrackPlaylist styles={Object.assign(playlistStyles, customPlaylistStyles)} tracks={tracks} />
              </ResponsiveStackChild>
              
              <ResponsiveStackChild>
                <RedCard className={styles.releaseCredits}>
                    <p>RECORDED in SHEFFIELD, NOTTINGHAM, LONDON, and LEEDS.</p>
                    <p>ALL SONGS WRITTEN and PRODUCED by HAIDER SALEEM</p>
                    <p>FX AND WEBSITE by faiz.codes</p>
                    <p>BACKUP VOCALS from MARTYNA RUNKOWSKA</p>
                    <p>SPECIAL THANKS TO CARACARA</p>
                    <p>made by sumire 2020</p>
                </RedCard>

                <RedCard className={styles.releaseFeatures}>
                    <p>THRU THE NITE features CARACARA.</p>
                    <p>IN MY EYEZ features FRANK LAFUNK.</p>
                    <p>PENITENT features COLM from SYLVIA THE HOUSE.</p>
                </RedCard>
              </ResponsiveStackChild>

              <ResponsiveStackChild>
                <img style={{height: '100%', width: '300%'}} src="https://via.placeholder.com/3840x2160/09f/fff" />
              </ResponsiveStackChild>
              
          </ResponsiveStack>
      </Exhibit>

    </div>
  )
}
