/** 
 * This component displays a slowly animating, soothing
 * "texture" to be used as a background for TIABN's
 * album page. It matches the visual aesthetic and
 * slow-burning, ambient stylings of the album.
 */

import texture0 from "../../img/cover.jpg";
import styles from './AnimatedTexture.module.css';

const AnimatedTexture = () => {
    /* Tiles four adjacently-facing versions of an image
    together, like this:
    
    (  -)(- )
    (  _)(_ )

    hard to represent in text, but you get me. the idea is
    that because all the textures are facing each other,
    you can't quite make out the fact they're repeated.
    this gives us more room to animate
    */

    return (
        <div className={styles.textureTileContainer}>
            <img className={styles.imageTopLeft} src={texture0.src} height={1024} width={1024} />
            <img className={styles.imageTopRight} src={texture0.src} height={1024} width={1024} />
            <img className={styles.imageBottomLeft} src={texture0.src} height={1024} width={1024} />
            <img className={styles.imageBottomRight} src={texture0.src} height={1024} width={1024} />
        </div>
    )
}

module.exports = AnimatedTexture;