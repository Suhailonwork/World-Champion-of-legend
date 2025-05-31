import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {
    return (
        <>
            <Head>
                <title>{meta_title}</title>
                <link rel="canonical" href={canonical_link} />
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keywords} />
            </Head>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="about-container">
                        <div className="about-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>About</li>
                            </ul>
                            <div className="page-headers">
                                <div>About WCL Cricket Legends</div>
                            </div>
                        </div>
                        <div className="about-wcl">
                            <Image src="/assets/images/trophy.webp" width={100} height={280} />
                            <div>
                                <h2>War of Champions</h2>
                                <p>Edgbaston, the distinguished host of the World Championship of Legends (WCL) this summer. Immerse yourself in a riveting T20 tournament. Approved by the England & Wales Cricket Board (ECB), WCL unveils a stellar showcase of retired and non-contracted players from cricketing giants, including England, India, Pakistan, Australia, West Indies, and South Africa. Join us for an unforgettable celebration of cricket’s living legends.</p>
                            </div>
                        </div>
                        <div className="about-wcl-bollywood">
                            <div>
                                <h2>Meet the League Owners</h2>
                                <p>Leading the World Championship of Legends (WCL) is a visionary leadership team dedicated to redefining the sport. Mr. Ajay Devgn, Bollywood icon and co-owner of WCL and Mr. Harshit Tomar, founder and owner of WCL, bring together their unmatched expertise in entertainment, business, and sports to make WCL a premier platform for cricket legends.</p>
                            </div>
                            <div className="bollywood-owners">
                                <Link href={"/owner/ajay-devgn"}>
                                    <div className="wcl-owner" style={{ backgroundImage: "url('/assets/images/owners/ajay-devgn.webp')" }}>
                                        <div>
                                            <h2>Ajay Devgn</h2>
                                            <p>Co-Owner</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"/owner/harshit-tomar"}>
                                    <div className="wcl-owner" style={{ backgroundImage: "url('/assets/images/owners/harshit-tomar.webp')" }}>
                                        <div>
                                            <h2>Harshit Tomar</h2>
                                            <p>Founder & CEO</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer pagecontent={page_content} />
            </div>

            <style jsx>{`
            .about-container {
                width: 100%;
                max-width: 1280px;
                padding: 0 20px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 80px;
            }

            .about-header-container {
                width: 100%;
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .about-header-container ul {
                display: flex;
                gap: 5px;
                list-style: none;
            }

            .about-header-container ul li {
                color: #ABB1CB;
                font-family: "Poppins Regular";
                font-size: 14px;
                text-transform: uppercase;
            }

            .page-headers {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .page-headers div {
                color: #ffffff;
                font-family: "Poppins Semibold";
                font-weight: 500;
                font-size: 30px;
                letter-spacing: .-04em;
                text-transform: uppercase;
            }

            .about-wcl {
                width: 100%;
                max-width: 720px;
                padding: 0 20px;
                margin: 50px auto 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 80px;
            }

            .about-wcl img {
                margin: auto;
            }

            .about-wcl div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .about-wcl div h2 {
                color: #ffffff;
                font-family: "Poppins Semibold";
                text-align: center;
            }

            .about-wcl div p {
                color: #D3D3D3;
                font-family: "Poppins Light";
                font-weight: 500;
                text-align: center;
            }

            .about-wcl-bollywood {
                width: 100%;
                max-width: 720px;
                padding: 0 20px;
                margin: 150px auto 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 50px;
            }

            .about-wcl-bollywood div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .about-wcl-bollywood div h2 {
                color: #ffffff;
                font-family: "Poppins Semibold";
x                text-transform: uppercase;
                text-align: center;
            }

            .about-wcl-bollywood div p {
                color: #D3D3D3;
                font-family: "Poppins Light";
                font-weight: 500;
                text-align: center;
            }

            .bollywood-owners {
                width: 100%;
                display: grid !important;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

            @media screen and (max-width: 768px) {
            .bollywood-owners {
                grid-template-columns: repeat(1, 1fr);
            }
            }

            .wcl-owner {
                width: 100%;
                height: 320px;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                border-radius: 20px;
                display: flex;
                padding: 15px;
                position: relative;
            }

            @media screen and (max-width: 768px) {
            .wcl-owner {
                height: 480px;
            }
            }

            .wcl-owner:after {
                content: "";
                height: 100%;
                width: 100%;
                background-color: #00000050;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 20px;
            }

            .wcl-owner div {
                display: flex;
                flex-direction: column;
                gap: 4px;
                margin-top: auto;
                margin-right: auto;
            }

            .wcl-owner h2 {
                margin: auto auto 0 0;
                color: #D3D3D3;
                font-family: "Poppins Regular" !important;
                font-size: 15px;
                letter-spacing: .02em;
                text-transform: uppercase;
                z-index: 1;
            }

            .wcl-owner p {
                margin: auto auto 0 0;
                color: #D3D3D3;
                font-family: "Poppins Light" !important;
                font-size: 12px;
                letter-spacing: .02em;
                text-transform: uppercase;
                z-index: 1;
            }
      `}</style>
        </>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "WCL Cricket 2025 | World Championship of Legends - WCL T20",
            meta_description: "Learn about WCL Cricket 2025! Discover the World Championship of Legends, its stars & mission at Edgbaston. Explore now!",
            meta_keywords: "WCL Cricket 2025, World Championship of Legends, Edgbaston, Northampton, WCL T20",
            page_content: `
              <h1>WCL Cricket 2025 | World Championship of Legends</h1>
              <p>The <span class="link" href="/">World Championship of Legends (WCL)</span> is a premium international cricket league where retired, non-contracted international players return to competitive T20 cricket. Designed to blend nostalgia with professional-grade competition, WCL creates a global stage where legends represent their nations once more.</p>
              <p>WCL is officially approved by the England and Wales Cricket Board (ECB)—making it the only legends league in the world recognized by a cricket board of a test playing nation. This endorsement ensures WCL upholds the highest standards of cricketing professionalism and integrity.</p>
              <p>WCL’s inaugural edition in 2024 established the league as the second-most-watched cricket tournament globally, with over <strong>325 million viewers</strong>. Its expansion to four UK cities in 2025—Edgbaston (Birmingham), County Ground (Northampton), Grace Road (Leicester), and Headingley (Leeds)—further elevates WCL as the world’s premier legends cricket league.</p>
              <p>With star-studded squads featuring cricketing greats like Yuvraj Singh, Kevin Pietersen, Shahid Afridi, and Chris Gayle, WCL 2025 is set to deliver iconic moments, passionate rivalries, and electric atmospheres. From high-octane matches to fan engagement, WCL redefines cricket entertainment for global fans while honouring its legendary past.</p>
              <p>Whether you're a lifelong fan reliving golden memories or a new viewer discovering cricket's greats, WCL Cricket 2025 promises unforgettable action, legacy, and celebration of the sport.</p>
            `
        }
    }
}

export default About
