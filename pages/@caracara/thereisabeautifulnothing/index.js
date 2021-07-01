/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Track from '../../../classes/Track.js';
import Head from 'next/head'
import Image from 'next/image'

import Exhibit from '../../../components/Exhibit/Exhibit.jsx';
import AudioTrackPlaylist from '../../../components/AudioTrackPlaylist/AudioTrackPlaylist.jsx';

import AnimatedTexture from './components/AnimatedTexture/AnimatedTexture.jsx';

/* merge custom and default playlist styles */
import playlistStyles from '../../../components/AudioTrackPlaylist/AudioTrackPlaylist.module.css';
import customPlaylistStyles from './AudioTrackPlaylist.module.css';

import customExhibitStyles from './Exhibit.module.css';
import exhibitStyles from '../../../components/Exhibit/Exhibit.module.css';

import bannerImg from './img/banner.png';
import styles from './index.module.css';

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
          "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track1.mp3",
          "id": "tiabn_track1",
          "runtime": 123
      },
      {
        "title": "The View from My Room",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track2.mp3",
        "id": "tiabn_track2",
        "runtime": 123
    },
    {
        "title": "Post-Nausea",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track3.mp3",
        "id": "tiabn_track3",
        "runtime": 123
    },
    
    {
        "title": "Sleeplessness",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track4.mp3",
        "id": "tiabn_track4",
        "runtime": 123
    },
    
    {
        "title": "Once, Norway",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track5.mp3",
        "id": "tiabn_track5",
        "runtime": 123
    },
    
    {
        "title": "Destroyer",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track6.mp3",
        "id": "tiabn_track6",
        "runtime": 123
    },
    
    {
        "title": "The House Through Photographs",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track7.mp3",
        "id": "tiabn_track7",
        "runtime": 123
    },
    
    {
        "title": "Truly Alone",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track8.mp3",
        "id": "tiabn_track8",
        "runtime": 123
    },
    
    {
        "title": "You Won't Always Be Around",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track9.mp3",
        "id": "tiabn_track9",
        "runtime": 123
    },
    
    {
        "title": "Blue Light (Here)",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track10.mp3",
        "id": "tiabn_track10",
        "runtime": 123
    },
    
    {
        "title": "There Is A Beautiful Nothing",
        "artists": [
            {
                "name": "Caracara",
                "username": "caracara"
            }
        ],
        "src": "https://sumire.s3.eu-west-2.amazonaws.com/audio/tiabn/track11.mp3",
        "id": "tiabn_track11",
        "runtime": 123
    },
      
  ].map(
    /* construct Track objects from these JSON objects */
    track => Track.from(track)
  );

  return (
    <div>
      <Head>
        <title>There Is A Beautiful Nothing — Caracara</title>
      </Head>
      <Exhibit className="exhibit-tiabn" styles={Object.assign(exhibitStyles, customExhibitStyles)}>
        <AnimatedTexture />
        <div className="container">
            <img className="banner" src={bannerImg.src} />
            <div className="content">
                <h1>There Is A Beautiful Nothing</h1>
                <AudioTrackPlaylist styles={Object.assign(playlistStyles, customPlaylistStyles)} tracks={tracks} />
            </div>
        </div>
     </Exhibit>

    </div>
  )
}
