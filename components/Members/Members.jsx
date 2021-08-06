import styles from './Members.module.css';
import Image from 'next/image'
import { gsap } from "gsap";
import router, { useRouter } from 'next/router'

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
    
    const router = useRouter();

    /* don't do anything when clicked if disabled. otherwise, go to artist page when clicked. */
    let href = member.disabled ? '#' : `/@${member.username}`;

    const onClick = () => {
    
        if(document.querySelector('.profileBackground')){
            gsap.to('main', .25, { opacity: 0 });
            document.querySelector('.profileBackground').addEventListener('animationend', () => {
                document.querySelector('.profileBackground').classList.remove('out');
                router.push(href);
                gsap.to('main', .25, { opacity: 1 });
            })
            
            document.querySelector('.profileBackground').classList.add('out');
        } else {
            router.push(href);
        }

    }

    return (
        <div onClick={onClick} className={`${styles.member} ${isActive ? styles.active : null} ${member.disabled ? styles.disabled : null}`}>
            <div className={styles.memberImageContainer}>
                <Image src={member.imageSrc} width={64} height={64} className={styles.memberImage} disabled={member.disabled} />
            </div>
            <div className={styles.memberName}>{member.name}</div>
        </div>
    )
};

export default MembersContainer;