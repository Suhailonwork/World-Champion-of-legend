import Head from "next/head";
import Layout from "@/components/Layout";
import styles from "@/styles/Player.module.css";

export default function YuvrajSinghPage() {
  return (
    <Layout>
      <Head>
        <title>Yuvraj Singh - WCL Indian Champions Team Captain</title>
        <meta
          name="description"
          content="Yuvraj Singh leads India in WCL 2025 after a triumphant Season 1 win."
        />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.playerName}>Yuvraj Singh</h1>
        <h2 className={styles.playerTitle}>
          Yuvraj Singh: Leading the WCL Indian Champions Team as Captain
        </h2>

        <img
          src="/images/teams/india/yuvraj-singh.jpg"
          alt="Cricketer Yuvraj Singh"
          className={styles.playerImage}
        />

        <div className={styles.content}>
          <p>
            Yuvraj Singh continues to inspire as captain of the WCL Indian
            Champions Team. His leadership and explosive batting remain iconic,
            making him a central figure in Season 2.
          </p>

          <h3>Triumph in Season 1</h3>
          <p>
            Yuvraj led India to a thrilling WCL victory over Pakistan in the
            final. His strategic brilliance and team-first mindset made the
            difference.
          </p>

          <h3>T20 Career Highlights</h3>
          <p>
            In international T20s, Yuvraj scored 1,177 runs with a strike rate
            of 136.38. Known for six sixes in an over, he’s among the most
            feared T20 batters.
          </p>

          <h3>Expectations for Season 2</h3>
          <p>
            Fans expect Yuvraj to deliver more fireworks and captaincy
            brilliance as he guides India toward back-to-back titles.
          </p>

          <h3>Legacy & Leadership</h3>
          <p>
            Yuvraj Singh represents resilience, passion, and power. His presence
            continues to inspire young and old fans alike.
          </p>

          <h3>Final Word</h3>
          <p>
            Catch Cricketer Yuvraj Singh lead India in WCL 2025. Book now at{" "}
            <a
              href="https://www.wclcricket.com/yuvraj-singh"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCL Tickets 2025
            </a>{" "}
            or visit{" "}
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
