import Footer from '@/components/Footer';
import Header from '@/components/Header'
import TeamCard from '@/components/TeamCard'
import Head from 'next/head';
import React from 'react'

const Teams = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {
    const teams = [
        {
            team: "Australia Champions",
            logo: "/assets/images/team-logos/australia-logo.webp",
            href: "/teams/australia-champions"
        },
        {
            team: "England Champions",
            logo: "/assets/images/team-logos/england-logo.webp",
            href: "/teams/england-champions"
        },
        {
            team: "India Champions",
            logo: "/assets/images/team-logos/india-logo.webp",
            href: "/teams/india-champions"
        },
        {
            team: "South Africa Champions",
            logo: "/assets/images/team-logos/south-africa-logo.jpeg",
            href: "/teams/south-africa-champions"
        },
        {
            team: "West Indies Champions",
            logo: "/assets/images/team-logos/west-indies-logo.webp",
            href: "/teams/west-indies-champions"
        }
        , {
            team: "pakistan-champions",
            logo: "/assets/images/team-logos/pakistan-logo.webp",
            href: "/teams/pakistan-champions"
        }
    ];

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
                    <div className="teams-container">
                        <div className="teams-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Teams</li>
                            </ul>
                            <div className="page-headers">
                                <div>WCL Cricket Teams</div>
                            </div>
                        </div>
                        <div className="teams-grid">
                            {teams.map((team, index) => {
                                return (
                                    <TeamCard logo={team.logo} href={team.href} key={index}></TeamCard>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer pagecontent={page_content} />
            </div>

            <style jsx>{`
                .teams-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin-top: 80px;
                }

                .teams-header-container {
                    width: 100%;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .teams-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .teams-header-container ul li {
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

                .teams-grid {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }

                @media screen and (max-width: 1023px) {
                .teams-grid {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 20px;
                }
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "World Championship of Legends Cricket Teams List 2025: Full Squads Revealed - WCL T20",
            meta_description: "Explore the complete World Championship of Legends Cricket teams list for 2025! Check out the full squads, including star players like Yuvraj Singh, Shahid Afridi, and more, competing in this epic T20 tournament starting July 18, 2025, at Edgbaston Stadium.",
            meta_keywords: "World Championship of Legends Cricket teams list 2025, T20 tournament, Edgbaston, Northampton, WCL T20",
            page_content: `
              <h1>World Championship of Legends Cricket Teams List 2025</h1>
              <p>Meet the six champion squads of WCL 2025 on our Teams page. The World Championship of Legends Cricket Teams List features iconic teams representing the most storied cricketing nations. Each team is composed of revered former international players – true cricket legends who carry their nation’s legacy into this elite league. The World Championship of Legends Cricket Teams List below introduces all participating teams and provides a glimpse of their heritage and style:</p>
              <ul>
                <li><span href="/teams/india-champions">India Champions</span> – India’s team of legends</li>
                <li><span href="/teams/pakistan-champions">Pakistan Champions</span> – Pakistan’s team of legends</li>
                <li><span href="/teams/england-champions">England Champions</span> – England’s team of legends</li>
                <li><span href="/teams/australia-champions">Australia Champions</span> – Australia’s team of legends</li>
                <li><span href="/teams/west-indies-champions">West Indies Champions</span> – West Indies’ team of legends</li>
                <li><span href="/teams/south-africa-champions">South Africa Champions</span> – South Africa’s team of legends</li>
              </ul>
              <h2>Legendary Cricketers In WCL</h2>
              <p>Each WCL squad brings a unique playing style and rich history to the field, creating a diverse and competitive tapestry of cricketing nostalgia. From the subcontinent’s flair to the Caribbean’s charisma, the World Championship of Legends Cricket Teams List spans the globe. On their individual team pages, you’ll find full WCL 2025 team rosters, profiles of legendary captains, and insights into each squad’s strengths. Explore these pages to learn how each nation’s champions plan to dominate the league. Whether you’re browsing the World Championship of Legends Cricket Teams List as a new fan or a nostalgic supporter, you’ll appreciate the mix of talent and tradition each team contributes to WCL 2025.</p>
              <h2>Buy WCL Tickets 2025 Now</h2>
              <p>Ready to buy and purchase your World Championship of Legends (WCL) tickets for 2025? This is your chance to witness thrilling cricket action live! Start by visiting the official WCL website or trusted ticketing platforms. Browse the match schedule, featuring top teams battling it out from July 18, 2025, and pick your preferred game and venue. Next, select your tickets—choose the number you need and opt for seating sections like General, Premium, or VIP, depending on your budget and preference.</p>
              <p>Once you’ve made your choice, review the order summary to ensure everything’s spot-on—match date, seat selection, and ticket quantity. Then, proceed to checkout with secure payment options, including credit/debit cards, PayPal, UPI, or net banking. After a quick confirmation, your e-tickets will land in your inbox, ready to download or print.</p>
              <p>Don’t wait—purchasing WCL 2025 tickets early locks in the best seats and exclusive early bird discounts. Whether you’re a die-hard cricket fan or planning a fun outing, securing your spot now ensures you won’t miss a single boundary or wicket. Act fast, buy your WCL tickets today, and gear up for an unforgettable cricket season!</p>
            `
        }
    }
}

export default Teams
