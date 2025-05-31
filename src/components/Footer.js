import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Footer = ({ pagecontent }) => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState(null);

  useEffect(() => {
    const contentLinks = document.querySelectorAll(".footer-content span.link");
    const handleClick = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      if (href) {
        router.push(href);
      }
    };
    contentLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });
    return () => {
      contentLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [router]);

  function handleNewsletterSubmit() {
    smartech("contact", 16, {
      "pk^email": newsletterEmail,
    });
    smartech("identify", newsletterEmail);
    smartech("dispatch", "newsletter", {
      email: newsletterEmail,
    });
  }

  return (
    <>
      <footer>
        <div className="footer-main">
          <div
            className="footer-content"
            dangerouslySetInnerHTML={{ __html: pagecontent }}
          ></div>
          <div className="footer-container">
            <div className="col-1">
              <div>
                <img src="/assets/images/wcl-logo.webp" alt="wcl-logo" />
                <div className="email-form">
                  <h3>
                    Stay in the loop and sign up for the latest news of WCL
                    Cricket
                  </h3>
                  <form onSubmit={handleNewsletterSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      onChange={(event) =>
                        setNewsletterEmail(event.target.value)
                      }
                      required
                    />
                    <button>
                      <svg
                        width="20"
                        viewBox="0 0 46 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M45.7071 8.70711C46.0976 8.31659 46.0976 7.68342 45.7071 7.2929L39.3431 0.928936C38.9526 0.538411 38.3195 0.538411 37.9289 0.928936C37.5384 1.31946 37.5384 1.95262 37.9289 2.34315L43.5858 8L37.9289 13.6569C37.5384 14.0474 37.5384 14.6805 37.9289 15.0711C38.3195 15.4616 38.9526 15.4616 39.3431 15.0711L45.7071 8.70711ZM-8.74228e-08 9L45 9L45 7L8.74228e-08 7L-8.74228e-08 9Z"
                          fill="#2D3B7D"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h3>Buy WCL Tickets 2025</h3>
              <ul>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>West Indies Champions v South Africa Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>England Champions v Australia Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>India Champions v South Africa Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>England Champions v West Indies Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>Australia Champions v West Indies Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>England Champions v South Africa Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>India Champions v Australia Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>Australia Champions v South Africa Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>India Champions v England Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>India Champions v West Indies Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>Semi Final 1 v Semi Final 2</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>Semi Final 2 v Semi Final 3</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>FINALS</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>WCL T20 Teams</h3>
              <ul>
                <li>
                  <Link href="/teams/india-champions" legacyBehavior>
                    <a>India Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/england-champions" legacyBehavior>
                    <a>England Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/australia-champions" legacyBehavior>
                    <a>Australia Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/west-indies-champions" legacyBehavior>
                    <a>West Indies Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/south-africa-champions" legacyBehavior>
                    <a>South Africa Champions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/pakistan-champions" legacyBehavior>
                    <a>pakistan-champions</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3>WCL Socials</h3>
              <ul>
                <li>
                  <Link
                    href="https://www.instagram.com/worldchampionshipoflegends"
                    legacyBehavior
                  >
                    <a>Instagram</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/@worldchampionshipoflegends/?mibextid=ZbWKwL"
                    legacyBehavior
                  >
                    <a>Facebook</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@Wclcricket"
                    legacyBehavior
                  >
                    <a>YouTube</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/wclleague" legacyBehavior>
                    <a>X (Formerly Twitter)</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-additional">
            <p>
              © Copyright {currentYear} WCL. All rights reserved. Unauthorized
              use or reproduction of any content is prohibited.
            </p>
            <ul>
              <li>
                <Link href="/privacy" legacyBehavior>
                  <a>Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" legacyBehavior>
                  <a>Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/cancellation-refund" legacyBehavior>
                  <a>Cancellation & Refund</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        footer {
          width: 100%;
        }

        footer ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        footer ul:last-child {
          justify-content: flex-end;
        }

        footer ul li {
          font-family: "Poppins Regular";
          font-size: 14px;
        }

        footer ul li a {
          color: #abb1cb;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        footer ul li {
          color: #abb1cb;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        footer ul li a.active {
          color: #fff;
        }

        footer ul li a:hover {
          color: #fff;
        }

        .footer-main {
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding: 50px 0;
          margin-top: 60px;
          background-color: #27336d;
          border-top: solid 2px #dab072;
        }

        .footer-content {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 5px;
        }

        @media screen and (max-width: 1023px) {
          .footer-content {
            display: flex;
            gap: 5px;
          }
        }

        .footer-content h1 {
          font-family: "Poppins Bold";
          font-weight: 500;
          font-size: 18px;
          color: #ffffff;
        }

        .footer-content h2 {
          font-family: "Poppins Bold";
          font-weight: 500;
          font-size: 16px;
          color: #ffffff;
          margin-top: 15px;
        }

        .footer-content p {
          font-family: "Poppins Regular";
          font-weight: 400;
          font-size: 14px;
          color: #abb1cb;
        }

        .footer-content span {
          color: #ffffff;
          text-decoration-line: underline;
          text-underline-offset: 2px;
          cursor: pointer;
        }

        .footer-content strong {
          font-family: "Poppins Semibold";
          font-weight: 400;
        }

        .footer-content li {
          display: flex;
          gap: 5px;
        }

        .footer-content li {
          display: flex;
          gap: 5px;
        }

        .footer-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          justify-content: space-between;
        }

        @media screen and (max-width: 1023px) {
          .footer-container {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
        }

        .footer-container .col-1,
        .footer-container .col-2,
        .footer-container .col-3,
        .footer-container .col-4 {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-container .col-1 {
          width: 30%;
        }

        @media screen and (max-width: 767px) {
          .footer-container .col-1 {
            width: 100%;
          }
        }

        .footer-container .col-1 div {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-container .col-1 div h3 {
          width: 100%;
          font-size: 20px;
        }

        .footer-container .col-1 div form {
          width: 100%;
          position: relative;
        }

        .footer-container .col-1 div form input {
          width: 100%;
          height: 45px;
          border-radius: 10px;
          border: none;
          outline: none;
          padding: 0 45px 0 10px;
          color: #abb1cb;
          font-family: "Poppins Regular";
          font-size: 14px;
        }

        .footer-container .col-1 div form button {
          width: 45px;
          height: 45px;
          border-radius: 6px;
          background-color: #dab072;
          border: none;
          outline: none;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(0, -50%);
          transition: all 0.1s;
          cursor: pointer;
        }

        .footer-container .col-1 h3,
        .footer-container .col-2 h3,
        .footer-container .col-3 h3,
        .footer-container .col-4 h3 {
          font-family: "Poppins Semibold";
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }

        .footer-container .col-1 img {
          width: 70px;
        }

        .footer-container .col-1 p {
          color: #abb1cb;
          font-family: "Poppins Regular";
          font-size: 16px;
        }

        .footer-additional {
          width: 100%;
          max-width: 1280px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media screen and (max-width: 1023px) {
          .footer-additional {
            display: flex;
            flex-direction: column-reverse;
            gap: 40px;
            padding: 0 20px;
          }
        }

        .footer-additional p {
          color: #ffffff;
          font-family: "Poppins Light";
          font-weight: 400;
          font-size: 15px;
        }

        .footer-additional ul {
          display: flex;
          flex-direction: row;
          gap: 20px;
        }

        @media screen and (max-width: 767px) {
          .footer-additional ul {
            width: 100%;
            flex-direction: column;
            gap: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
