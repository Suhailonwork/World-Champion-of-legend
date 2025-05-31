import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const Gallery = ({
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
          <div className="gallery-container">
            <div className="gallery-header-container">
              <ul>
                <li>Homepage &gt;</li>
                <li>Gallery</li>
              </ul>
              <div className="page-headers">
                <div>WCL Cricket Gallery</div>
              </div>
            </div>
            <div className="gallery-grid">
              {Array.from({ length: 91 }, (_, i) => (
                <img
                  key={i}
                  src={`/assets/images/gallery/gallery-image-${i + 1}.webp`}
                  alt={`Gallery Image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer pagecontent={page_content} />
      </div>

      <style jsx>{`
        .gallery-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 100px;
          margin-top: 80px;
        }

        .gallery-header-container {
          width: max-content;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .gallery-header-container ul {
          display: flex;
          gap: 5px;
          list-style: none;
        }

        .gallery-header-container ul li {
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
          font-weight: 500;
          font-size: 30px;
          letter-spacing: .-04em;
          text-transform: uppercase;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media screen and (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .gallery-grid img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 20px;
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
        "WCL Cricket Gallery 2025 | World Championship Photos - WCL T20",
      meta_description:
        "Browse the WCL Cricket Gallery 2025! Stunning World Championship photos of legends like Yuvraj Singh at Edgbaston. See now!",
      meta_keywords:
        "WCL Cricket Gallery 2025, World Championship Photos, Edgbaston, Northampton, WCL T20",
      page_content: `
        <h1>WCL Cricket Gallery 2025 – WCL T20</h1>
        <p>Step into the WCL Cricket Gallery and experience the World Championship of Legends through stunning imagery. The Gallery page showcases a curated collection of photographs capturing the passion, rivalry, and camaraderie of WCL 2025. Every image tells a story – from packed stadiums brimming with cheering fans to action shots of cricket legends in full flow. The WCL Cricket Gallery lets you relive the tournament’s most unforgettable moments in vivid detail.</p>
        <h2>WCL Historic & Memorable Moments</h2>
        <p>Browse albums featuring each match and venue: you will find <a href="/">World Championship of Legends</a> images of epic batting duels, fiery bowling spells, and dramatic turning points on the field. The gallery also highlights behind-the-scenes photos – candid snapshots of legends strategizing in the dressing room, warming up before play, and interacting with fans. See team photos of all six squads lined up in their national colours, as well as joyous post-match celebrations and the glittering opening ceremony in Birmingham.</p>
        <p>Our WCL Cricket Gallery is updated throughout the season, including special sections like fan galleries (with the best crowd moments and fan attire) and close-ups of trophies and memorabilia. By exploring this World Championship of Legends photo archive, fans can capture the spirit of the league in every frame. Whether it’s a classic cover drive, a team huddle, or a stadium lit up in celebration, the WCL Cricket Gallery brings the legends’ journey to life through images.</p>
      `,
    },
  };
}

export default Gallery;
