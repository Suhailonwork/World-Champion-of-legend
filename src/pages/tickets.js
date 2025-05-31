import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const Tickets = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {

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
                    <div className="tickets-container">
                        <div className="tickets-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Tickets</li>
                            </ul>
                            <div className="page-headers">
                                <div>WCL Cricket Tickets</div>
                            </div>
                        </div>
                        <div className="tickets-grid">
                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-1-pak-eng.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-2-wi-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-3-eng-aus.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-4-ind-pak.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-5-ind-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-6-eng-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-7-aus-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-8-pak-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-9-eng-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-10-ind-aus.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-11-pak-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-12-aus-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-13-ind-eng.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-14-aus-pak.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-15-ind-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-16-sf1-sf4.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-17-sf2-sf3.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img alt="logo"src="/assets/images/tickets/match-18-f1-f2.webp" /></a>
                            </Link>

                        </div>
                    </div>
                </div>
                <Footer pagecontent={page_content} />
            </div>

            <style jsx>{`
            .tickets-container {
                width: 100%;
                max-width: 1280px;
                padding: 0 20px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 80px;
            }

            .tickets-header-container {
                width: 100%;
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .tickets-header-container ul {
                display: flex;
                gap: 5px;
                list-style: none;
            }

            .tickets-header-container ul li {
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
                text-align: center;
            }

            .container-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .container-header h1 {
                color: #ffffff;
                font-family: "Poppins Bold";
                font-weight: 500;
                font-size: 40px;
                text-transform: uppercase;
            }

            .tickets-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
            }

            @media screen and (max-width: 768px) {
            .tickets-grid {
                grid-template-columns: repeat(1, 1fr);
            }
            }

            .tickets-grid a img {
                width: 100%;
                cursor: pointer;
            }
      `}</style>
        </>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "WCL Tickets 2025 | Buy Season 2 Cricket Tickets Online | World Championship of Legends Cricket Ticket Booking - WCL T20",
            meta_description: "WCL Tickets 2025: Secure your spot for WCL Season 2! Buy tickets online for the World Championship of Legends 2025, featuring cricket legends in action. Easy cricket ticket booking for July 2025 matches at Edgbaston and Northampton. Don’t miss out—book now!",
            meta_keywords: "Buy tickets online, WCL season 2, WCL 2025, cricket ticket booking, wcl tickets northampton, wcl tickets Edgbaston, WCL T20",
            page_content: `
              <h1>WCL Tickets 2025 | Buy Tickets Online For WCL Season 2</h1>
              <p>Secure your chance to witness legends in action by grabbing your <span class="link" href="https://edgbaston.com/wcl">WCL Tickets 2025</span>. The World Championship of Legends offers fans a once-in-a-lifetime opportunity to see their heroes play live in stadiums across England. The 2025 season runs from 18th July to 2nd August, with matches hosted at four major venues: Edgbaston in Birmingham, County Ground in Northampton, Grace Road in Leicester, and Headingley in Leeds. Each of these world-class cricket grounds will come alive with the cheers of fans as legendary players return to competitive action. WCL Tickets 2025 are your entry into this festival of cricket nostalgia and high-octane T20 competition.</p>
              <h2>Purchase WCL Tickets Now</h2>
              <p>Getting your World Championship of Legends (WCL) 2025 tickets is a breeze! Start by hitting the <span class="link" href="https://edgbaston.com/wcl">“Get Tickets Now”</span> button on the official site. With matches kicking off on July 18, 2025, the excitement is building—don’t wait! Secure your spot today to snag the best seats and take advantage of exclusive early bird deals. Whether you’re after budget-friendly options or premium views, buying early ensures you don’t miss out on the action. Act now and join cricket fans worldwide for an epic <span class="link" href="/">WCL 2025 season</span>.</p>
              <h2>WCL 2025 Ticket Categories and Prices</h2>
              <p>Tickets are available in various categories to suit every fan’s experience. From affordable general admission seats that get you close to the passionate atmosphere, to premium hospitality and VIP packages offering luxury viewing and amenities – there’s something for everyone. <span class="link" href="https://edgbaston.com/wcl">WCL Tickets 2025</span> can be booked for individual match days or as season passes covering all 16 match days of action. Early booking is encouraged as seats are expected to sell out quickly.</p>  
              <p>Attending a WCL match is more than just watching cricket – it’s about being part of history. Each match day will feature not only the on-field battles between cricket legends but also entertainment such as the opening ceremony (headlined by Atif Aslam) and fan engagement activities. All WCL Tickets 2025 include access to these in-stadium experiences, making sure spectators get full value. Fans holding tickets might also get opportunities for player meet-and-greets or merchandise giveaways on select days, enhancing the overall excitement. Don’t miss out on the <span class="link" href="/">World Championship of Legends</span> – reserve your tickets early to secure your seat at one of the most celebrated cricket events of the year. <span class="link" href="https://edgbaston.com/wcl">WCL Tickets 2025</span> are on sale now, so book yours today and get ready to cheer for your legends live from the stands!</p>
              <h2>Grab your World Cricket League (WCL) tickets for 2025?</h2>
              <ul>
                <li>Here’s how! First, pick your tickets by choosing the desired quantity and seating area – General, Premium, or VIP – on the <span class="link" href="https://edgbaston.com/wcl">official WCL site</span> or trusted platforms.</li>
                <li>Then, double-check your order details in the summary to confirm accuracy.</li>
                <li>Proceed to payment, where you can safely use credit/debit cards, PayPal, or other accepted methods.</li>
                <li>After completing the transaction, expect a confirmation email with your e-tickets delivered instantly.</li>
                <li>Act fast to lock in your spot for an unforgettable <span class="link" href="/">WCL 2025</span> experience—seats sell out quickly!</li>
              </ul>
            `
        }
    }
}

export default Tickets;
