/** This is a mini version of the now playing widget that appears when
 *  audio is playing, but minimized.
 */

 import styles from './NowPlayingMini.module.css';
 import { PlayArrow } from '@material-ui/icons'
 import { useContext } from "react";
 import classNames from 'classnames';
import AudioContext from '../../contexts/AudioContext';
 
 const NowPlayingMini = () => {
     const { visible, setVisible, curTrack } = useContext(AudioContext);

     /* Only show mini now-playing widget if audio is playing, and if the larger widget is
        hidden */
     let hidden = !(curTrack && !visible);
 
     return (
         <div onClick={()=>{setVisible(true)}} className={classNames(styles.nowPlayingMini, {hidden})}>
             <PlayArrow />
         </div>
     )
 }
 
 export default NowPlayingMini;