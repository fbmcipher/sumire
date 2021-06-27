/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import logoSrc from './logo.png';

const TopBar = props => {
    /**
     * Top bar for Sumire website.
     * As shown in the mockups, the top bar made up of two sections:
     * - left, containing logo, typemark and linksto navigate, and
     * - right, containing social links
     * the structure of TopBarSectionLeft and TopBarSectionRight change
     * based on screen width, but that's a story for those components :p
    */

    return (
        <header className="top-bar">
            <TopBarSectionLeft />
            <TopBarSectionRight />
        </header>
    )
}

const TopBarSectionLeft = props => {
    /**
     * Left part of the Top Bar.
     * Contains logo, typemark, and links.
     * Changes based on screen width. In smallest form, logo, typemark and navigation links are all vertical-stacked.
     * In medium form, logo and typemark are v-stacked but navigation links are separated horizontally.
     * In large form, logo, typemark and navigation links are h-stacked
     */

    return (
        <div className="top-bar__section-left">
            <TopBarLogo />
        </div>

    )
}

const TopBarSectionRight = props => {
    /**
     * Right part of the Top Bar. Contains social links.
     */

    return (<div>
        <h1>foo</h1>
    </div>)
}

const TopBarLogo = props => {
    /**
     * This component renders the Sumire logo and the "made by sumire" text.
     */

    return (
        <div className="top-bar__logo">
            <Image src={logoSrc} alt="sumire logo" width={144} height={144} />
        </div>
    )
}

export default TopBar;