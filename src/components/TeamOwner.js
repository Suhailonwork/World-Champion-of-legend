import Image from 'next/image'
import React from 'react'

const TeamOwner = ({ name, image, about }) => {
    return (
        <>
            <div className="team-owner">
                <div className="team-owner-header">
                    <Image src={image} width={50} height={50} style={{borderRadius: "10px"}} />
                    <h4>{name}</h4>
                    <p>(Owner)</p>
                </div>
                <p>
                    {about}
                </p>
            </div>

            <style jsx>{`
                .team-owner {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .team-owner-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .team-owner-header h4 {
                    color: #ffffff;
                    font-family: "Poppins Medium";
                    font-size: 16px;
                    font-weight: 500;
                }

                .team-owner p {
                    color: #d3d3d3;
                    font-family: "Poppins Light";
                    font-size: 15px;
                }
            `}</style>
        </>
    )
}

export default TeamOwner
