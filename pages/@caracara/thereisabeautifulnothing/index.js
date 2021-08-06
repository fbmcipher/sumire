/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Track from '../../../classes/Track.js';
import Head from 'next/head'

import Exhibit from '../../../components/Exhibit/Exhibit.jsx';
import AudioTrackPlaylist from '../../../components/AudioTrackPlaylist/AudioTrackPlaylist.jsx';

import AnimatedTexture from './components/AnimatedTexture/AnimatedTexture.jsx';

/* merge custom and default playlist styles */
import playlistStyles from '../../../components/AudioTrackPlaylist/AudioTrackPlaylist.module.css';
import customPlaylistStyles from './AudioTrackPlaylist.module.css';

import customExhibitStyles from './Exhibit.module.css';
import exhibitStyles from '../../../components/Exhibit/Exhibit.module.css';

import styles from './index.module.css';
import Image from 'next/image';

export default function TIABN() {
  let tracks = [
      {
          "title": "Drifting",
          "artists": [
              {
                  "name": "Caracara",
                  "username": "caracara"
              }
          ],
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/01 Caracara - Drifting.mp3",
          "id": "tiabn_track1",
          "runtime": 123,
          "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
      },
      {
        "title": "The View from My Room",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/02 Caracara - The View From My Room.mp3",
        "id": "tiabn_track2",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    {
        "title": "Post-Nausea",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/03 Caracara - Post Nausea.mp3",
        "id": "tiabn_track3",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "Sleeplessness",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/04 Caracara - Sleeplessness.mp3",
        "id": "tiabn_track4",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "Once, Norway",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/05 Caracara - Once, Norway.mp3",
        "id": "tiabn_track5",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "Destroyer",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/06 Caracara - Destroyer.mp3",
        "id": "tiabn_track6",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "The House Through Photographs",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/07 Caracara - The House Through Photographs.mp3",
        "id": "tiabn_track7",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "Truly Alone",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/08 Caracara - Truly Alone.mp3",
        "id": "tiabn_track8",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "You Won't Always Be Around",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/09 Caracara - You Won't Always Be Around.mp3",
        "id": "tiabn_track9",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "Blue Light (Here)",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/10 Caracara - Blue Light (Here).mp3",
        "id": "tiabn_track10",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
    
    {
        "title": "There Is A Beautiful Nothing",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/10 Caracara - Blue Light (Here).mp3",
        "id": "tiabn_track11",
        "runtime": 123,
        "imageSrc": "/exhibits/thereisabeautifulnothing.jpg"
    },
      
  ].map(
    /* construct Track objects from these JSON objects */
    track => Track.from(track)
  );

  return (
    <div>
      <Head>
        <title>There Is A Beautiful Nothing — Caracara</title>
        <link href="https://fonts.googleapis.com/css2?family=Benne&display=swap" rel="stylesheet"></link>
      </Head>
      <Exhibit className="exhibit-tiabn" styles={Object.assign(exhibitStyles, customExhibitStyles)}>
        <div className="container">
            <div className={styles.banner}>
                <div className={styles.logotype}>
                    <Image src={'/pages/@caracara/thereisabeautifulnothing/img/logotype.svg'} layout='fill' />
                </div>
            </div>
            <div className="content">
                <h1>There Is A Beautiful Nothing</h1>
                <AudioTrackPlaylist styles={Object.assign(playlistStyles, customPlaylistStyles)} tracks={tracks} />
            </div>
        </div>
     </Exhibit>

    </div>
  )
}
