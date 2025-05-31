import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const TermsConditions = () => {
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="news-container">
                        <div className="news-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Policy &gt;</li>
                                <li>Terms & Conditions</li>
                            </ul>
                            <div className="page-headers">
                                <div>Terms & Conditions</div>
                            </div>
                        </div>
                        <div className="policy-content">
                            <h2>General Overview:</h2>
                            <ul>
                                <li>These terms and conditions govern the participation, conduct, and administration of the World Championship of Legends (WCL). By participating or associating with WCL, all parties agree to adhere to these terms.</li>
                            </ul>

                            <h2>Eligibility:</h2>
                            <ul>
                                <li>Participation in WCL is open to retired and non-contracted players approved by the respective cricket boards.</li>
                                <li>Participants, sponsors, and affiliated personnel must comply with the guidelines set by WCL.</li>
                                <li>Any individual or organization found violating the eligibility criteria may face disqualification or termination of association.</li>
                            </ul>

                            <h2>Participation Rules:</h2>
                            <ul>
                                <li>All participants, including players, coaches, and staff, must comply with the rules and regulations set by the WCL committee.</li>
                                <li>Players must adhere to anti-corruption policies and report any suspicious activity to WCL’s Anti-Corruption Unit.</li>
                                <li>Teams must submit rosters and relevant documentation by the specified deadlines.</li>
                            </ul>

                            <h2>Sponsorship and Media Rights:</h2>
                            <ul>
                                <li>WCL reserves exclusive rights to sponsorships, media coverage, and branding.</li>
                                <li>Any promotional activities using WCL’s name, logo, or content require prior written approval.</li>
                                <li>Participants and sponsors grant WCL the right to use their name, image, and likeness for promotional purposes.</li>
                            </ul>

                            <h2>Match Conduct and Code of Ethics:</h2>
                            <ul>
                                <li>All matches will be conducted in compliance with the rules of cricket and WCL’s specific guidelines.</li>
                                <li>Participants are expected to maintain professionalism, respect, and sportsmanship.</li>
                                <li>Any misconduct may result in fines, suspension, or disqualification, as determined by the WCL disciplinary committee.</li>
                            </ul>

                            <h2>Anti-Corruption and Fair Play:</h2>
                            <ul>
                                <li>WCL enforces a strict Anti-Corruption Code to maintain the integrity of the league.</li>
                                <li>Players, teams, and staff must not engage in any form of betting, match-fixing, or sharing insider information.</li>
                                <li>Any violation will result in immediate action, including suspension or legal consequences.</li>
                            </ul>

                            <h2>Liability:</h2>
                            <ul>
                                <li>WCL is not liable for any injuries, losses, or damages incurred during matches, training sessions, or related activities.</li>
                                <li>Teams and players are responsible for their own personal belongings and insurance.</li>
                            </ul>

                            <h2>Travel and Logistics:</h2>
                            <ul>
                                <li>WCL will facilitate travel, accommodation, and logistics for participating teams as per agreed terms.</li>
                                <li>Teams must provide accurate information for visas and other travel requirements.</li>
                            </ul>

                            <h2>Privacy Policy:</h2>
                            <ul>
                                <li>WCL collects personal information solely for operational and promotional purposes.</li>
                                <li>Data will not be shared with third parties without prior consent, except where required by law.</li>
                            </ul>

                            <h2>Broadcast and Media:</h2>
                            <ul>
                                <li>All broadcast rights, including live coverage and post-match highlights, are owned exclusively by WCL.</li>
                                <li>Players and teams must participate in promotional activities and media events as scheduled.</li>
                            </ul>

                            <h2>Dispute Resolution:</h2>
                            <ul>
                                <li>Any disputes arising under these terms will be resolved through arbitration, as determined by WCL’s legal team.</li>
                                <li>The governing law will be that of the UAE, and disputes will fall under the jurisdiction of Dubai courts.</li>
                            </ul>
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
                    width: 60%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin: auto;
                    padding: 0 0 50px 0;
                }

                @media screen and (max-width: 767px) {
                  .policy-content {
                     width: 100%;
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

export default TermsConditions;
