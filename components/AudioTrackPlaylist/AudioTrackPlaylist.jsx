/* Enumerates an array of AudioTracks and creates a tracklist that the user can navigate */

import styles from './AudioTrackPlaylist.module.css';
import AudioContext from '../../contexts/AudioContext.jsx';
import { useEffect, useContext } from 'react';

const AudioTrackPlaylist = ({tracks, styles}) => {
    let { player } = useContext(AudioContext);
    return <div className={`${styles.playlist}`}>
        <ol>
            { tracks.map((track, index) => {

                return <Track
                    onClick={()=>{
                        let result = player.playTrack(track);
                        console.log(player, result);
                    }}
                    tracks={tracks}
                    track={track}
                    number={index + 1} />

            }) }
        </ol>
    </div>

}

const Track = ({track, number, tracks}) => {
    const { setQueue, setPlayingIdx } = useContext(AudioContext);

    const onClick = (e)=>{
        /* If this track is already playing, pause playback.
           If this track is not already playing, change playback to this track. */
        setQueue(tracks);
        setPlayingIdx(tracks.indexOf(track))
    }

    return (
        <li onClick={onClick} className={styles.track}>
            <div className={styles.trackText}>
                <div className={styles.trackNumber}>{number}</div>
                <div className={styles.trackTitle}>{track.title}</div>
            </div>
            <div className={styles.trackInfo}>
                {track.explicit ? <ExplicitSymbol /> : null}
                <div className={styles.trackRuntime}>1:23</div>
            </div>
        </li>
    )
}

const ExplicitSymbol = ()=>{
    return (
        <svg aria-describedby="Contains explicit content" className={styles.explicit} width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="9845644981556283401" fill-rule="nonzero">
                    <polygon id="🔹-Secondary-Color" fill="#D0D0D0" points="6 4 12 4 12 6 8 6 8 8 12 8 12 10 8 10 8 12 12 12 12 14 6 14"></polygon>
                    <path d="M18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 Z M16,16 L2,16 L2,2 L16,2 L16,16 Z M12,12 L8,12 L8,10 L12,10 L12,8 L8,8 L8,6 L12,6 L12,4 L6,4 L6,14 L12,14 L12,12 Z" id="🔹-Primary-Color" fill="#FFFFFF"></path>
                </g>
            </g>
        </svg>
    )
}

export default AudioTrackPlaylist;