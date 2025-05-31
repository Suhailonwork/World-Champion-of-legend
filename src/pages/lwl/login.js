import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import React, { useState } from 'react';

const LoginLWL = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverError, setServerError] = useState("");
    const [paidStatus, setPaidStatus] = useState(null);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmailError("");
        setPasswordError("");
        setServerError("");

        if (!email.trim()) {
            setEmailError("Email cannot be empty.");
            return;
        }
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        if (!password.trim()) {
            setPasswordError("Password cannot be empty.");
            return;
        }

        try {
            const response = await fetch("/api/lwl/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed. Please try again.");
            }

            const result = await response.json();

            if (result.statusCode === 200) {
                if (result.data.user.paymentInfo.isPaid) {
                    setPaidStatus(true);
                    setCookie(null, "current_user", JSON.stringify(result.data), { path: "/" });
                    router.push("/lwl/dashboard");
                } else {
                    setPaidStatus(false);
                }
            } else {
                throw new Error(result.message || "Login failed. Please try again.");
            }
        } catch (error) {
            setServerError(error.message);
        }
    };

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="lwl-container">
                        <div className="lwl-header-container">
                            <div className="page-headers">
                                <h1>Live with the Legends Login</h1>
                            </div>
                        </div>
                        <div className="login-container">
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Email Address
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                    />
                                    {emailError && <span className="error">{emailError}</span>}
                                </label>
                                <label>
                                    Password
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value.toUpperCase())}
                                    />
                                    {passwordError && <span className="error">{passwordError}</span>}
                                </label>
                                {serverError && <span className="error">{serverError}</span>}
                                <button type="submit">Login</button>
                                {paidStatus === false && (
                                    <span className="error">You haven't paid yet. Create your account again.</span>
                                )}
                            </form>
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

                .page-headers {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    text-align: center;
                }

                .page-headers div {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 35px;
                    text-transform: uppercase;
                }

                .login-container {
                    width: 100%;
                    margin: auto;
                    padding: 0 2rem 290px 2rem;
                    display: flex;
                }

                .login-container form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .login-container form label {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    color: #ffffff;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .login-container form input,
                .login-container form select {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
                    border: solid 2px #ABB1CB;
                    outline: none;
                    border-radius: 10px;
                    background-color: transparent;
                    color: #ffffff;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    transition: all .2s;
                }

                .login-container form input:hover,
                .login-container form input:active,
                .login-container form input:focus {
                    border: solid 2px #ffffff;
                }

                .login-container form select {
                    -webkit-appearance: none;
                }

                .login-container form input::placeholder {
                    color: #ABB1CB;
                }

                .login-container form button {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    cursor: pointer;
                }

                .login-container h6 {
                    color: #ffffff;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 30px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    margin: auto;
                }

                .login-container form span {
                    color: red;
                    font-family: "Poppins Regular";
                    text-transform: uppercase;
                    letter-spacing: .02em;
                    font-size: 14px;
                    margin-top: 5px;    
                }
            `}</style>
        </>
    );
};

export async function getServerSideProps(context) {
    const cookies = parseCookies(context);
    const current_user = cookies?.current_user ? JSON.parse(cookies.current_user) : null;

    if (current_user) {
        return {
            redirect: {
                destination: "/lwl/dashboard",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}
export default LoginLWL;
