import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import React, { useEffect } from 'react';

const LWLPaymentSuccess = () => {
    const router = useRouter();
    const cookies = parseCookies();

    let current_user = null;
    let current_user_email = null;

    try {
        current_user = cookies.current_user ? JSON.parse(cookies.current_user) : null;
        current_user_email = current_user?.user?.email || null;
    } catch (error) {
        console.error("Error parsing current_user cookie:", error);
    }

    useEffect(() => {
        const handlePaymentCheck = async () => {
            if (!current_user_email) {
                console.warn("No user email found, skipping payment check.");
                return;
            }

            try {
                const response = await fetch("/api/lwl/check-payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: current_user_email })
                });

                const result = await response.json();

                if (response.ok) {
                    const paymentStatus = result?.data?.isPaid;

                    if (paymentStatus == true) {
                        const interval = setInterval(() => {
                            if (typeof smartech !== "undefined") {
                                smartech('contact', "LIST_IDENTIFIER", {
                                    'pk^email': current_user.user?.email,
                                    "NAME": current_user.user?.name
                                });
                                smartech('identify', current_user.user?.email);
                                smartech('dispatch', 'payment_success', {
                                    'transaction_id': router.query.slug,
                                    'email': current_user.user?.email,
                                    'name': current_user.user?.name,
                                    'Payment Status': true
                                });
                                clearInterval(interval);
                            }
                        }, 500);
                        destroyCookie(null, "current_user");
                    } else {
                        await router.push(`/lwl/payment/failure/${router.query.slug}`);
                    }
                } else {
                    console.error("Payment check failed:", result);
                }
            } catch (error) {
                console.error("Error during payment check:", error);
            }
        };

        handlePaymentCheck();
    }, [current_user_email, router]);

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="lwl-container">
                        <div className="lwl-header-container">
                            <div className="page-headers">
                                <h1>Payment Successful</h1>
                                <p>
                                    Thank you for your payment. You will receive an email from us shortly with the next steps.
                                    If you do not receive this email, contact us at{' '}
                                    <span onClick={() => window.location.href = "mailto:support@wclcricket.com"}>support@wclcricket.com</span>.
                                </p>
                                <Link href="/lwl/login">
                                    <button>Go to Login</button>
                                </Link>
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
                    width: 100%;
                }

                .lwl-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .lwl-header-container ul li {
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
                    padding: 260px 0;
                }

                @media screen and (max-width: 767px){
                .page-headers {
                    padding: 150px 0;
                }
                }

                .page-headers div {
                    color: #ffffff;
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 45px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .page-headers p {
                    margin: auto;
                    width: 70%;
                    color: #ffffff;
                    font-family: "Poppins Light";
                    font-weight: 400;
                    font-size: 18px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    text-align: center;
                }

                @media screen and (max-width: 767px){
                .page-headers p {
                    width: 100%;
                }
                }

                .page-headers p span {
                    color: #ffffff;
                    font-family: "Poppins Light";
                    font-weight: 400;
                    font-size: 18px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    text-align: center;
                    text-decoration-line: underline;
                }

                .page-headers button {
                    margin: 20px auto 0 auto;
                    height: 45px;
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    border-radius: 10px;
                    cursor: pointer;
                    font-family: "Poppins Light";
                    font-weight: 400;
                    font-size: 18px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    );
};

export default LWLPaymentSuccess;
