import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const router = useRouter();

    return (
        <>
            <header>
                <div className="announcement-bar">
                    <div className="marquee">
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                        <p>WCL SEASON 2 TICKETS ARE OUT&nbsp; • &nbsp;</p>
                    </div>
                </div>
                <div className="header-container">
                    <ul className="nav-menu-left">
                        <li><Link href="/news" legacyBehavior><a className={router.pathname === "/news" ? "active" : ""}>News</a></Link></li>
                        <li><Link href="/videos" legacyBehavior><a className={router.pathname === "/videos" ? "active" : ""}>Videos</a></Link></li>
                        <li><Link href="/gallery" legacyBehavior><a className={router.pathname === "/gallery" ? "active" : ""}>Gallery</a></Link></li>
                        <li><Link href="/teams" legacyBehavior><a className={router.pathname === "/teams" ? "active" : router.route.includes("/teams") ? "active" : ""}>Teams</a></Link></li>
                        <li><Link href="/#standings" legacyBehavior><a>Standings</a></Link></li>
                        <li><Link href="/tickets" legacyBehavior><a className={router.pathname === "/tickets" ? "active" : ""}>Tickets</a></Link></li>
                        <li><Link href="/Venues" legacyBehavior><a className={router.pathname === "/Venues" ? "active" : ""}>Venues</a></Link></li>
                    </ul>
                    <Link href="/" legacyBehavior><a><Image src="/assets/images/wcl-logo.webp" width={70} height={70} /></a></Link>
                    <ul className="nav-menu-right">
                        <li><Link href="https://youtube.com/@wclcricket?si=sleF4WtjnMLN8UAk" legacyBehavior><a className={router.pathname === "/Youtube" ? "active" : ""}>Youtube</a></Link></li>
                        <li><Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link></li>
                        <li><Link href="/contact" legacyBehavior><a className={router.pathname === "/contact" ? "active" : ""}>Contact</a></Link></li>
                        <li><Link href="/partners" legacyBehavior><a className={router.pathname === "/partners" ? "active" : ""}>Partners</a></Link></li>
                        <li><Link href="https://www.instagram.com/worldchampionshipoflegends" legacyBehavior><a>Instagram</a></Link></li>
                        <li><Link href="https://www.facebook.com/@worldchampionshipoflegends/?mibextid=ZbWKwL" legacyBehavior><a>Facebook</a></Link></li>
                        <li><Link href="https://x.com/wclleague" legacyBehavior><a>X</a></Link></li>
                    </ul>
                    <div className="hamburger" onClick={() => { setMobileMenu(!mobileMenu) }}>
                        {
                            mobileMenu ?
                                "Close"
                                :
                                "Menu"
                        }
                    </div>
                    {
                        mobileMenu ?
                            <div className="mobile-menu">
                                <ul>
                                    <li><Link href="/news" legacyBehavior><a className={router.pathname === "/news" ? "active" : ""}>News</a></Link></li>
                                    <li><Link href="/videos" legacyBehavior><a className={router.pathname === "/videos" ? "active" : ""}>Videos</a></Link></li>
                                    <li><Link href="/gallery" legacyBehavior><a className={router.pathname === "/gallery" ? "active" : ""}>Gallery</a></Link></li>
                                    <li><Link href="/teams" legacyBehavior><a className={router.pathname === "/teams" ? "active" : router.route.includes("/teams") ? "active" : ""}>Teams</a></Link></li>
                                    <li onClick={() => { setMobileMenu(false) }}><Link href="/#standings" legacyBehavior><a>Standings</a></Link></li>
                                    <li><Link href="/tickets" legacyBehavior><a className={router.pathname === "/tickets" ? "active" : ""}>Tickets</a></Link></li>
                                    <li><Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link></li>
                                    <li><Link href="/contact" legacyBehavior><a className={router.pathname === "/contact" ? "active" : ""}>Contact</a></Link></li>
                                    <li><Link href="/partners" legacyBehavior><a className={router.pathname === "/partners" ? "active" : ""}>Partners</a></Link></li>
                                    <li><Link href="https://www.instagram.com/worldchampionshipoflegends" legacyBehavior><a>Instagram</a></Link></li>
                                    <li><Link href="https://www.facebook.com/@worldchampionshipoflegends/?mibextid=ZbWKwL" legacyBehavior><a>Facebook</a></Link></li>
                                    <li><Link href="https://x.com/wclleague" legacyBehavior><a>X</a></Link></li>
                                </ul>
                            </div>
                            :
                            ""
                    }
                </div>
            </header>

            <style jsx>{`
                header {
                    width: 100%;
                    height: 130px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                    background-color: #2D3B7D;
                }

                .announcement-bar {
                    width: 100%;
                    height: 30px;
                    background-color: #DAB072;
                    display: inline-flex;
                    white-space: nowrap;
                    overflow: hidden;
                }

                .announcement-bar p {
                    display: inline-flex;
                    white-space: nowrap;
                    gap: 5px;
                    margin: auto; 
                    color: #2D3B7D;
                    font-family: "Poppins Regular";
                    font-size: 14px;
                    line-height: 2rem;
                    letter-spacing: -.04em;
                    text-transform: uppercase;
                    animation: announcement 10s linear infinite;
                }

                @keyframes announcement {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                header .header-container {
                    width: 100%;
                    max-width: 1280px;
                    margin: auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                header ul {
                    width: 45%;
                    display: flex;
                    gap: 20px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                @media screen and (max-width: 1023px) {
                    header ul {
                        display: none;
                    }
                }

                header ul.nav-menu-right {
                    justify-content: flex-end;
                }

                header ul li {
                    font-family: "Poppins Medium";
                    font-size: 14px;
                    text-transform: uppercase;
                }

                header ul li a {
                    color: #ABB1CB;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                header ul li {
                    color: #ABB1CB;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                header ul li a.active {
                    color: #fff;
                }

                header ul li a:hover {
                    color: #fff;
                }

                header img {
                    width: 80px;
                }

                .hamburger {
                    display: none;
                }
                
                @media screen and (max-width: 1023px) {
                .hamburger {
                    display: flex;
                    font-family: "Poppins Regular";
                    font-size: 18px;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .mobile-menu {
                    display: none;
                }

                @media screen and (max-width: 1023px) {
                .mobile-menu {
                    width: 100%;
                    height: calc(100% - 130px);
                    padding: 20px;
                    background-color: #2D3B7D;
                    display: flex;
                    position: fixed;
                    top: 130px;
                    left: 0;
                }

                .mobile-menu ul {
                    display: flex;
                    flex-direction: column;
                }

                .mobile-menu ul li {
                    width: max-content;
                    font-size: 20px;
                }
                }
            `}</style>
        </>
    )
}

export default Header
