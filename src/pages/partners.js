import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const Partners = ({
  canonical_link,
  meta_title,
  meta_description,
  meta_keywords,
  page_content,
}) => {
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
          <div className="partners-container">
            <div className="partners-header-container">
              <ul>
                <li>Homepage &gt;</li>
                <li>Partners</li>
              </ul>
              <div className="page-headers">
                <div>WCL Cricket Partners 2025</div>
              </div>
            </div>
            <div className="sponsors">
              <h2>Sponsors</h2>
              <div className="partners-grid">
                <div>
                  <img alt="logo" src="/assets/images/sponsor/aayush.webp" />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/aeon-trisl.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/burj-mayfair.webp"
                  />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/emt-hite.webp" />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/fomo-7.webp" />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/grace-entertaiment.webp"
                  />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/honor.webp" />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/maisour.webp" />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/oneflita.webp" />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/pannache.webp" />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/remit-choice.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/tata-aig-ins.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/the-knight.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/three-falcon.webp"
                  />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/tv-9.webp" />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/sponsor/voce.webp" />
                </div>
              </div>
            </div>
            <div className="partners">
              <h2>Broadcast Partners</h2>
              <div className="partners-grid">
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/cricbuzz.webp"
                  />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/broadcast/fancode.webp" />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/fox-sports.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/sports-eye.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/sports-max.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/sponsor/grace-entertaiment.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/star-sports-hindi-hd.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/star-sports-hindi.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/starzplay.webp"
                  />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/super-sport.webp"
                  />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/broadcast/tamasha.webp" />
                </div>
                <div>
                  <img
                    alt="logo"
                    src="/assets/images/broadcast/tnt-sports.webp"
                  />
                </div>
                <div>
                  <img alt="logo" src="/assets/images/broadcast/willow.webp" />
                </div>
              </div>
            </div>
            <div className="radio">
              <h2>Radio Partners</h2>
              <div className="radio-grid">
                <div className="radio">
                  <div>
                    <img
                      alt="logo"
                      src="/assets/images/radio/radio-sangam.webp"
                    />
                  </div>
                  <p>
                    Radio Sangam UK is one of the finest Asian community radio
                    stations in the country, dedicated to bringing cultures
                    together through music, conversation, and community stories.
                    Broadcasting from the heart of the UK, it plays a key role
                    in connecting South Asian communities while celebrating
                    diversity and tradition. With a rich mix of Bollywood music,
                    thoughtful discussions, and local updates, Radio Sangam
                    isn’t just a station but it’s a cultural hub that brings
                    people closer, one broadcast at a time.
                  </p>
                </div>
                <div className="radio">
                  <div>
                    <img
                      alt="logo"
                      src="/assets/images/radio/sunrise-radio.webp"
                    />
                  </div>
                  <p>
                    Sunrise Radio UK is one of the most respected and
                    long-standing Asian radio stations in the country, known for
                    its vibrant mix of music, entertainment, and
                    community-focused programming. Broadcasting across the UK,
                    it has become a trusted voice for generations of South
                    Asians, offering everything from Bollywood hits and classic
                    tunes to cultural conversations and live updates. More than
                    just a radio station, Sunrise Radio is a celebration of
                    heritage, connection, and the ever-evolving South Asian
                    identity in the UK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer pagecontent={page_content} />
      </div>

      <style jsx>{`
        .partners-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 100px;
          margin-top: 80px;
          margin-bottom: 40px;
        }

        .partners-header-container {
          width: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .partners-header-container ul {
          display: flex;
          gap: 5px;
          list-style: none;
        }

        .partners-header-container ul li {
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
          font-size: 30px;
          text-transform: uppercase;
          text-align: center;
        }

        .container-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .container-header h1 {
          color: #ffffff;
          font-family: "Poppins Bold";
          font-weight: 500;
          font-size: 40px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .sponsors {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sponsors h2 {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-size: 25px;
          text-transform: uppercase;
        }

        .partners {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .partners h2 {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-size: 25px;
          text-transform: uppercase;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 15px;
        }

        @media screen and (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .partners-grid div {
          height: 100px;
          width: 100px;
          background-color: #ffffff;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .partners-grid div img {
          width: 100%;
          object-fit: contain;
        }

        .radio {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .radio h2 {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-size: 25px;
          text-transform: uppercase;
        }

        .radio-grid {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .radio-grid div.radio div {
          height: 100px;
          width: 100px;
          background-color: #ffffff;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .radio-grid div.radio div img {
          width: 100%;
          object-fit: contain;
        }

        .radio-grid div.radio p {
          width: 100%;
          font-family: "Poppins Light";
          font-size: 14px;
          letter-spacing: 0.04em;
          color: #ffffff;
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
        "WCL Cricket Partners 2025 | World Championship of Legends Sponsors - WCL T20",
      meta_description:
        "Meet the WCL Cricket Partners 2025! Explore sponsors of the World Championship of Legends at Edgbaston. Join us today!",
      meta_keywords:
        "WCL Cricket Partners 2025, World Championship Sponsors, Edgbaston, Northampton, WCL T20",
      page_content: `<h1>WCL Cricket Partners 2025</h1>
            <p>The <span class="link" href="/">World Championship of Legends (WCL)</span> is supported by a distinguished network of global partners who contribute to the success and international presence of the league.</p>
            <p>WCL is the only legends cricket league approved by the England and Wales Cricket Board (ECB)—an endorsement that sets it apart from all other competitions in the legends category.</p>
            <p>Our heartfelt thanks go to all our partners who stand alongside WCL in celebrating cricket’s glorious past and shaping its global future.</p>`,
    },
  };
}

export default Partners;
