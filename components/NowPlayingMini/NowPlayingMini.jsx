/** This is a mini version of the now playing widget that appears when
 *  audio is playing, but minimized.
 */

 import styles from './NowPlayingMini.module.css';
 import { PlayArrow } from '@material-ui/icons'
 import { useContext } from "react";
 import classNames from 'classnames';
 
 const NowPlayingMini = ({setVisible}) => {
     let hidden = false;
 
     return (
         <div onClick={()=>{setVisible(true)}} className={classNames(styles.nowPlayingMini, {hidden})}>
             <PlayArrow />
         </div>
     )
 }
 
 export default NowPlayingMini;