import styles from './Members.module.css';
import Image from 'next/image'
import Link from 'next/link'

const Members = ({members})=>{
    return (
        <div className={styles.members}>
            {members.map((member, i) => {
                return <Member key={i} member={member} />
            })}
        </div>
    )
}

const Member = ({member}) => {
    return (
        <Link href={`/@${member.username}`}>
            <div className={styles.member}>
                <Image src={member.imageSrc} width={64} height={64} className={styles.memberImage} />
                <div className={styles.memberName}>{member.name}</div>
            </div>
        </Link>
    )
};

export default Members;