import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LwlLanding = ({ meta_title, meta_description, meta_keywords }) => {
  const router = useRouter();
  function handleRegister() {
    const interval = setInterval(() => {
      if (typeof smartech !== "undefined") {
        smartech("dispatch", "Join now", {
          page_url: router.route,
        });
        clearInterval(interval);
      }
    }, 500);
  }

  return (
    <>
      <Head>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keywords} />
      </Head>
      <div className="main">
        <Header />
        <div className="body">
          <div className="lwl-container">
            <div className="lwl-header-container">
              <div className="page-headers">
                <h1>Live with the Legends</h1>
                <p>
                  Are you ready to live your cricket dream? Here’s your chance
                  to win an all-expenses-paid trip to the UK, where you’ll
                  travel with legendary cricketers, live the cricket lifestyle,
                  and create memories of a lifetime!
                </p>
                <div className="ctas">
                  {/* <Link href="/lwl/register" legacyBehavior onClick={handleRegister}><a><button>Join Now</button></a></Link> */}
                  <Link href="/lwl/login" legacyBehavior>
                    <a>
                      <button>Already joined</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lwl-wcl">
              <img alt="logo" src="/assets/images/lwl-page-banner.webp" />
              <div>
                <h2>What's in for you?</h2>
                <ul>
                  <li>
                    <span>01.</span> Travel to the UK alongside your favourite
                    cricketing legends.
                  </li>
                  <li>
                    <span>02.</span> Stay with your chosen team and experience
                    the behind-the-scenes action of WCL.
                  </li>
                  <li>
                    <span>03.</span> Be a part of match-day activities, training
                    sessions, and media appearances.
                  </li>
                  <li>
                    <span>04.</span> Feature on WCL platforms & broadcasting
                    partners as one of the lucky winners.
                  </li>
                  <li>
                    <span>05.</span> Be Part of Post Match Victory Celebrations
                    & Team Gala Dinners.
                  </li>
                  <li>
                    <span>06.</span> Get an autograph from the captain of your
                    favourite team.
                  </li>
                </ul>
              </div>
            </div>
            <div className="key-features-container">
              <div className="key-features-header">
                <h2>Key Highlights</h2>
                <p>
                  Participating in "Live with the Legends" is simple yet
                  exciting!
                </p>
              </div>
              <div className="key-features-grid">
                <div className="round">
                  <div>
                    <img alt="logo" src="/assets/images/merchandise.webp" />
                  </div>
                  <p>
                    Every participant will receive signed merchandise from their
                    favourite team captain.
                  </p>
                </div>
                <div className="round">
                  <div>
                    <img alt="logo" src="/assets/images/emt-coupon.webp" />
                  </div>
                  <p>
                    $9(₹750) coupon code for first 20,000 participants who
                    qualified round 1.
                  </p>
                </div>
                <div className="round">
                  <div>
                    <img alt="logo" src="/assets/images/video-call.webp" />
                  </div>
                  <p>
                    60 participants will get a chance to video call with their
                    favourite team captain.
                  </p>
                </div>
                <div className="round">
                  <div>
                    <img alt="logo" src="/assets/images/uk-trip.webp" />
                  </div>
                  <p>
                    12 finalists will travel to the UK with their favourite team
                    for WCL season 2 from 18th July to 2nd August.
                  </p>
                </div>
              </div>
            </div>
            <div className="how-it-works-container">
              <div className="how-it-works-header">
                <h2>How it works?</h2>
                <p>
                  Participating in "Live with the Legends" is simple yet
                  exciting!
                </p>
              </div>
              <div className="how-it-works-grid">
                <div className="round">
                  <div>
                    <h4>Round 1</h4>
                    <h6>(15th Feb to 25th March)</h6>
                  </div>
                  <p>
                    A 15-minute quiz with 10 multiple-choice questions on
                    cricket history, rules, iconic moments, and the World
                    Championship of Legends (WCL).
                  </p>
                </div>
                <div className="round">
                  <div>
                    <h4>Round 2</h4>
                    <h6>(16th March to 25th March)</h6>
                  </div>
                  <p>
                    Submit a 1 minute video sharing your enthusiasm for cricket
                    and why you should win this incredible opportunity.
                  </p>
                </div>
                <div className="round">
                  <div>
                    <h4>Round 3</h4>
                    <h6>(7th April to 9th April)</h6>
                  </div>
                  <p>
                    A live Zoom call with the team captains and WCL
                    representatives.
                  </p>
                </div>
                <div className="round">
                  <div>
                    <h4>Winners Announcement</h4>
                    <h6>(15th April)</h6>
                  </div>
                  <p>
                    12 deserving participants win an exclusive all-expenses-paid
                    experience with cricketers, including VIP access and
                    celebrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style jsx>{`
        .lwl-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 100px;
          margin-top: 80px;
        }

        .lwl-header-container {
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .page-headers {
          width: 100%;
          max-width: 720px;
          margin: auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .page-headers div {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-size: 35px;
          text-transform: uppercase;
          text-align: center;
        }

        .page-headers p {
          color: #d3d3d3;
          font-family: "Poppins Light";
          font-weight: 500;
          font-size: 16px;
          text-align: center;
        }

        .page-headers .ctas {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: auto;
        }

        .page-headers .ctas a:first-child button {
          width: 120px;
          height: 45px;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #2d3b7d;
          border-radius: 10px;
          cursor: pointer;
          font-family: "Poppins Regular";
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .page-headers .ctas a:last-child button {
          width: max-content;
          height: 45px;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          color: #ffffff;
          cursor: pointer;
          font-family: "Poppins Regular";
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          text-decoration-line: underline;
          text-underline-offset: 5px;
        }

        .lwl-wcl {
          width: 100%;
          max-width: 720px;
          padding: 0 20px;
          margin: 50px auto 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
        }

        .lwl-wcl img {
          margin: auto;
          width: 100%;
          border-radius: 15px;
        }

        .lwl-wcl div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .lwl-wcl div h2 {
          color: #ffffff;
          font-family: "Poppins Bold";
          font-weight: 500;
          text-transform: uppercase;
        }

        .lwl-wcl div p {
          color: #d3d3d3;
          font-family: "Poppins Light";
          font-weight: 500;
          text-align: center;
        }

        .lwl-wcl div ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .lwl-wcl div ul li {
          color: #d3d3d3;
          font-family: "Poppins Light";
          font-weight: 500;
          text-align: center;
        }

        .lwl-wcl div ul li span {
          font-family: "Poppins Bold";
          font-weight: 500;
        }

        .key-features-container {
          width: 100%;
          max-width: 720px;
          padding: 0 20px;
          margin: 50px auto 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .key-features-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .key-features-header h2 {
          color: #ffffff;
          font-family: "Poppins Bold";
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
        }

        .key-features-header p {
          color: #d3d3d3;
          font-family: "Poppins Light";
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
        }

        .key-features-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 10px;
          row-gap: 10px;
        }

        .key-features-container .round {
          background-color: #27336d;
          padding: 40px 20px;
          width: calc(50% - 5px);
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .key-features-container .round img {
          width: 100%;
        }

        .how-it-works-container {
          width: 100%;
          max-width: 720px;
          padding: 0 20px;
          margin: 50px auto 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .how-it-works-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .how-it-works-header h2 {
          color: #ffffff;
          font-family: "Poppins Bold";
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
        }

        .how-it-works-header p {
          color: #d3d3d3;
          font-family: "Poppins Light";
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
        }

        .how-it-works-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 10px;
          row-gap: 10px;
        }

        .round {
          background-color: #27336d;
          padding: 40px 20px;
          width: calc(50% - 5px);
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .round h4 {
          color: #ffffff;
          font-family: "Poppins Regular";
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
        }

        .round h6 {
          color: #abb1cb;
          font-family: "Poppins Light";
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
          text-align: center;
        }

        .round p {
          color: #d3d3d3;
          font-family: "Poppins Light";
          font-weight: 500;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      meta_title:
        "LWL Cricket 2025 | World Championship of Legends Event - WCL T20",
      meta_description:
        "Discover LWL Cricket 2025! Part of the World Championship of Legends with top stars at Edgbaston. Explore now!",
      meta_keywords:
        "LWL, LWL Cricket 2025, World Championship of Legends Event, Edgbaston, Northampton, WCL T20",
    },
  };
}

export default LwlLanding;
