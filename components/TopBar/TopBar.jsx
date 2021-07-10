/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import Link from 'next/link'
import styles from './TopBar.module.css';
import logoSrc from './img/logo.png';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ArrowBack } from '@material-ui/icons'

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
                <TopBarLink href="/about">about</TopBarLink>
            </ol>
        </nav>
    )
}

const TopBarLink = ({children, href}) => {
    /* This component renders a <li> and <Link> elements for the given href.
       The <li> rendered gets the "active" class if the current path is the same
       as the one the link points to. */
    
    const { pathname } = useRouter();

    return (
        <li className={pathname == href ? styles.active : null}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

const TopBarLogo = props => {
    /**
     * This component renders the Sumire logo and the "made by sumire" text.
     */

     const { pathname } = useRouter();

    let showBackIcon = (pathname != '/')

    return (
        <Link href="/">
            <div className={styles.logoContainer}>
                <div className={classNames(styles.logomark, { showBackIcon })}>
                    <ArrowBack />
                    <div className={styles.logoImage}>
                        <Image src={logoSrc} alt="sumire logo" width={144} height={144} />
                    </div>
                </div>
                <div className={styles.typemark}>made by sumire</div>
            </div>
        </Link>
    )
}

export default TopBar;