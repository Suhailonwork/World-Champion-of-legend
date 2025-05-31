import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import React from 'react';

const Dashboard = (props) => {
    const router = useRouter();
    const current_user = props;

    function handleStartQuiz() {
        const interval = setInterval(() => {
            if (typeof smartech !== "undefined") {
                smartech('identify', current_user.user.email);
                smartech('dispatch', 'quiz_start', {
                    'email': current_user.user.email
                });
                clearInterval(interval);
            }
        }, 500);
    }

    function handleLogout() {
        destroyCookie(null, "current_user", { path: "/" });
        router.push("/lwl");
    }

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="dashboard-container">
                        <div className="dashboard-inner-container">
                            <div className="dashboard-header">
                                <h6>{current_user.user.name}</h6>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                            {
                                current_user?.user?.quizProgress?.round1?.status === "passed" ? (
                                    current_user?.user?.quizProgress?.round2?.status === "locked" ? (
                                        <div className="empty">
                                            <h4>Oops! You missed the chance to upload your video!</h4>
                                            <div className="content">
                                                <p>Last date for submitting the video was March 25. Wish you good luck for next season.</p>
                                            </div>
                                        </div>
                                    ) : current_user?.user?.quizProgress?.round2?.status === "submitted" ? (
                                        <div className="empty">
                                            <h4>Congratulations on completing Round 2! 🎉</h4>
                                            <div className="content">
                                                <p>Results will be announced on April 1. You will be notified over email.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="empty">
                                            <h4>LWL Season 1 has ended.</h4>
                                            <div className="content">
                                                <p>Stay tuned for the next season or further instructions via email. Good luck!</p>
                                            </div>
                                        </div>
                                    )
                                ) : null
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .main {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .body {
                    width: 100%;
                }
                    
                .dashboard-container {
                    width: 100%;
                    max-width: 1280px;
                    display: flex;
                    flex-direction: column;
                    gap: 200px;
                    padding: 200px 2rem;
                }

                .dashboard-inner-container {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin: auto;
                }

                @media screen and (max-width: 767px){
                    .dashboard-inner-container {
                        width: 100%;
                    }
                }

                .dashboard-header {
                    width: 100%;
                    max-width: 1280px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .dashboard-header h6 {
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .dashboard-header button {
                    width: max-content;
                    padding: 0 20px;
                    background-color: transparent;
                    color: #ffffff;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 15px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    text-align: center;
                    text-decoration-line: underline;
                    cursor: pointer;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .container h4 {
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 30px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .container .content {
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .container .content ul {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: 20px 0;
                    list-style: none;
                }

                .container button {
                    width: max-content;
                    height: 40px;
                    padding: 0 20px;
                    margin-top: 20px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 15px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    text-align: center;
                    cursor: pointer;
                }

                .empty h4 {
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 30px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .empty {
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .empty ul {
                    list-style: none;
                }

                .empty button {
                    width: 180px;
                    height: 45px;
                    border-radius: 10px;
                    margin-top: 30px;
                    padding: 0 10px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    font-family: "Poppins Semibold";
                    font-weight: 500;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: -.5px;
                }
            `}</style>
        </>
    );
};

export function getServerSideProps(context) {
    const cookies = parseCookies(context);
    const current_user = cookies?.current_user ? JSON.parse(cookies.current_user) : null;

    if (!current_user) {
        return {
            redirect: {
                destination: "/lwl/login",
                permanent: false,
            },
        };
    }

    return {
        props: current_user,
    };
}

export default Dashboard;
