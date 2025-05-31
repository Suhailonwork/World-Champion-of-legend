import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const PrivacyPolicy = () => {
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
                                <li>Privacy Policy</li>
                            </ul>
                            <div className="page-headers">
                                <div>Privacy Policy</div>
                            </div>
                        </div>
                        <div className="policy-content">
                            <h2>Introduction</h2>
                            <p>At World Champions League Cricket L.L.C-FZ (WCL), safeguarding your privacy is our top priority. We are committed to being transparent about how we collect, use, store, and share your personal information. This policy ensures compliance with data protection regulations and demonstrates our commitment to securing your data.</p>
                            <h2>Information We Collect:</h2>
                            <ul>
                                <li>Personal Information: Name, email address, contact details, and payment information provided during registration.</li>
                                <li>Technical Data: IP address, device type, browser type, operating system, and website interaction logs.</li>
                                <li>Voluntary Information: Any additional information you provide, such as feedback or survey responses.</li>
                            </ul>
                            <h2>How We Use Your Information:</h2>
                            <ul>
                                <li>To process registrations for the Live with the Legends contest.</li>
                                <li>To facilitate secure payment transactions.</li>
                                <li>To send important updates, reminders, or event-related notifications.</li>
                                <li>To ensure compliance with applicable legal and regulatory obligations.</li>
                            </ul>
                            <h2>Data Sharing:</h2>
                            <ul>
                                <li>Information is shared only with authorized third parties, such as payment gateways and regulatory authorities, for purposes aligned with the contest.</li>
                                <li>WCL ensures that all third-party collaborators adhere to strict confidentiality standards.</li>
                            </ul>
                            <h2>Data Retention:</h2>
                            <ul>
                                <li>We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</li>
                            </ul>
                            <h2>Data Security:</h2>
                            <ul>
                                <li>Advanced security measures, including encryption and firewalls, are in place to protect your personal data against unauthorized access or breaches.</li>
                            </ul>
                            <h2>Your Rights:</h2>
                            <ul>
                                <li>Access: Request details of the data we hold about you.</li>
                                <li>Correction: Rectify inaccuracies in your personal information.</li>
                                <li>Deletion: Request the removal of your data (subject to legal obligations).</li>
                            </ul>
                            <p>For concerns or inquiries regarding your data, please contact us at <a href="mailto:support@wclcricket.com">support@wclcricket.com</a></p>
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

export default PrivacyPolicy;
