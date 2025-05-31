import Head from "next/head";
import Layout from "@/components/Layout";
import styles from "@/styles/Player.module.css";

export default function EoinMorganPage() {
  return (
    <Layout>
      <Head>
        <title>Eoin Morgan - WCL England Champions Team Captain</title>
        <meta
          name="description"
          content="Cricketer Eoin Morgan leads WCL England in Season 2 with class and calm."
        />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.playerName}>Eoin Morgan</h1>
        <h2 className={styles.playerTitle}>
          Cricketer Eoin Morgan Returns as WCL England Champions Team Captain –
          The Genius is Back
        </h2>

        <img
          src="/images/teams/england/eoin-morgan.jpg"
          alt="Cricketer Eoin Morgan"
          className={styles.playerImage}
        />

        <div className={styles.content}>
          <p>
            One of the most influential minds in modern cricket, Cricketer Eoin
            Morgan redefined leadership and reshaped how England played
            white-ball cricket. Now, he’s back—this time as the WCL England
            Champions Team captain for Season 2 of the World Championship of
            Legends, bringing with him that same bold mindset and calm presence.
          </p>

          <p>
            From July 18 to August 2, fans across the UK will see Morgan leading
            the charge at iconic venues like Birmingham, Northampton, Leeds, and
            Leicester.
          </p>

          <h3>Legacy of Cricketer Eoin Morgan</h3>
          <p>
            As a World Cup-winning captain, Morgan changed England cricket
            forever. With over 7,000 ODI runs and a legacy of fearless, tactical
            leadership, his influence will be a major force this season.
          </p>

          <h3>The WCL England Squad</h3>
          <p>
            With teammates like Kevin Pietersen, Ian Bell, and Monty Panesar,
            Morgan will lead a squad rich in legacy and firepower. His
            leadership style creates an environment where every legend can
            thrive.
          </p>

          <h3>What to Expect</h3>
          <p>
            Fans can expect elegant, strategic innings from Morgan and
            commanding decisions as captain. Calm, composed, and impactful—his
            presence alone is a boost for England.
          </p>

          <h3>Why He’s Perfect for WCL</h3>
          <p>
            WCL celebrates cricket and character—qualities that Morgan embodies.
            His return adds prestige and strategic brilliance to the tournament.
          </p>

          <h3>Final Word</h3>
          <p>
            Catch Cricketer Eoin Morgan leading the WCL England Champions Team
            this summer. Tickets at{" "}
            <a
              href="https://www.wclcricket.com/eoin-morgan"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCL Tickets 2025
            </a>
            . Visit{" "}
            <a
              href="https://www.wclcricket.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wclcricket.com
            </a>{" "}
            for updates.
          </p>
        </div>
      </div>
    </Layout>
  );
}
