/** ProfileLayout is the template for all profile pages.
 *  Extends CarouselLayout (which itself extends PageLayout)
 */

 import styles from '../../pages/index.module.css';
 import CarouselLayout from '../CarouselLayout/CarouselLayout.jsx';
 import cstyles from '../CarouselLayout/CarouselLayout.module.css';
 import DataContext from '../../contexts/DataContext.jsx';
 import BackgroundAnimation from '../../components/BackgroundAnimation/BackgroundAnimation.jsx';
 import Carousel from '../../components/Carousel/Carousel.jsx';
 import { useContext } from 'react'
 import Head from 'next/head'
 import ExhibitCard from '../../components/ExhibitCard/ExhibitCard.jsx';
 import Members from '../../components/Members/Members.jsx';

 /* We use Next.js's router object to identify the profile
    page to display. */

 import { useRouter } from 'next/router'

 const ProfileLayout = ({children}) => {
     return (
        <CarouselLayout>
            <ProfileLayoutContent />
        </CarouselLayout>
     )
 }

 const ProfileLayoutContent = ({children}) => {
    /* This is the component that actually does all the
    heavy lifting. I had to split it because only child
    components of PageLayout can access DataContext. */
    const {members, exhibits} = useContext(DataContext);
    const { pathname } = useRouter();

    const currentUsername = pathname.replace('/@', '');

     return (
        <>
        <BackgroundAnimation />

        <main className={styles.main}>
        <Carousel>
            {
                /* Filter exhibits to only get ones
                   the current user has created
                   or collaborated on.
                   We do this by checking if the username appears in exhibit's
                   artists array.
                */
                
                exhibits.filter(exhibit => {
                    let { artists } = exhibit;
                    return (artists.filter(artist => artist.username == currentUsername)).length;
                }).map(exhibit => <ExhibitCard exhibit={exhibit} />)
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