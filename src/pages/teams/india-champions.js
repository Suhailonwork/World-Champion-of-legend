import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerCard from "@/components/PlayerCard";
import TeamOwner from "@/components/TeamOwner";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";

const IndiaChampions = ({
  canonical_link,
  meta_title,
  meta_description,
  meta_keywords,
  page_content,
}) => {
  const [season, setSeason] = useState(2);
  const players = {
    season1: [
      {
        player_name: "Yuvraj Singh",
        player_type: "Batsman",
        player_jersey: "12",
        player_image:
          "/assets/images/players/india-champions/yuvraj-singh.webp",
      },
      {
        player_name: "Harbhajan Singh",
        player_type: "Bowler",
        player_jersey: "3",
        player_image:
          "/assets/images/players/india-champions/harbhajan-singh.webp",
      },
      {
        player_name: "Suresh Raina",
        player_type: "Batsman",
        player_jersey: "48",
        player_image:
          "/assets/images/players/india-champions/suresh-raina.webp",
      },
      {
        player_name: "Irfan Pathan",
        player_type: "Batsman",
        player_jersey: "56",
        player_image:
          "/assets/images/players/india-champions/irfan-pathan.webp",
      },
      {
        player_name: "Robin Uthappa",
        player_type: "Batsman",
        player_jersey: "14",
        player_image:
          "/assets/images/players/india-champions/robin-uthappa.webp",
      },
      {
        player_name: "Ambati Rayadu",
        player_type: "Batsman",
        player_jersey: "9",
        player_image:
          "/assets/images/players/india-champions/ambati-rayadu.webp",
      },
      {
        player_name: "Gurkeerat Mann",
        player_type: "Batsman",
        player_jersey: "8",
        player_image:
          "/assets/images/players/india-champions/gurkeerat-maan.webp",
      },
      {
        player_name: "Yusuf Pathan",
        player_type: "Batsman",
        player_jersey: "21",
        player_image:
          "/assets/images/players/india-champions/yusuf-pathan.webp",
      },
      {
        player_name: "Rahul Sharma",
        player_type: "Bowler",
        player_jersey: "27",
        player_image:
          "/assets/images/players/india-champions/rahul-sharma.webp",
      },
      {
        player_name: "Naman Ojha",
        player_type: "Batsman",
        player_jersey: "40",
        player_image: "/assets/images/players/india-champions/naman-ojha.webp",
      },
      {
        player_name: "Rahul Shukla",
        player_type: "Bowler",
        player_jersey: "",
        player_image:
          "/assets/images/players/india-champions/rahul-shukla.webp",
      },
      {
        player_name: "R P Singh",
        player_type: "Bowler",
        player_jersey: "9",
        player_image: "/assets/images/players/india-champions/rp-singh.webp",
      },
      {
        player_name: "Vinay Kumar",
        player_type: "Bowler",
        player_jersey: "",
        player_image: "/assets/images/players/india-champions/vinay-kumar.webp",
      },
      {
        player_name: "Dhawal Kulkarni",
        player_type: "Bowler",
        player_jersey: "91",
        player_image:
          "/assets/images/players/india-champions/dhawal-kulkarni.webp",
      },
      {
        player_name: "Anureet Singh",
        player_type: "Bowler",
        player_jersey: "33",
        player_image:
          "/assets/images/players/india-champions/anureet-singh.webp",
      },
      {
        player_name: "Pawan Negi",
        player_type: "Bowler",
        player_jersey: "15",
        player_image: "/assets/images/players/india-champions/pawan-negi.webp",
      },
    ],
    season2: [
      {
        player_name: "Yuvraj Singh",
        player_type: "All Rounder",
        player_jersey: "12",
        player_image:
          "/assets/images/players/india-champions/yuvraj-singh.webp",
        player_about:
          "A reliable all-rounder...",
      },
      {
        player_name: "SIKHAR DHAWAN",
        player_type: "Batsman",
        player_jersey: "42",
        player_image:
          "/assets/images/players/india-champions/shikhar-dhawan.webp",
        player_about:
          "A dynamic opening batsman...",
      },
      {
        player_name: "HARBHAJAN SINGH",
        player_type: "Bowler",
        player_jersey: "27",
        player_image:
          "/assets/images/players/india-champions/harbhajan-singh.webp",
        player_about:
          "A skilled fast bowler...",
      },
      {
        player_name: "SURESH RAINA",
        player_type: "All Rounder",
        player_jersey: "3",
        player_image:
          "/assets/images/players/india-champions/suresh-raina.webp",
        player_about:
          "A reliable all-rounder...",
      },
      {
        player_name: "IRFAN PATHAN",
        player_type: "All Rounder",
        player_jersey: "56",
        player_image:
          "/assets/images/players/india-champions/irfan-pathan.webp",
        player_about:
          "A reliable all-rounder...",
      },
      {
        player_name: "YUSUF PATHAN",
        player_type: "All Rounder",
        player_jersey: "28",
        player_image:
          "/assets/images/players/india-champions/yusuf-pathan.webp",
        player_about:
          "A reliable all-rounder...",
      },
      {
        player_name: "Piyush Chawla",
        player_type: "Bowler",
        player_jersey: "11",
        player_image:
          "/assets/images/players/india-champions/piyush-chawla.webp",
        player_about:
          "A seasoned leg-spinner with a knack for breaking partnerships, Piyush Chawla’s presence in WCL adds depth to the bowling attack. His variations make him a tough challenge for any batsman.",
      },
      {
        player_name: "Siddarth Kaul",
        player_type: "Bowler",
        player_jersey: "9",
        player_image:
          "/assets/images/players/india-champions/siddarth-kaul.webp",
        player_about:
          "A skilled fast bowler known for his accuracy and lethal yorkers, Siddarth Kaul’s ability to bowl in the death overs makes him an asset in WCL. His experience in T20 leagues gives him an edge in crucial moments.",
      },
      {
        player_name: "Robin Uthappa",
        player_type: "Batsman",
        player_jersey: "37",
        player_image:
          "/assets/images/players/india-champions/robin-uthappa.webp",
        player_about:
          "A stylish and aggressive batsman, Robin Uthappa’s ability to play big knocks at the top of the order makes him a key player in WCL. His versatility and experience make him a dependable match-winner.",
      },
      {
        player_name: "Abhimanyu Mithun",
        player_type: "Bowler",
        player_jersey: "25",
        player_image:
          "/assets/images/players/india-champions/abhimanyu-mithun.webp",
        player_about:
          "A determined fast bowler, Abhimanyu Mithun’s ability to generate pace and movement makes him a valuable asset in WCL. His aggressive bowling style helps build pressure on opposition batsmen.",
      },
      {
        player_name: "Stuart Binny",
        player_type: "All Rounder",
        player_jersey: "84",
        player_image:
          "/assets/images/players/india-champions/stuart-binny.webp",
        player_about:
          "A reliable all-rounder, Stuart Binny’s medium-pace bowling and ability to score crucial runs make him a key player in WCL. His ability to contribute in all departments adds balance to any team.",
      },
      {
        player_name: "Gurkeerat Mann",
        player_type: "All Rounder",
        player_jersey: "77",
        player_image:
          "/assets/images/players/india-champions/gurkeerat-maan.webp",
        player_about:
          "A dynamic batsman and a handy off-spinner, Gurkeerat Mann’s all-round skills add depth to WCL. His aggressive batting approach and ability to handle pressure make him a valuable middle-order player.",
      },
    ],
  };
  const currentSquad = players[`season${season}`];

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
            <div className="team-header-container">
              <ul>
                <li>Homepage &gt;</li>
                <li>Teams &gt;</li>
                <li>India Champions</li>
              </ul>
              <div className="page-headers">
                <div>India Champions</div>
              </div>
            </div>
            <div className="team-owners-container">
              <div className="team-owners">
                <div className="team-owner">
                  <TeamOwner
                    name="Mr. Sumant Bahl"
                    image="/assets/images/team-owners/sumant-bahl.webp"
                    about="Sumant Bahl has over 30 years of global media experience. Starting in 1994, he helped launch major TV channels in India, including Star Movies and Zee Cinema, and later HBO and Cartoon Network. In 2004, he moved to the UK to head Zee Europe's Distribution & Marketing, pioneering the use of mainstream media for Indian TV promotions. At 35, Sumant founded a TV media consultancy and advertising agency focused on ethnic Asian brands in the UK. He now runs his own entertainment business and is Managing Director for International Business at Travelxp HD & 4K, overseeing operations in 25 languages across 100 countries."
                  />
                </div>
                <div className="team-owner">
                  <TeamOwner
                    name="Mr. Jaspal Bahra"
                    image="/assets/images/team-owners/jaspal-bahra.webp"
                    about="Jaspal Bahra, a UK-born Indian, is a music enthusiast and financial specialist with over 18 years in investment banking, including roles at Barclays Wealth, HSBC Private Bank, J Morgan, Brewin Dolphin, and Wesleyan. FCA registered, his financial expertise and experience with Bollywood's top artists make him a successful entertainment businessman. Jaspal was the first Indian promoter to produce a recurring show at London's 02 Arena. In 2015, he co-founded Grace Entertainment with Sumant Bahl, producing over 100 shows across the UK, Europe, Australia, and New Zealand, featuring artists like Asha Bhosle, Rahat Fateh Ali Khan, Shreya Ghoshal, and Sonu Nigam."
                  />
                </div>
                <div className="team-owner">
                  <TeamOwner
                    name="Mr. Salman Ahmed"
                    image="/assets/images/team-owners/salman-ahmed.webp"
                    about="Salman Ahmed, a global entertainment icon since 1987, has promoted over 1500 live concerts, establishing himself as a top concert promoter. Beyond music, he has contributed to global peace and diplomacy, organizing the 2014 Nobel Peace Prize Concert, events for the UN General Assembly, and King Charles at Buckingham Palace. As a founding member of King Charles' British Asian Trust and Vice President of Barnardos, a UK children's charity, he is dedicated to philanthropy. His involvement with Oxford University's Music Faculty highlights his commitment to education. In 2022, Salman's PME Entertainment orchestrated a major pre-World Cup event in Qatar, drawing over 50,000 attendees, cementing his influence on the international stage."
                  />
                </div>
              </div>
            </div>
            <div className="team-squad">
              <h2>India Champions Squad - Team Overview</h2>
              <div className="season-switcher">
                <select onChange={(event) => setSeason(event.target.value)}>
                  <option value="1">Season 1</option>
                  <option value="2" selected>
                    Season 2
                  </option>
                </select>
              </div>
              <div className="players-grid">
                {currentSquad.map((player, index) => (
                  <PlayerCard
                    key={index}
                    name={player.player_name}
                    type={player.player_type}
                    jersey={player.player_jersey}
                    about={player.player_about}
                    metric1={player.player_metric_1}
                    metric2={player.player_metric_2}
                    image={player.player_image}
                  />
                ))}
              </div>
            </div>
            <div className="team-fixtures">
              <h2>India Champions Fixtures - WCL T20</h2>
              <Link href="https://edgbaston.com/wcl" legacyBehavior>
                <a>
                  <img
                    alt="logo"
                    src="/assets/images/fixtures/india-fixture.jpg"
                  />
                </a>
              </Link>
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
          margin-top: 80px;
        }

        .team-header-container {
          width: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .team-header-container ul {
          display: flex;
          gap: 5px;
          list-style: none;
        }

        .team-header-container ul li {
          color: #abb1cb;
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
          font-size: 25px;
          text-transform: uppercase;
          text-align: center;
        }

        .team-owners-container {
          width: 100%;
          max-width: 1280px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 100px;
          margin-top: 80px;
        }

        .team-owners {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          background-color: #27336d;
          padding: 15px;
          border-radius: 20px;
        }

        @media screen and (max-width: 1023px) {
          .team-owners {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .team-squad {
          width: 100%;
          max-width: 1280px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-top: 80px;
        }

        .team-squad h2 {
          color: #ffffff;
          font-family: "Poppins Bold";
          font-weight: 500;
          font-size: 30px;
          text-transform: uppercase;
        }

        .season-switcher select {
          -webkit-appearance: none;
          background-color: transparent;
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-size: 14px;
          text-transform: uppercase;
          border-bottom: solid 1px #ffffff;
          outline: none;
          border-radius: 0;
        }

        .players-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media screen and (max-width: 1023px) {
          .players-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;
          }
        }

        .team-fixtures {
          width: 100%;
          margin-top: 80px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .team-fixtures h2 {
          color: #ffffff;
          font-family: "Poppins Bold";
          font-weight: 500;
          font-size: 30px;
          text-transform: uppercase;
        }

        .team-fixtures img {
          width: 100%;
          border-radius: 20px;
          transition: all 0.5s;
        }

        .team-fixtures img:hover {
          transform: scale(0.99);
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps({ req }) {
  return {
    props: {
      canonical_link: `https://${req.headers.host}${req.url}`,
      meta_title:
        "India Champions | India Cricket Legends | WCL 2025 - WCL T20",
      meta_description:
        "Meet India Champions & India cricket legends in WCL 2025! See India’s iconic stars shine in the World Championship. Check it out!",
      meta_keywords:
        "India Champions, India Cricket Legends, India Legends,  Edgbaston, Northampton, WCL T20",
      page_content: `<h1>India Champions & Cricket Legends - WCL 2025 India Team</h1>
          <p>India Champions represent a cricket-obsessed nation, embodying resilience, technical brilliance, and an undying match-winning spirit. This team of India Cricket Legends carries forward the legacy of a country with a rich cricketing history. Their approach in WCL reflects India’s tradition of strategic depth and flamboyant stroke-play combined with competitive temperament.</p>
          <p>The India Champions are among the most formidable contenders in the <span class="link" href="/">World Championship of Legends Cricket</span>, playing with the discipline and pride their nation is known for. Each game, they aim to recreate the magic of India’s past world-beating performances, making them a fan-favourite in the tournament.</p>
          <h2>Upcoming India Champions Matches in 2025:</h2>
          <ul>
            <li><strong>20 July:</strong> India Champions vs <span class="link" href="/teams/pakistan-champions">Pakistan Champions</span></li>
            <li><strong>22 July:</strong> India Champions vs <span class="link" href="/teams/south-africa-champions">South Africa Champions</span></li>
            <li><strong>26 July:</strong> India Champions vs <span class="link" href="/teams/australia-champions">Australia Champions</span></li>
            <li><strong>29 July:</strong> India Champions vs <span class="link" href="/teams/england-champions">England Champions</span></li>
            <li><strong>31 July:</strong> India Champions vs <span class="link" href="/teams/west-indies-champions">West Indies Champions</span></li>
      </ul>`,
    },
  };
}

export default IndiaChampions;
