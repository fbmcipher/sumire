import styles from './Members.module.css';
import Image from 'next/image'
import Link from 'next/link'

const MembersContainer = ({members, active}) => {
    return (
        <div className={styles.membersContainer}>
            <MembersContent members={members} active={active} />
        </div>
    )
}

const MembersContent = ({members, active})=>{
    return (
        <div className={styles.members}>
            {members.map((member, i) => {
                let isActive = (active == member.username);
                return <Member key={i} member={member} isActive={isActive} />
            })}
        </div>
    )
}

const Member = ({member, isActive}) => {
    
    /* don't do anything when clicked if disabled. otherwise, go to artist page when clicked. */
    let href = member.disabled ? '#' : `/@${member.username}`;

    return (
        <Link href={href}>
            <div className={`${styles.member} ${isActive ? styles.active : null} ${member.disabled ? styles.disabled : null}`}>
                <div className={styles.memberImageContainer}>
                    <Image src={member.imageSrc} width={64} height={64} className={styles.memberImage} disabled={member.disabled} />
                </div>
                <div className={styles.memberName}>{member.name}</div>
            </div>
        </Link>
    )
};

export default MembersContainer;