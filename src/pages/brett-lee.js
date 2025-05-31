// pages/brett-lee.js
import Head from "next/head";
import Layout from "@/components/Layout";
import styles from "@/styles/Player.module.css";

export default function BrettLeePage() {
  return (
    <Layout>
      <Head>
        <title>Brett Lee - WCL Australia Champions Team Captain</title>
        <meta
          name="description"
          content="Brett Lee leads WCL Australia's team in Season 2."
        />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.playerName}>Brett Lee</h1>
        <h2 className={styles.playerTitle}>
          Cricketer Brett Lee Leads the Charge as WCL Australia Champions Team
          Captain in Season 2
        </h2>

        <img
          src="/images/teams/australia/brett-lee.jpg"
          alt="Cricketer Brett Lee"
          className={styles.playerImage}
        />

        <div className={styles.content}>
          <p>
            Fast, fierce, and forever iconic—Cricketer Brett Lee is all set to
            bring his thunder back to the pitch as the WCL Australia Champions
            Team captain for Season 2 of the World Championship of Legends.
          </p>

          <p>
            As the cricketing world gears up for the second edition of the WCL,
            there’s immense anticipation around the return of Cricketer Brett
            Lee, not just as a bowler, but as a leader—guiding the WCL Australia
            team into what promises to be a high-octane tournament between July
            18 and August 2 in the UK.
          </p>

          <h3>WCL Season 1 Recap: Brett Lee’s Impact</h3>
          <p>
            In Season 1 of the WCL, Australia Champions team captain Brett Lee
            delivered what fans expected and more. Though it’s been years since
            he retired, Lee still bowled with fire in his eyes.
          </p>

          <p>
            More than pace and wickets, it was Brett Lee’s calm leadership that
            stood out. He ensured the Australian Champions played a fearless,
            aggressive brand of cricket.
          </p>

          <h3>Leadership and Line-Up for WCL Season 2</h3>
          <p>
            Brett Lee will lead a side stacked with Aussie greats like Brad
            Haddin, Dan Christian, Ben Cutting, Shaun Tait, and Chris Lynn.
          </p>

          <h3>What to Expect in WCL Season 2</h3>
          <p>
            Fixtures span cities like Birmingham, Northampton, Leeds, and
            Leicester. It’s a return to Lee's values: passion, teamwork, and
            excellence.
          </p>

          <h3>Cricketer Brett Lee’s Legendary Career</h3>
          <p>
            With 310 wickets in Tests and 380 in ODIs, Brett Lee was the
            spearhead of Australia’s attack for a decade.
          </p>

          <h3>The Power of WCL: Where Legends Live On</h3>
          <p>
            WCL brings legends back, reigniting rivalries and fan love. With
            Brett Lee leading, the stage is set.
          </p>

          <h3>Final Thoughts: Brett Lee and the WCL Legacy</h3>
          <p>
            Brett Lee leads cricketing icons again, this time for pride,
            nostalgia, and fans. The roar of the crowd, the pace, and the legend
            return this summer.
          </p>

          <p>
            <strong>🗓️ Book your tickets:</strong>{" "}
            <a
              href="https://www.wclcricket.com/brett-lee"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCL Tickets 2025
            </a>
            <br />
            <strong>🌐 Visit:</strong>{" "}
            <a
              href="https://www.wclcricket.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wclcricket.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
