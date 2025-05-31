import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'
import { Home } from './Home'


const Contact = ({ canonical_link, meta_title, meta_description, meta_keywords }) => {
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
                    <div className="contact-container">
                        <div className="contact-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Contact</li>
                            </ul>
                            <div className="page-headers">
                                <div>Contact WCL Cricket</div>
                            </div>
                        </div>
                        <div className="contact-wcl">
                              <div className="col-span-full">
    <h2 className="text-white text-center text-2xl font-semibold uppercase">
      General Inquiries
    </h2>
    <p className="text-gray-300 text-center mt-2 mb-10">
      We’d love to hear from you! For general inquiries, media partnerships, or support, please feel free to get in touch using the details below.
    </p>
  </div>                   
                            <div>
                                <h2>Office Address</h2>
                                <p>Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
                            </div>
                            {/* <div>
                                <h2>Office Address (India)</h2>
                                <p>Sai Telematics - E2 Swaran Jayanti Puram Govindpuram Ghaziabad Uttar Pradesh 201002</p>
                            </div> */}
                            <div>
                                <h2>Email</h2>
                                <p>support@wclcricket.com</p>
                            </div>
                            <div>
                                <h2>Support Hours</h2>
                                <p>Our team is available to assist you Monday to Friday, 9 AM to 6 PM (Dubai Time).</p>
                            </div>
                           <div>
                                 <h2>Contact</h2>
                                 <p> +971 4587 2423</p>
                                
                           </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .contact-container {
                    width: 100%;
                    padding: 40px 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .contact-header-container {
                    width: 100%;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .contact-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .contact-header-container ul li {
                    color: #ABB1CB;
                    font-family: "Poppins Regular";
                    font-size: 14px;
                    text-transform: uppercase;
                }

                .page-headers {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    text-align: center;
                }

                .page-headers div {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 30px;
                    text-transform: uppercase;
                    text-align: center;
                }

                .contact-wcl {
                    width: 100%;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 100px 2rem;
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 20px;
                }

                .contact-wcl div {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .contact-wcl div h2 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-weight: 500;
                    font-size: 20px;
                    text-transform: uppercase;
                    text-align: center;
                }

                .contact-wcl div p {
                    color: #D3D3D3;
                    font-family: "Poppins Light";
                    text-align: center;
                }

                /* Responsive adjustments */
                @media (min-width: 768px) {
                    .contact-wcl {
                        grid-template-columns: repeat(2, 1fr);
                        padding: 280px 20px;
                    }
                }

                @media (min-width: 1024px) {
                    .contact-wcl {
                        grid-template-columns: repeat(4, 1fr);
                        padding: 280px 20px;
                    }
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "WCL Cricket 2025 | World Championship Support - WCL T20",
            meta_description: "Contact WCL Cricket 2025! Reach World Championship of Legends support for tickets, info & more at Edgbaston. Get in touch!",
            meta_keywords: "WCL Cricket 2025, World Championship Support, Edgbaston, Northampton, WCL T20"
        }
    }
}

export default Contact
