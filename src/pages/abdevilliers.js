import Head from "next/head";
import Layout from "@/components/Layout";
import styles from "@/styles/Player.module.css";

export default function AbDeVilliersPage() {
  return (
    <Layout>
      <Head>
        <title>AB de Villiers - WCL South Africa Champions Team Captain</title>
        <meta
          name="description"
          content="AB de Villiers leads South Africa in WCL 2025 with flair and leadership."
        />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.playerName}>AB de Villiers</h1>
        <h2 className={styles.playerTitle}>
          AB de Villiers Returns as WCL South Africa Champions Team Captain: A
          Legend Set to Light Up Season 2
        </h2>

        <img
          src="/images/teams/southafrica/ab-de-villiers.jpg"
          alt="Cricketer AB de Villiers"
          className={styles.playerImage}
        />

        <div className={styles.content}>
          <p>
            Cricketer AB de Villiers is back as the WCL South Africa Champions
            Team captain for Season 2. Known for innovation and explosive
            batting, AB brings leadership, skill, and class to the tournament.
          </p>

          <h3>Season 2 Outlook</h3>
          <p>
            He leads a stacked squad including Hashim Amla, Chris Morris, and
            Wayne Parnell—blending experience with younger legends to challenge
            for the title.
          </p>

          <h3>AB’s Legacy</h3>
          <p>
            With over 9,500 ODI runs and multiple fastest centuries, AB
            redefined modern batting. Mr. 360 is still a nightmare for bowlers
            and a dream for fans.
          </p>

          <h3>WCL’s Global Platform</h3>
          <p>
            WCL celebrates retired icons, and AB’s return electrifies the
            tournament. Expect packed stadiums in Birmingham, Northampton,
            Leeds, and Leicester.
          </p>

          <h3>Final Word</h3>
          <p>
            See AB de Villiers bring magic back to cricket. Tickets at{" "}
            <a
              href="https://www.wclcricket.com/ab-de-villiers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCL Tickets 2025
            </a>
            . Follow updates on{" "}
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
