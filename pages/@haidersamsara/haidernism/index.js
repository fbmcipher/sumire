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

import YouTubeEmbed from '../../../components/YouTubeEmbed/YouTubeEmbed.jsx';

import styles from './index.module.css';

const RedCard = ({children, className}) => {
    return (
        <div className={`${styles.redCard} ${className}`}>{children}</div>
    )
}

const LyricsCard = ({children, className}) => {
    return (
        <RedCard className={`${styles.lyricsCard} ${className}`}>{children}</RedCard>
    )
}

const TrackSection = ({children}) => {
    return (
        <div className={styles.trackSection}>
            {children}
        </div>
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
                <TrackSection>
                    <RedCard className={styles.trackSectionHeader}>
                        <div>PRETENTIOUS</div>
                    </RedCard>
                    <ResponsiveStack>
                    <LyricsCard>
                        <p>FUCK A WORDSMITH, I'M A WORDSALEEM</p>
                        <p>SINCE 97 STUNTIN' ON HYSON GREEN</p>
                        <p>WE LIVE A LIFESTYLE BABY MADE OF BROKEN DREAMS</p>
                        <p>IT'S THAT: "DON'T WISH BIG AND LIVE WITHIN UR MEANS"</p>
                        <p>MY DEVILISH DESTINATION GONNA BE HELL</p>
                        <p>SURELY GOT MY SOUL FOR SATAN SATISFIED FOR RESALE</p>
                        <p>ALWAYS TIRED OF THE SAME OLD SHIT</p>
                        <p>SO I'MMA MAKE THIS LIFE STRICTLY MY BUSINESS</p>
                        <p>I MEAN...</p>
                    </LyricsCard>
                    <LyricsCard>
                        <p>your comments are as obtuse as the weather</p>
                        <p>while i'm pacing erryday hell-bent for the leather</p>
                        <p>i know u never really bother with strange folk like me</p>
                        <p>and that's a lot to be said for this wacky paki</p>
                        <p>'cause i'm as sharp as a knife, nank, or shank</p>
                        <p>i'mma slash u right across ur peripheral vision</p>
                        <p>while i'm chasing all the poltergeist</p>
                    </LyricsCard>
                    <LyricsCard>
                        <p>UGH</p>
                        <p>fool me once, fool me —</p>
                        <p>shame on you cause i can't fall for your shit</p>
                        <p>i'm the messiah u persist in following</p>
                        <p>teachers tellin me i not been listenin'</p>
                        <p>when all this time i was wallowin in my`</p>
                    </LyricsCard>
                    <LyricsCard>
                        <p>LIFE WITH NO MEANING AND A HEART THAT TURNED BLACK</p>
                        <p>I WAS ONLY THIRTEEN WHEN I WAS CUTTING MY HANDS</p>
                        <p>WHY U PACK UR BAGS N LEAVIN' LIKE U PAKIS HAVE NO SECRETS</p>
                        <p>SHOUTING "YOU ARE POSSESSED" WHEN I TURNED OUT THE BEST</p>
                    </LyricsCard>
                    <LyricsCard>
                        <p>I WENT UP NORTH BABY, I BROUGHT BACK 2 DEGREES</p>
                        <p>180 DEGREES, SO MY GRANDMA CAN SEE</p>
                        <p>THAT WE CAN PAINT A FUTURE FROM A PAST THAT WAS HAUNTED</p>
                        <p>AND GIVE 1 MORE REASON FROM THEM WHITES TO BE DAUNTED</p>
                        <p>SMARTER THAN SARTRE BUT THICKER THAN FOUCAULT</p>
                        <p>HOW ARE PPL SO FUCKIN BASIC I WILL NEVER KNOW</p>
                        <p>SPEAKIN' THE NIETZSCHE, I'M A GEN Z PREACHER</p>
                    </LyricsCard>
                    <LyricsCard>
                        <p>WHILE THESE BOOMERS BEEN BOOMIN WHAT BEEN BOOMIN THESE SPEAKERS?</p>
                        <p>DAMN</p>
                        <p>(and here's one they might remember...)</p>
                    </LyricsCard>
                    <LyricsCard>
                        <p>i do it with my eyes closed slowly another burden in my heart writing make the wifey COSY i am such a piece of art man u think u fuckin know me???/me ohmy you don' tknow shit and this my<span style={{fontSize: 24}}>E EXISTENTIAL CRISIS</span></p>
                    </LyricsCard>
                    </ResponsiveStack>
                </TrackSection>
              </ResponsiveStackChild>

              <ResponsiveStackChild>
                <YouTubeEmbed ytid={'ShLao7Foj7Q'} showControls={false} height={854} width={480} />
              </ResponsiveStackChild>

              <ResponsiveStackChild>
                <img style={{height: '100%', width: '300%'}} src="https://via.placeholder.com/3840x2160/09f/fff" />
              </ResponsiveStackChild>
              
          </ResponsiveStack>
      </Exhibit>

    </div>
  )
}
