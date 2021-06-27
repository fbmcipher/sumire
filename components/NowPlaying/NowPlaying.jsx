import { useContext, useEffect, useRef } from 'react';
import PlaybackContext from '../../contexts/PlaybackContext.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import styles from './NowPlaying.module.css';

const NowPlaying = ({playing}) => {
    return (
        <PlaybackContext.Consumer>
            { (ctx) => {
                console.log(ctx);

            } }
            
        </PlaybackContext.Consumer>
    )
}

export default NowPlaying;