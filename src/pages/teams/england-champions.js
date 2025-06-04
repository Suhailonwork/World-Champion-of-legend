import { CaptainCard } from "@/components/CaptainCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerCard from "@/components/PlayerCard";
import TeamOwner from "@/components/TeamOwner";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";

const EnglandChampions = ({
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
        player_name: "Kevin Pietersen",
        player_type: "Batsman",
        player_jersey: "24",
        player_metric_1: "41",
        player_metric_2: "19",
        player_dob: "27 Jun",
        player_image:
          "/assets/images/players/england-champions/kevin-pietersen.webp",
      },
      {
        player_name: "Ravi Bopara",
        player_type: "Batsman",
        player_jersey: "42",
        player_image:
          "/assets/images/players/england-champions/ravi-bopara.webp",
      },
      {
        player_name: "Ian Bell",
        player_type: "Batsman",
        player_jersey: "7",
        player_image: "/assets/images/players/england-champions/ian-bell.webp",
      },
      {
        player_name: "Samit Patel",
        player_type: "Batsman",
        player_jersey: "21",
        player_image:
          "/assets/images/players/england-champions/samit-patel.webp",
      },
      {
        player_name: "Owais Shah",
        player_type: "Batsman",
        player_jersey: "",
        player_image:
          "/assets/images/players/england-champions/owais-shah.webp",
      },
      {
        player_name: "Phil Mustard",
        player_type: "Batsman",
        player_jersey: "52",
        player_image:
          "/assets/images/players/england-champions/phil-mustard.webp",
      },
      {
        player_name: "Sajid Mahmood",
        player_type: "Bowler",
        player_jersey: "19",
        player_image:
          "/assets/images/players/england-champions/sajid-mahmood.webp",
      },
      {
        player_name: "Chris Schofield",
        player_type: "Bowler",
        player_jersey: "30",
        player_image:
          "/assets/images/players/england-champions/chris-schofield.webp",
      },
      {
        player_name: "Ajmal Shahzad",
        player_type: "Bowler",
        player_jersey: "4",
        player_image:
          "/assets/images/players/england-champions/ajmal-shahzad.webp",
      },
      {
        player_name: "Ryan Sidebottom",
        player_type: "Bowler",
        player_jersey: "11",
        player_image:
          "/assets/images/players/england-champions/ryan-sidebottom.webp",
      },
      {
        player_name: "Usman Afzaal",
        player_type: "Bowler",
        player_jersey: "3",
        player_image:
          "/assets/images/players/england-champions/usman-afzaal.webp",
      },
      {
        player_name: "Stuart Meaker",
        player_type: "Bowler",
        player_jersey: "18",
        player_image:
          "/assets/images/players/england-champions/stuart-meaker.webp",
      },
      {
        player_name: "Kevin O’Brien",
        player_type: "Batsman",
        player_jersey: "22",
        player_image:
          "/assets/images/players/england-champions/kevin-obrien.webp",
      },
      {
        player_name: "Darren Maddy",
        player_type: "Batsman",
        player_jersey: "",
        player_image:
          "/assets/images/players/england-champions/darren-maddy.webp",
      },
      {
        player_name: "Alistair Brown",
        player_type: "Batsman",
        player_jersey: "23",
        player_image:
          "/assets/images/players/england-champions/alistair-brown.webp",
      },
    ],
    season2: [
      {
        player_name: "RYAN SIDEBOTTOM",
        player_type: "Bowler",
        player_jersey: "18",
        player_image:
          "/assets/images/players/england-champions/ryan-sidebottom.webp",
        player_about: "A genuine fast bowler...",
      },
      {
        player_name: "STUART MEAKER",
        player_type: "Bowler",
        player_jersey: "60",
        player_image:
          "/assets/images/players/england-champions/stuart-meaker.webp",
        player_about: "A genuine fast bowler...",
      },
      {
        player_name: "USMAN AFZAAL",
        player_type: "All rounder",
        player_jersey: "606",
        player_image:
          "/assets/images/players/england-champions/usman-afzaal.webp",
        player_about: "A dynamic all-rounder...",
      },
      {
        player_name: "Sir Alastair Cook",
        player_type: "Batsman",
        player_jersey: "26",
        player_image:
          "/assets/images/players/england-champions/alastair-cook.webp",
        player_about: "One of England’s greatest Test captains...",
      },
      {
        player_name: "Moeen Ali",
        player_type: "All Rounder",
        player_jersey: "18",
        player_image: "/assets/images/players/england-champions/moeen-ali.webp",
        player_about: "A dynamic all-rounder...",
      },
      {
        player_name: "Eoin Morgan",
        player_type: "Batsman",
        player_jersey: "16",
        player_image:
          "/assets/images/players/england-champions/eoin-morgan.webp",
        player_about:
          "The mastermind behind England’s white-ball revolution...",
      },
      {
        player_name: "Ravi Bopara",
        player_type: "All Rounder",
        player_jersey: "42",
        player_image:
          "/assets/images/players/england-champions/ravi-bopara.webp",
        player_about: "A versatile all-rounder...",
      },
      {
        player_name: "Samit Patel",
        player_type: "All Rounder",
        player_jersey: "21",
        player_image:
          "/assets/images/players/england-champions/samit-patel.webp",
        player_about: "A seasoned all-rounder...",
      },
      {
        player_name: "Phil Mustard",
        player_type: "Wicket Keeper",
        player_jersey: "52",
        player_image:
          "/assets/images/players/england-champions/phil-mustard.webp",
        player_about: "A hard-hitting wicketkeeper-batsman...",
      },
      {
        player_name: "Liam Plunkett",
        player_type: "Bowler",
        player_jersey: "29",
        player_image:
          "/assets/images/players/england-champions/liam-plunkett.webp",
        player_about: "A genuine fast bowler...",
      },
      {
        player_name: "Chris Tremlett",
        player_type: "Bowler",
        player_jersey: "33",
        player_image:
          "/assets/images/players/england-champions/chris-tremlett.webp", // FIXED name
        player_about: "Known for his intimidating height and raw pace...",
      },
      {
        player_name: "Ajmal Shahzad",
        player_type: "Bowler",
        player_jersey: "13",
        player_image:
          "/assets/images/players/england-champions/ajmal-shahzad.webp",
        player_about: "A skilled fast bowler...",
      },
      {
        player_name: "Ian Bell",
        player_type: "Batsman",
        player_jersey: "7",
        player_image: "/assets/images/players/england-champions/ian-bell.webp",
        player_about: "A stylish batsman...",
      },
      {
        player_name: "Tim Ambrose",
        player_type: "Wicket Keeper",
        player_jersey: "12",
        player_image:
          "/assets/images/players/england-champions/tim-ambrose.webp",
        player_about: "A reliable wicketkeeper-batsman...",
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
                <li>England Champions</li>
              </ul>
              <div className="page-headers">
                <div>England Champions</div>
              </div>
            </div>

            <div className="team-owners-container ">
              <div className="grid grid-cols-2 shadow-lg p-10 gap-10 text-justify rounded bg-[#27336d]">
                <div className="team-owner">
                  <TeamOwner
                    name="Mr. Praveen Sharma"
                    image="/assets/images/team-owners/praveen-sharma.webp"
                    about="Mr. Parveen Sharma is a visionary entrepreneur and the Founder & CEO of Meteora Developers, a company celebrated for its innovation and excellence in the UAE’s real estate landscape. With a legacy of remarkable achievements in the business world, he brings the same ambition, precision, and strategic mindset to the realm of sports. As the owner of the England Champions in the prestigious World Championship of Legends (WCL), Mr. Parveen has built a formidable team that mirrors his dedication to quality, performance, and lasting legacy. His deep-rooted passion for the game and commitment to honoring cricketing legends have made him a key driving force behind WCL’s global presence — positioning the England Champions as strong title contenders in this iconic tournament.
"
                  />
                </div>
                <div className="team-owner">
                  <TeamOwner
                    name="Mr. Omar Al Omour"
                    image="/assets/images/team-owners/omar-al-omar.webp"
                    about="Mr. Omar Al Omour is a forward-thinking entrepreneur and influential figure with a deep passion for sports and global entertainment. As one of the proud owners of the England Champions in the World Championship of Legends (WCL) - He plays a key role in shaping the team’s vision and success. With a sharp business acumen and a strong commitment to excellence, he brings fresh energy and strategic insight to the tournament. His involvement in WCL reflects not only his love for the game but also his dedication to elevating the platform of cricket legends on an international stage."
                  />
                </div>
              </div>
            </div>
            <div className="my-10">
            <CaptainCard
              name="Eoin Morgan "
              type=""
              jersey=""
              about="One of the most influential minds in modern cricket, Cricketer Eoin Morgan redefined leadership and reshaped how England played white-ball cricket. Now, he’s back—this time as the WCL England Champions Team captain for Season 2 of the World Championship of Legends, bringing with him that same bold mindset and calm presence. 
              As the WCL rolls into its second edition, from July 18 to August 2, cricket fans across the UK will once again witness legends in action. Among the brightest names is Cricketer Eoin Morgan, who will lead the home team across iconic "
              metric1=""
              metric2=""
              image="/assets/images/players/england-champions/eoin-morgan.webp"
            />
            </div>

            <div className="team-squad">
              <h2>England Champions Squad - Team Overview</h2>
              <div className="season-switcher">
                <select
                  value={season}
                  onChange={(event) => setSeason(Number(event.target.value))}
                >
                  <option value={1}>Season 1</option>
                  <option value={2}>Season 2</option>
                </select>
              </div>

       
              <div className="players-grid">
                {currentSquad.map((player, index) => {
                  const isEoinMorgan = player.player_name === "Eoin Morgan";

                  const card = (
                    <PlayerCard
                      key={index}
                      name={player.player_name}
                      type={player.player_type}
                      jersey={player.player_jersey}
                      about={player.player_about || ""}
                      image={player.player_image}
                    />
                  );

                  return isEoinMorgan ? (
                    <Link
                      href="/eoin-morgan"
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
            </div>

            <div className="team-fixtures">
              <h2>England Champions Fixtures - WCL T20</h2>
              <Link href="https://edgbaston.com/wcl">
                <img
                  alt="fixtures"
                  src="/assets/images/fixtures/england-fixture.jpg"
                />
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
        "England Champions | England Cricket Legends | WCL 2025 - WCL T20",
      meta_description:
        "Discover England Champions & England cricket legends in WCL 2025!",
      meta_keywords:
        "England Champions, England Cricket Legends, Edgbaston, WCL T20",
      page_content: `<h1>England Champions & Cricket Legends – WCL 2025 Team</h1>...`,
    },
  };
}

export default EnglandChampions;
