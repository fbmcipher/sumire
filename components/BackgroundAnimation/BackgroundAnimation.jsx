/** This component provides the full-screen animation
 *  that is used on the home screen.
 */

import styles from './BackgroundAnimation.module.css'

const BackgroundAnimation = ({
    speed = 1 /* multiplication factor for speed */
}) => {
    return (
        <div className={styles.backgroundAnimationContainer}>
            <div className={styles.backgroundAnimation}>

            </div>
        </div>
    )
}

export default BackgroundAnimation;