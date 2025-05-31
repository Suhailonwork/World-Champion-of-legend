import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const LwlTermsConditions = () => {
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="news-container">
                        <div className="news-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>LWL &gt;</li>
                                <li>Terms & Conditions</li>
                            </ul>
                            <div className="page-headers">
                                <h1>Lwl Terms & Conditions</h1>
                            </div>
                        </div>
                        <div className="policy-content">
                            <div>
                                <h2>Eligibility</h2>
                                <ul>
                                    <li>Participants must be at least 13 years old.</li>
                                    <li>Ages 13–17 require written permission from a parent or guardian.</li>
                                    <li>Open worldwide, except for WCL employees and immediate family.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Entry Fee</h2>
                                <ul>
                                    <li>$12 non-refundable fee required to participate.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Selection Process</h2>
                                <ul>
                                    <li>Completion of Quiz Round, Video Submission, and Captain’s Call required.</li>
                                    <li>Judges' decisions are final.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Travel and Accommodation</h2>
                                <ul>
                                    <li>Winners receive all-expense-paid travel to the UK.</li>
                                    <li>WCL handles visas and logistics.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Participation in Activities</h2>
                                <ul>
                                    <li>Winners must attend all training, matches, and media sessions.</li>
                                    <li>Adherence to WCL rules is mandatory.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Media and Publicity</h2>
                                <ul>
                                    <li>Winners agree to media appearances and promotion.</li>
                                    <li>WCL may use names and images for promotional purposes.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Code of Conduct</h2>
                                <ul>
                                    <li>Respectful behavior is required; violations may lead to disqualification.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Anti-Corruption Compliance</h2>
                                <ul>
                                    <li>Strict compliance with WCL’s Anti-Corruption Code is required</li>
                                    <li>Report any suspicious activity to WCL immediately.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Liability</h2>
                                <ul>
                                    <li>WCL is not liable for personal injury or loss during the contest.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Privacy Policy</h2>
                                <ul>
                                    <li>Personal information is used only for contest administration.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Disqualification</h2>
                                <ul>
                                    <li>Non-compliance or false information may result in disqualification.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Governing Law</h2>
                                <ul>
                                    <li>Governed by Dubai law; disputes resolved in Dubai courts.</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Payment Partner</h2>
                                <ul>
                                    <li>Sai Telematics - E2 Swaran Jayanti Puram Govindpuram Ghaziabad Uttar Pradesh 201002</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .news-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin-top: 80px;
                }

                .news-header-container {
                    width: max-content;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .news-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .news-header-container ul li {
                    color: #ABB1CB;
                    font-family: "Poppins Regular";
                    font-size: 16px;
                    letter-spacing: 1px;
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
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 45px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .policy-content {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin: auto;
                    padding: 0 0 50px 0;
                }

                @media screen and (max-width: 767px) {
                  .policy-content {
                     padding: 0 20px;
                   }
                }

                .policy-content h2 {
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .policy-content ul {
                    list-style: disc;
                    padding-left: 40px;
                    text-align: left;
                }

                .policy-content ul li {
                    font-family: "Poppins Light";
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .policy-content p {
                    color: #ABB1CB;
                    font-family: "Poppins Light";
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .policy-content p a {
                    color: #ffffff;
                    text-decoration-line: underline;
                }

                @media screen and (max-width: 768px) {
                    .news-container {
                        padding: 0 10px;
                    }
                }
            `}</style>
        </>
    );
};

export default LwlTermsConditions;
