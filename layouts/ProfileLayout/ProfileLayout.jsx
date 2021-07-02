/** ProfileLayout is the template for all profile pages.
 *  Extends CarouselLayout (which itself extends PageLayout)
 */

 import styles from '../../pages/index.module.css';
 import PageLayout from '../PageLayout/PageLayout.jsx';
 import cstyles from '../CarouselLayout/CarouselLayout.module.css';
 import DataContext from '../../contexts/DataContext.jsx';
 import BackgroundAnimation from '../../components/BackgroundAnimation/BackgroundAnimation.jsx';
 import Carousel from '../../components/Carousel/Carousel.jsx';
 import { useContext } from 'react'
 import Head from 'next/head'
 import ExhibitCard from '../../components/ExhibitCard/ExhibitCard.jsx';
 import Members from '../../components/Members/Members.jsx';

 const ProfileLayout = ({children}) => {
     return (
        <PageLayout>
            <ProfileLayoutContent />
        </PageLayout>
     )
 }

 const ProfileLayoutContent = ({children}) => {
    /* This is the component that actually does all the
    heavy lifting. I had to split it because only child
    components of PageLayout can access DataContext. */
    const {members, exhibits} = useContext(DataContext);

     return (
        <>
        <BackgroundAnimation />

        <main className={styles.main}>
        <Carousel>
            {exhibits.map(exhibit => {
            return <ExhibitCard exhibit={exhibit} />
            })
            }
        </Carousel>
        </main>

        <footer className={styles.footer}>
            <Members active="haidersamsara" members={members} />
        </footer>
        </>
     )
 }
 
 export default ProfileLayout;