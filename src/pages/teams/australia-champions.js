import { CaptainCard } from "@/components/CaptainCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerCard from "@/components/PlayerCard";
import TeamOwner from "@/components/TeamOwner";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";

const AustraliaChampions = ({
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
        player_name: "Brett Lee",
        player_type: "Bowler",
        player_jersey: "58",
        player_image:
          "/assets/images/players/australia-champions/brett-lee.webp",
      },
      {
        player_name: "Tim Paine",
        player_type: "Batsman",
        player_jersey: "36",
        player_image:
          "/assets/images/players/australia-champions/tim-paine.webp",
      },
      {
        player_name: "Shaun Marsh",
        player_type: "Batsman",
        player_jersey: "9",
        player_image:
          "/assets/images/players/australia-champions/shaun-marsh.webp",
      },
      {
        player_name: "Ben Cutting",
        player_type: "Batsman",
        player_jersey: "31",
        player_image:
          "/assets/images/players/australia-champions/ben-cutting.webp",
      },
      {
        player_name: "Ben Dunk",
        player_type: "Batsman",
        player_jersey: "51",
        player_image:
          "/assets/images/players/australia-champions/ben-dunk.webp",
      },
      {
        player_name: "Dirk Nannes",
        player_type: "Bowler",
        player_jersey: "29",
        player_image:
          "/assets/images/players/australia-champions/dirk-nannes.webp",
      },
      {
        player_name: "Dan Christian",
        player_type: "Batsman",
        player_jersey: "54",
        player_metric_1: "99",
        player_metric_2: "35",
        player_image:
          "/assets/images/players/australia-champions/dan-christian.webp",
      },
      {
        player_name: "Ben Laughlin",
        player_type: "Bowler",
        player_jersey: "55",
        player_image:
          "/assets/images/players/australia-champions/ben-laughlin.webp",
      },
      {
        player_name: "Aaron Finch",
        player_type: "Batsman",
        player_jersey: "5",
        player_image:
          "/assets/images/players/australia-champions/aaron-finch.webp",
      },
      {
        player_name: "John Hastings",
        player_type: "Bowler",
        player_jersey: "41",
        player_image:
          "/assets/images/players/australia-champions/john-hastings.webp",
      },
      {
        player_name: "Callum Ferguson",
        player_type: "Batsman",
        player_jersey: "12",
        player_image:
          "/assets/images/players/australia-champions/callum-fergusan.webp",
      },
      {
        player_name: "Peter Siddle",
        player_type: "Bowler",
        player_jersey: "64",
        player_image:
          "/assets/images/players/australia-champions/peter-siddle.webp",
      },
      {
        player_name: "Xavier Doherty",
        player_type: "Bowler",
        player_jersey: "3",
        player_image:
          "/assets/images/players/australia-champions/xavier-doherty.webp",
      },
      {
        player_name: "Nathan Coulter-Nile",
        player_type: "Bowler",
        player_jersey: "6",
        player_image:
          "/assets/images/players/australia-champions/nathan-coulter-nile.webp",
      },
    ],
    season2: [
      {
        player_name: "Brett Lee",
        player_type: "Bowler",
        player_jersey: "58",
        player_image:
          "/assets/images/players/australia-champions/brett-lee.webp",
        player_about: "One of the fastest bowlers in cricket history...",
      },
      {
        player_name: "Shaun Marsh",
        player_type: "Batsman",
        player_jersey: "9",
        player_image:
          "/assets/images/players/australia-champions/shaun-marsh.webp",
        player_about: "A classy left-handed batsman...",
      },
      {
        player_name: "CHRIS LYNN",
        player_type: "Batsman",
        player_jersey: "50",
        player_image:
          "/assets/images/players/australia-champions/ChrisLynn.png",
        player_about: "A dynamic opening batsman...",
      },
      {
        player_name: "MOISES HENDRICKS",
        player_type: "All rounder",
        player_jersey: "21",
        player_image:
          "/assets/images/players/australia-champions/Moesis.png",
        player_about: "A powerful all-rounder...",
      },
      {
        player_name: "Ben Cutting",
        player_type: "All Rounder",
        player_jersey: "31",
        player_image:
          "/assets/images/players/australia-champions/ben-cutting.webp",
        player_about: "A powerful all-rounder...",
      },
      {
        player_name: "D’Arcy Short",
        player_type: "Batsman",
        player_jersey: "23",
        player_image:
          "/assets/images/players/australia-champions/darcy-short.webp",
        player_about: "A dynamic opening batsman...",
      },
      {
        player_name: "Nathan Coulter-Nile",
        player_type: "Bowler",
        player_jersey: "6",
        player_image:
          "/assets/images/players/australia-champions/nathan-coulter-nile.webp",
        player_about: "A skilled fast bowler...",
      },
      {
        player_name: "Peter Siddle",
        player_type: "Bowler",
        player_jersey: "64",
        player_image:
          "/assets/images/players/australia-champions/peter-siddle.webp",
        player_about: "A veteran pacer known for accuracy...",
      },
      {
        player_name: "Callum Ferguson",
        player_type: "Batsman",
        player_jersey: "12",
        player_image:
          "/assets/images/players/australia-champions/callum-fergusan.webp",
        player_about: "A stylish middle-order batsman...",
      },
      {
        player_name: "Dan Christian",
        player_type: "All Rounder",
        player_jersey: "54",
        player_image:
          "/assets/images/players/australia-champions/dan-christian.webp",
        player_about: "A seasoned all-rounder...",
      },
      {
        player_name: "Ben Dunk",
        player_type: "Wicket Keeper",
        player_jersey: "51",
        player_image:
          "/assets/images/players/australia-champions/ben-dunk.webp",
        player_about: "A hard-hitting wicketkeeper-batsman...",
      },
      {
        player_name: "STEVE O'KEEFE",
        player_type: "Bowler",
        player_jersey: "72",
        player_image:
          "/assets/images/players/australia-champions/.webp",
        player_about: "One of the fastest bowlers in cricket history...",
      },
      {
        player_name: "ROB QUINEY",
        player_type: "Wicket Keeper",
        player_jersey: "12",
        player_image:
          "/assets/images/players/australia-champions/ROB_QUINEY.png",
        player_about: "A hard-hitting wicketkeeper-batsman...",
      },
      {
        player_name: "JOHN HASTINGS",
        player_type: "All rounder",
        player_jersey: "41",
        player_image:
          "/assets/images/players/australia-champions/jhon_hastings.png",
        player_about: "A powerful all-rounder...",
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
                <li>Australia Champions</li>
              </ul>
              <div className="page-headers">
                <div>Australia Champions</div>
              </div>
            </div>
            <div className="team-owners-container">
              <div className="team-owners">
                <div className="team-owner">
                  <TeamOwner
                    name="Mr. Puneet Singh"
                    image="/assets/images/team-owners/puneet-singh.webp"
                    about="Mr. Puneet Singh is a dynamic global entrepreneur with a visionary presence across finance, entertainment, and sports. As the owner of the Australia Champions in the World Championship of Legends (WCL), he brings unmatched passion and strategic leadership to the tournament. He is also the founder of ECL , and the co-owner of Punjab De Sher in the Celebrity Cricket League (CCL). With a deep-rooted love for the game and a sharp entrepreneurial spirit, he continues to redefine the landscape of sports and entertainment on a global scale. His commitment to WCL reflects his belief in celebrating cricketing legends and elevating the sport to new international heights."
                  />
                </div>
              </div>
            </div>
            <div className="my-10">
            <CaptainCard
              name="Brett Lee "
              type=""
              jersey=""
              about="Fast, fierce, and forever iconic—Cricketer Brett Lee is all set to bring his thunder back to the pitch as the WCL Australia Champions Team captain for Season 2 of the World Championship of Legends. Known for his searing pace and unstoppable energy, Brett Lee is a name that defined fast bowling in the early 2000s. And now, the legend returns to lead a powerful Australian squad, bringing fans a perfect blend of nostalgia and elite cricketing action.
              As the cricketing world gears up for the second edition of the WCL, there’s immense anticipation around the return of Cricketer Brett Lee, not just as a bowler, but as a leader—guiding the WCL Australia team into what promises to be a high-octane tournament between July 18 and August 2 in the UK."
              metric1=""
              metric2=""
              image="/assets/images/players/australia-champions/brett-lee.webp"
            />
            </div>
            <div className="team-squad">
              <h2>Australia Champions Squad - Team Overview</h2>
              <div className="season-switcher">
                <select
                  onChange={(event) => setSeason(event.target.value)}
                  defaultValue="2"
                >
                  <option value="1">Season 1</option>
                  <option value="2">Season 2</option>
                </select>
              </div>
              <div className="players-grid">
                {currentSquad.map((player, index) => {
                  const isBrettLee = player.player_name === "Brett Lee";
                  const card = (
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
                  );

                  return isBrettLee ? (
                    <Link
                      href="/brett-lee"
                      key={index}
                      style={{ textDecoration: "none" }}
                    >
                      {card}
                    </Link>
                  ) : (
                    <React.Fragment key={index}>{card}</React.Fragment>
                  );
                })}
              </div>

              <div className="team-fixtures">
                <h2>Australia Champions Fixtures - WCL T20</h2>
                <Link href="https://edgbaston.com/wcl" legacyBehavior>
                  <a>
                    <img
                      alt="logo"
                      src="/assets/images/fixtures/australia-fixture.jpg"
                    />
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/* ✅ This was missing! Closes .team-squad */}
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
          // grid-template-columns: repeat(3, 1fr);
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
        "Australia Champions | Australia Cricket Legends | WCL 2025 Team - WCL T20",
      meta_description:
        "Meet Australia Champions & Australia Cricket Legends in WCL 2025!",
      meta_keywords:
        "Australia Champions, Australia Legends, Australia Cricket Legends, Edgbaston, Northampton, WCL T20",
      page_content:
        "<h1>Australia Champions & Cricket Legends - WCL 2025 Team</h1><p>...</p>",
    },
  };
}

export default AustraliaChampions;
