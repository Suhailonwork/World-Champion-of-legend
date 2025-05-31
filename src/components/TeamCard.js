import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamCard = ({ logo, href }) => {
    return (
        <>
            <Link href={href} legacyBehavior><a>
                <div className="team">
                    <div className="team-logo">
                        <Image
                            src={logo}
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </a></Link>

            <style jsx>{`
                .team {
                    width: 100%;
                    height: 480px;
                    padding: 20px;
                    background-color: #27336D;
                    border-radius: 25px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .team div {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
      `}</style>
        </>
    )
}

export default TeamCard