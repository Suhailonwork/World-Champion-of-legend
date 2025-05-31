import Link from 'next/link'
import React from 'react'

const Button = ({href}) => {
    return (
        <>
            <Link href={href}>
                <button>
                    <p>View All</p>
                    <svg width="25" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M45.7071 8.70711C46.0976 8.31659 46.0976 7.68342 45.7071 7.2929L39.3431 0.928936C38.9526 0.538411 38.3195 0.538411 37.9289 0.928936C37.5384 1.31946 37.5384 1.95262 37.9289 2.34315L43.5858 8L37.9289 13.6569C37.5384 14.0474 37.5384 14.6805 37.9289 15.0711C38.3195 15.4616 38.9526 15.4616 39.3431 15.0711L45.7071 8.70711ZM-8.74228e-08 9L45 9L45 7L8.74228e-08 7L-8.74228e-08 9Z"
                            fill="#ffffff" />
                    </svg>
                </button>
            </Link>

            <style>{`
                button {
                    width: max-content;
                    height: 45px;
                    padding: 15px;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    justify-content: space-between;
                    background-color: transparent;
                    outline: solid 1px #ffffff;
                    border-radius: 10px;
                    transition: background-color .15s ease-in-out,color .15s ease-in-out;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #ffffff;
                    outline: none;
                }

                button p {
                    color: #ffffff;
                    font-family: "Poppins Regular";
                    font-size: 14px;
                    text-transform: uppercase;
                    transition: color .15s ease-in-out,color .15s ease-in-out;
                }

                button:hover p {
                    color: #2D3B7D;
                }

                button:hover svg path {
                    fill: #2D3B7D;
                }
            `}</style>
        </>
    )
}

export default Button
