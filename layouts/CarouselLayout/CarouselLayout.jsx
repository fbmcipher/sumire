/** CarouselLayout is equivalent to PageLayout, but adds an additional
 *  class to allow the Carousel to fill up the full height of the page.
 */

import PageLayout from '../PageLayout/PageLayout.jsx';
import styles from './CarouselLayout.module.css';

const CarouselLayout = ({children}) => {
    return (
        <>
            <PageLayout className={styles.carouselLayout}>
                {children}
            </PageLayout>
        </>
    )
}

export default CarouselLayout;