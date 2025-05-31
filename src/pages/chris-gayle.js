import Head from "next/head";
import Layout from "@/components/Layout";
import styles from "@/styles/Player.module.css"; // <-- make sure this is NOT commented out

export default function ChrisGaylePage() {
  return (
    <Layout>
      <Head>
        <title>Chris Gayle - WCL West Indies Champions Team Captain</title>
        <meta
          name="description"
          content="Chris Gayle brings the fire as captain of WCL West Indies in Season 2."
        />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.playerName}>Chris Gayle</h1>
        <h2 className={styles.playerTitle}>
          Cricketer Chris Gayle Returns as WCL West Indies Champions Team
          Captain – Expect Fireworks in Season 2
        </h2>

        <img
          src="/images/teams/westindies/chris-gayle.jpg"
          alt="Cricketer Chris Gayle"
          className={styles.playerImage}
        />

        <div className={styles.content}>
          <p>
            Cricketer Chris Gayle, the "Universe Boss," returns as the WCL West
            Indies Champions Team captain for Season 2. With his six-hitting
            power and unmatched charisma, fans can expect explosive
            entertainment from July 18 to August 2 across UK stadiums.
          </p>

          <h3>WCL Season 1 Highlights</h3>
          <p>
            Gayle thrilled crowds with classic power-hitting and calm
            leadership. Though West Indies didn’t win the title, Gayle’s
            presence made them a formidable force.
          </p>

          <h3>Legendary Career</h3>
          <p>
            With over 13,000 T20 runs, 300+ international sixes, and
            record-breaking centuries, Gayle revolutionized the T20 format and
            became a global icon.
          </p>

          <h3>Captaincy Style</h3>
          <p>
            Relaxed yet empowering, Gayle backs his team to play fearlessly—
            perfectly matching the bold spirit of the Caribbean cricket culture.
          </p>

          <h3>Season 2 Expectations</h3>
          <p>
            With legends like Pollard, DJ Bravo, and Dwayne Smith in the squad,
            Gayle’s team is built for big moments and heavy hitting.
          </p>

          <h3>Final Word</h3>
          <p>
            Catch Cricketer Chris Gayle light up the WCL once again. Tickets at{" "}
            <a
              href="https://www.wclcricket.com/chris-gayle"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCL Tickets 2025
            </a>
            . More info at{" "}
            <a
              href="https://www.wclcricket.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wclcricket.com
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
