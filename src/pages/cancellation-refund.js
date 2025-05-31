import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const CancellationRefund = () => {
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
                                <li>Cancellation & Refund</li>
                            </ul>
                            <div className="page-headers">
                                <div>Cancellation & Refund</div>
                            </div>
                        </div>
                        <div className="policy-content">
                            <h2>Cancellation by Participants:</h2>
                            <ul>
                                <li>Once the registration fee is paid, it is considered final and non-refundable, except in cases explicitly mentioned in this policy.</li>
                            </ul>
                            <h2>Cancellation by Organizers:</h2>
                            <ul>
                                <li>In the unlikely event that WCL cancels the contest, a full refund will be processed for all registered participants. Refunds will be initiated within 7 working days from the date of cancellation.</li>
                            </ul>
                            <h2>Refunds:</h2>
                            <ul>
                                <li>Refunds are applicable only for cancellations initiated by WCL.</li>
                                <li>Refund requests due to participant disqualification or failure to comply with contest rules will not be entertained.</li>
                            </ul>
                            <h2>Refund Process:</h2>
                            <ul>
                                <li>Refunds will be credited directly to the payment method used during registration.</li>
                                <li>Participants will receive an email confirmation once the refund is processed.</li>
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

export default CancellationRefund;
