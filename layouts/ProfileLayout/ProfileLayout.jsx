/** ProfileLayout is the template for all profile pages.
 *  Extends CarouselLayout (which itself extends PageLayout)
 */

 import styles from './ProfileLayout.module.css';
 import istyles from '../../pages/index.module.css';
 import CarouselLayout from '../CarouselLayout/CarouselLayout.jsx';
 import cstyles from '../CarouselLayout/CarouselLayout.module.css';
 import DataContext from '../../contexts/DataContext.jsx';
 import Background from '../../components/Background/Background.jsx';
 import Carousel from '../../components/Carousel/Carousel.jsx';
 import { useContext } from 'react'
 import Head from 'next/head'
 import ExhibitCard from '../../components/ExhibitCard/ExhibitCard.jsx';
 import Members from '../../components/Members/Members.jsx';
 import Image from 'next/image';

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
    
    /* Now that we have the current username, we should be
       able to fetch the artist's object from DataContext! */
    
    const member = members.filter(member => member.username == currentUsername)[0];

     return (
        <>

        {member.backgroundSrc
            ?
            <Background className={styles.profileBackground}>
                <Image src={member.backgroundSrc} layout='fill' />
            </Background>
            :
        null}
        

        <main className={istyles.main}>
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

        <footer className={istyles.footer}>
            <Members active="haidersamsara" members={members} />
        </footer>
        </>
     )
 }
 
 export default ProfileLayout;