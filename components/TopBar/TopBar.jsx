/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import Link from 'next/link'
import styles from './TopBar.module.css';
import logoSrc from './img/logo.png';

const TopBar = props => {
    /**
     * Top bar for Sumire website.
     * As shown in the mockups, the top bar made up of two sections:
     * - left, containing logo, typemark and linksto navigate, and
     * - right, containing social links
     * the structure of TopBarSectionLeft and TopBarSectionRight change
     * (see CSS)
    */

    return (
        <header className={styles.topbar}>
            <div className={styles.topbarSectionLeft}>
                <TopBarLogo />
                <TopBarLinks />
            </div>

            <div className={styles.topbarSectionRight}>
                <div className={styles.topbarSocialLinks}>
                    <SocialLink name="instagram" href="javascript:alert('stubbed')" />
                    <SocialLink name="twitter" href="javascript:alert('stubbed')" />
                    <SocialLink name="tiktok" href="javascript:alert('stubbed')" />
                </div>
            </div>
        </header>
    )
}

const SocialLink = ({name, href})=> {
    /**
     * Represents a social link.
     * @property {string} name - social network name (i.e. facebook, instagram, snapchat...)
     * @property {string} href - where to link to
     */

    const socialLinkSrc = require(`./img/${name}.svg`);
    console.log(socialLinkSrc);
    return (
        <a className={styles.socialLink} href={href} aria-label={name}>
            <Image src={socialLinkSrc} focusable="false" width="24" height="24" />
        </a>
    )
}

const TopBarLinks = props => {
    /**
     * This component renders the links in the top bar — "about" & "store"
     */

    return (
        <nav className={styles.links}>
            <ol>
                <li>
                    <Link href='/about'>about</Link>
                </li>
                <li>
                    <Link href='/shop'>shop</Link>
                </li>
            </ol>
        </nav>
    )
}

const TopBarLogo = props => {
    /**
     * This component renders the Sumire logo and the "made by sumire" text.
     */

    return (
        <Link href="/">
            <div className={styles.logoContainer}>
                <div className={styles.logomark}>
                    <Image src={logoSrc} alt="sumire logo" width={144} height={144} />
                </div>
                <div className={styles.typemark}>made by sumire</div>
            </div>
        </Link>
    )
}

export default TopBar;