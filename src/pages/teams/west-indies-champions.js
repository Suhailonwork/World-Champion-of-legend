import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerCard from "@/components/PlayerCard";
import TeamOwner from "@/components/TeamOwner";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";

const WestIndiesChampions = ({
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
        player_name: "Chris Gayle",
        player_type: "Batsman",
        player_jersey: "33",
        player_image:
          "/assets/images/players/west-indies-champions/chris-gayle.webp",
      },
      {
        player_name: "Darren Sammy",
        player_type: "Batsman",
        player_jersey: "88",
        player_image:
          "/assets/images/players/west-indies-champions/darren-sammy.webp",
      },
      {
        player_name: "Samuel Badree",
        player_type: "Bowler",
        player_jersey: "77",
        player_image:
          "/assets/images/players/west-indies-champions/samuel-badree.webp",
      },
      {
        player_name: "Tino Best",
        player_type: "Bowler",
        player_jersey: "36",
        player_image:
          "/assets/images/players/west-indies-champions/tino-best.webp",
      },
      {
        player_name: "Rayad Rayan",
        player_type: "Bowler",
        player_jersey: "",
        player_image:
          "/assets/images/players/west-indies-champions/rayad-rayan.webp",
      },
      {
        player_name: "Jason Mohammed",
        player_type: "Bowler",
        player_jersey: "3",
        player_image:
          "/assets/images/players/west-indies-champions/jason-mohammed.webp",
      },
      {
        player_name: "Navin Stewart",
        player_type: "Bowler",
        player_jersey: "25",
        player_image:
          "/assets/images/players/west-indies-champions/navin-stewart.webp",
      },
      {
        player_name: "Ashley Nurse",
        player_type: "Batsman",
        player_jersey: "5",
        player_image:
          "/assets/images/players/west-indies-champions/ashley-nurse.webp",
      },
      {
        player_name: "Dwayne Smith",
        player_type: "Batsman",
        player_jersey: "50",
        player_image:
          "/assets/images/players/west-indies-champions/dwayne-smith.webp",
      },
      {
        player_name: "Suleiman Benn",
        player_type: "Bowler",
        player_jersey: "62",
        player_image:
          "/assets/images/players/west-indies-champions/suleiman-benn.webp",
      },
      {
        player_name: "Chadwick Walton",
        player_type: "Batsman",
        player_jersey: "59",
        player_image:
          "/assets/images/players/west-indies-champions/chadwick-walton.webp",
      },
      {
        player_name: "Jerome Taylor",
        player_type: "Bowler",
        player_jersey: "75",
        player_image:
          "/assets/images/players/west-indies-champions/jerome-taylor.webp",
      },
      {
        player_name: "Fidel Edwards",
        player_type: "Bowler",
        player_jersey: "20",
        player_image:
          "/assets/images/players/west-indies-champions/fidel-edwards.webp",
      },
      {
        player_name: "Kirk Edwards",
        player_type: "Batsman",
        player_jersey: "30",
        player_image:
          "/assets/images/players/west-indies-champions/kirk-edwards.webp",
      },
    ],
    season2: [
      {
        player_name: "CHADWICK WALTON",
        player_type: "Batsman",
        player_jersey: "59",
        player_image:
          "/assets/images/players/west-indies-champions/chadwick-walton.webp",
        player_about:
          "A hard-hitting wicketkeeper-batsman...",
      },
      {
        player_name: "DAVE MOHAMMED",
        player_type: "Bowler",
        player_jersey: "777",
        player_image:
          "/assets/images/players/west-indies-champions/.webp",
        player_about:
          "A skilled fast bowler...",
      },
      {
        player_name: "FIDEL EDWARDS",
        player_type: "Bowler",
        player_jersey: "50",
        player_image:
          "/assets/images/players/west-indies-champions/fidel-edwards.webp",
        player_about:
          "A skilled fast bowler...",
      },
      {
        player_name: "PERKINS WILLIAM",
        player_type: "Wicket Keeper",
        player_jersey: "40",
        player_image:
          "/assets/images/players/west-indies-champions/.webp",
        player_about:
          "A reliable wicketkeeper-batsman...",
      },
      {
        player_name: "SULIEMAN BENN",
        player_type: "Bowler",
        player_jersey: "62",
        player_image:
          "/assets/images/players/west-indies-champions/suleiman-benn.webp",
        player_about:
          "A skilled fast bowler...",
      },
      {
        player_name: "Dwayne Smith",
        player_type: "Batsman",
        player_jersey: "50",
        player_image:
          "/assets/images/players/west-indies-champions/dwayne-smith.webp",
        player_about:
          "A destructive opening batsman, Dwayne Smith’s powerful hitting and ability to provide quick starts make him a thrilling player in WCL. His part-time medium pace adds versatility to any squad.",
      },
      {
        player_name: "Sheldon Cottrell",
        player_type: "Bowler",
        player_jersey: "19",
        player_image:
          "/assets/images/players/west-indies-champions/sheldon-cottrell.webp",
        player_about:
          "Known for his left-arm pace and trademark salute celebration, Sheldon Cottrell’s ability to swing the ball and bowl fiery spells makes him a dangerous bowler in WCL.",
      },
      {
        player_name: "Lendl Simmons",
        player_type: "Batsman",
        player_jersey: "54",
        player_image:
          "/assets/images/players/west-indies-champions/lendl-simmons.webp",
        player_about:
          "A proven match-winner, Lendl Simmons’ ability to accelerate innings and play impactful knocks makes him a key figure in WCL. His T20 experience strengthens any batting lineup.",
      },
      {
        player_name: "Ashley Nurse",
        player_type: "All Rounder",
        player_jersey: "5",
        player_image:
          "/assets/images/players/west-indies-champions/ashley-nurse.webp",
        player_about:
          "A crafty off-spinner and a handy lower-order batsman, Ashley Nurse’s ability to contain runs and take key wickets makes him a valuable all-rounder in WCL.",
      },
      {
        player_name: "Devendra Bishoo",
        player_type: "Bowler",
        player_jersey: "70",
        player_image:
          "/assets/images/players/west-indies-champions/devendra-bishoo.webp",
        player_about:
          "A skillful leg-spinner, Devendra Bishoo’s sharp turn and deceptive variations make him a formidable bowler in WCL. His ability to outfox batsmen is a major asset.",
      },
      {
        player_name: "Shivnarine Chanderpaul",
        player_type: "Batsman",
        player_jersey: "16",
        player_image:
          "/assets/images/players/west-indies-champions/shivnarine-chanderpaul.webp",
        player_about:
          "One of the most resilient batsmen in cricket history, Shivnarine Chanderpaul’s unorthodox technique and ability to anchor innings bring immense experience to WCL.",
      },
      {
        player_name: "Shannon Gabriel",
        player_type: "Bowler",
        player_jersey: "85",
        player_image:
          "/assets/images/players/west-indies-champions/shannon-gabriel.webp",
        player_about:
          "A fast bowler known for his express pace and aggressive approach, Shannon Gabriel’s ability to generate bounce and trouble batsmen makes him a lethal force in WCL.",
      },
      {
        player_name: "Dwayne Bravo",
        player_type: "All Rounder",
        player_jersey: "47",
        player_image:
          "/assets/images/players/west-indies-champions/dwayne-bravo.webp",
        player_about:
          "A T20 legend, Dwayne Bravo’s dynamic all-round abilities make him a showstopper in WCL. His ability to finish games with the bat and bowl crucial death overs makes him an invaluable asset.",
      },
      {
        player_name: "Ravi Rampaul",
        player_type: "Bowler",
        player_jersey: "11",
        player_image:
          "/assets/images/players/west-indies-champions/ravi-rampaul.webp",
        player_about:
          "An experienced fast bowler, Ravi Rampaul’s ability to swing the ball and pick up key wickets makes him a dependable option in WCL. His international experience adds strength to the bowling unit.",
      },
      {
        player_name: "Chris Gayle",
        player_type: "Batsman",
        player_jersey: "333",
        player_image:
          "/assets/images/players/west-indies-champions/chris-gayle.webp",
        player_about:
          'The "Universe Boss", Chris Gayle’s record-breaking six-hitting ability makes him one of the biggest attractions in WCL. His explosive batting at the top can single-handedly win games.',
      },
      {
        player_name: "Kieron Pollard",
        player_type: "All Rounder",
        player_jersey: "55",
        player_image:
          "/assets/images/players/west-indies-champions/kieron-pollard.webp",
        player_about:
          "A powerful all-rounder, Kieron Pollard’s brutal hitting and crucial medium-pace bowling make him a game-changer in WCL. His leadership and experience in global leagues add immense value to any team.",
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
                <li>West Indies Champions</li>
              </ul>
              <div className="page-headers">
                <div>West Indies Champions</div>
              </div>
            </div>
            <div className="team-owners-container">
              <div className="team-owners">
                <div className="team-owner">
                  <TeamOwner
                    name="Mr.Ajay Sethi"
                    image="/assets/images/team-owners/ajay-sethi.webp"
                    about="The proud owner of the West Indies Champions Cricket Team, is the Chairman of Channel 2 Group Corporation. While he is driven by the thrill of running businesses and emerging victoriously as a market leader, he also believes deeply that his remarkable success was destined, making him the humble yet inspiring figure he is today. The tycoon is the quintessential picture of rising in the world through a keen eye for trends and using one's wits to transform an opportunity into a triumph."
                  />
                </div>
              </div>
            </div>
            <div className="team-squad">
              <h2>West Indies Champions Squad - Team Overview</h2>
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
                    image={player.player_image}
                  />
                ))}
              </div>
            </div>
            <div className="team-fixtures">
              <h2>West Indies Champions Fixtures - WCL T20</h2>
              <Link href="https://edgbaston.com/wcl" legacyBehavior>
                <a>
                  <img
                    alt="logo"
                    src="/assets/images/fixtures/west-indies-fixture.jpg"
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
          grid-template-columns: repeat(1, 1fr);
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
        "West Indies Champions | West Indies Cricket Legends | WCL 2025 - WCL T20",
      meta_description:
        "See West Indies Champions & West Indies cricket legends in WCL 2025! Iconic WI stars shine in the World Championship. Check it out!",
      meta_keywords:
        "West Indies Champions, West Indies Cricket Legends, West Indies Legends, Edgbaston, Northampton, WCL T20",
      page_content: `<h1>West Indies Champions & Cricket Legends – WCL 2025 Team</h1>
            <p>West Indies Champions infuse <span class="link" href="/">WCL 2025</span> with Caribbean flair, rhythm, and explosive cricketing talent. They carry the proud legacy of a region that dominated world cricket in its golden years, bringing that same swagger and joy to the World Championship of Legends Cricket stage. Known for powerful batting and charismatic on-field presence, the West Indies Cricket Legends in this team play with a freedom and passion that makes them huge crowd-pullers.</p>
            <p>The West Indies Champions are entertainers at heart – whether it’s a flurry of sixes, acrobatic fielding, or lively celebrations, they ensure that every match is a spectacle. Yet, beneath the flair lies a history of world titles and competitive grit, which this team channels as they seek to add the WCL trophy to their storied cabinet.</p>
            <h2>Upcoming West Indies Champions Matches in 2025:</h2>
            <ul>
                <li><strong>19 July:</strong> West Indies Champions vs <span class="link" href="/teams/south-africa-champions">South Africa Champions</span></li>
                <li><strong>22 July:</strong> West Indies Champions vs <span class="link" href="/teams/england-champions">England Champions</span></li>
                <li><strong>23 July:</strong> West Indies Champions vs <span class="link" href="/teams/australia-champions">Australia Champions</span></li>
                <li><strong>26 July:</strong> West Indies Champions vs <span class="link" href="/teams/pakistan-champions">Pakistan Champions</span></li>
                <li><strong>29 July:</strong> West Indies Champions vs <span class="link" href="/teams/india-champions">India Champions</span></li>
        </ul>`,
    },
  };
}

export default WestIndiesChampions;
