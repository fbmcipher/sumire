/** This component displays the artist's bio and social links.
 *  Displayed on artists' profile page.
 */

import styles from './MemberBioCard.module.css';

/* Bios are stored as Markdown, so convert to HTML when display. */
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import Image from 'next/image';

const MemberBioCard = ({member}) => {
    return (
        <div className={styles.memberBioCard}>
            
            <div className={styles.content}>
                <div className={styles.memberPic} style={{
                    backgroundImage: `url(${member.imageSrc})`
                }}>
                </div>

                <div className={styles.memberName}>{member.name_full || member.name}</div>

                {member.bio ? 
                <div className={styles.memberBio}>
                    <Markdown>{member.bio}</Markdown>
                </div>
                : null }

                {member.links ? <MemberLinks member={member} /> : null}
            </div>

        </div>
    )
}

/* This component handles displaying social links. */
const MemberLinks = ({member}) => {
    return (
        <div className={styles.memberLinks}>
            {member.links.map(link => {
                const Icon = require('@material-ui/icons')[link.icon]
                
                return (
                    <Link href={link.href}>
                        <div className={styles.memberLink}>
                            <Icon />

                            <div className={styles.memberLinkUsername}>{link.username}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default MemberBioCard;