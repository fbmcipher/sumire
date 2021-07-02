import styles from './Members.module.css';
import Image from 'next/image'
import Link from 'next/link'

const Members = ({members, active})=>{
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
    return (
        <Link href={`/@${member.username}`}>
            <div className={`${styles.member} ${isActive ? styles.active : null}`}>
                <div className={styles.memberImageContainer}>
                    <Image src={member.imageSrc} width={64} height={64} className={styles.memberImage} />
                </div>
                <div className={styles.memberName}>{member.name}</div>
            </div>
        </Link>
    )
};

export default Members;