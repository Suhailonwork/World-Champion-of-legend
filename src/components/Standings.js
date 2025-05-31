import Image from 'next/image'
import React, { useState } from 'react'

const Standings = () => {
    const [expandedRows, setExpandedRows] = useState({});

    const toggleRowExpansion = (team) => {
        setExpandedRows((prev) => ({
            ...prev,
            [team]: !prev[team],
        }));
    };

    const teams = [
        {
            name: 'AUSCH',
            logo: '/assets/images/team-logos/australia-logo.webp',
            shortName: 'AUSCH',
            stats: { P: 5, W: 4, L: 1, NR: 0, PT: 8, NRR: '+2.464' },
            matches: [
                {
                    opponent: 'Pakistan Champions',
                    description: '2nd Match',
                    date: '03 Jul',
                    result: 'Loss by 5 wkts',
                },
                {
                    opponent: 'South Africa Champions',
                    description: '5th Match',
                    date: '05 Jul',
                    result: 'Won by 104 runs',
                },
                {
                    opponent: 'England Champions',
                    description: '7th Match',
                    date: '06 Jul',
                    result: 'Won by 6 wkts',
                },
                {
                    opponent: 'India Champions',
                    description: '11th Match',
                    date: '08 Jul',
                    result: 'Won by 23 runs',
                },
                {
                    opponent: 'West Indies Champions',
                    description: '14th Match',
                    date: '10 Jul',
                    result: 'Won by 55 runs',
                },
                {
                    opponent: 'India Champions',
                    description: '2nd Semi Final',
                    date: '12 Jul',
                    result: 'Loss by 86 runs',
                }
            ],
        },
        {
            name: 'PKCH',
            logo: '/assets/images/team-logos/pakistan-logo.webp',
            shortName: 'PKCH',
            stats: { P: 5, W: 4, L: 1, NR: 0, PT: 8, NRR: '+1.644' },
            matches: [
                {
                    opponent: 'Australia Champions',
                    description: '2nd Match',
                    date: '03 Jul',
                    result: 'Won by 5 wkts',
                },
                {
                    opponent: 'West Indies Champions',
                    description: '4th Match',
                    date: '04 Jul',
                    result: 'Won by 29 runs',
                },
                {
                    opponent: 'India Champions',
                    description: '8th Match',
                    date: '06 Jul',
                    result: 'Won by 68 runs',
                },
                {
                    opponent: 'England Champions',
                    description: '10th Match',
                    date: '07 Jul',
                    result: 'Won by 79 runs',
                },
                {
                    opponent: 'South Africa Champions',
                    description: '13th Match',
                    date: '09 Jul',
                    result: 'Loss by 9 wkts',
                },
                {
                    opponent: 'West Indies Champions',
                    description: '1st Semi Final',
                    date: '12 Jul',
                    result: 'Won by 20 runs',
                },
                {
                    opponent: 'India Champions',
                    description: 'Final',
                    date: '13 Jul',
                    result: 'Loss by 5 wkts',
                }
            ],
        },
        {
            name: 'WICH',
            logo: '/assets/images/team-logos/west-indies-logo.webp',
            shortName: 'WICH',
            stats: { P: 5, W: 2, L: 3, NR: 0, PT: 4, NRR: '-1.127' },
            matches: [
                {
                    opponent: 'Pakistan Champions',
                    description: '4th Match',
                    date: '04 Jul',
                    result: 'Loss by 29 runs',
                },
                {
                    opponent: 'India Champions',
                    description: '6th Match',
                    date: '05 Jul',
                    result: 'Loss by 27 runs (DLS method)',
                },
                {
                    opponent: 'South Africa Champions',
                    description: '9th Match',
                    date: '07 Jul',
                    result: 'Won by 6 wkts',
                },
                {
                    opponent: 'England Champions',
                    description: '12th Match',
                    date: '09 Jul',
                    result: 'Won by 5 wkts',
                },
                {
                    opponent: 'Australia Champions',
                    description: '14th Match',
                    date: '10 Jul',
                    result: 'Loss by 55 runs',
                },
                {
                    opponent: 'Pakistan Champions',
                    description: '1st Semi Final',
                    date: '12 Jul',
                    result: 'Won by 20 runs',
                },
            ],
        },
        {
            name: 'INCH',
            logo: '/assets/images/team-logos/india-logo.webp',
            shortName: 'INCH',
            stats: { P: 5, W: 2, L: 3, NR: 0, PT: 4, NRR: '-1.267' },
            matches: [
                {
                    opponent: 'England Champions',
                    description: '1st Match',
                    date: '03 Jul',
                    result: 'Won by 3 wkts',
                },
                {
                    opponent: 'West Indies Champions',
                    description: '6th Match',
                    date: '05 Jul',
                    result: 'Won by 27 runs (DLS method)',
                },
                {
                    opponent: 'Pakistan Champions',
                    description: '8th Match',
                    date: '06 Jul',
                    result: 'Loss by 68 runs',
                },
                {
                    opponent: 'Australia Champions',
                    description: '11th Match',
                    date: '08 Jul',
                    result: 'Loss by 23 runs',
                },
                {
                    opponent: 'South Africa Champions',
                    description: '15th Match',
                    date: '10 Jul',
                    result: 'Loss by 54 runs',
                },
                {
                    opponent: 'Australia Champions',
                    description: '2nd Semi Final',
                    date: '12 Jul',
                    result: 'Won by 86 runs',
                },
                {
                    opponent: 'Pakistan Champions',
                    description: 'Final',
                    date: '13 Jul',
                    result: 'Won by 5 wkts',
                }
            ],
        },
        {
            name: 'SACH',
            logo: '/assets/images/team-logos/south-africa-logo.webp',
            shortName: 'SACH',
            stats: { P: 5, W: 2, L: 3, NR: 0, PT: 4, NRR: '-1.340' },
            matches: [
                {
                    opponent: 'England Champions',
                    description: '3rd Match',
                    date: '04 Jul',
                    result: 'Loss by 9 wkts',
                },
                {
                    opponent: 'Australia Champions',
                    description: '5th Match',
                    date: '05 Jul',
                    result: 'Loss by 104 runs',
                },
                {
                    opponent: 'West Indies Champions',
                    description: '9th Match',
                    date: '07 Jul',
                    result: 'Loss by 6 wkts',
                },
                {
                    opponent: 'Pakistan Champions',
                    description: '13th Match',
                    date: '09 Jul',
                    result: 'Won by 9 wkts',
                },
                {
                    opponent: 'India Champions',
                    description: '15th Match',
                    date: '10 Jul',
                    result: 'Won by 54 runs',
                },
                {
                    opponent: 'Australia Champions',
                    description: '2nd Semi Final',
                    date: '12 Jul',
                    result: 'Won by 86 runs',
                },
                {
                    opponent: 'Pakistan Champions',
                    description: 'Final',
                    date: '13 Jul',
                    result: 'Won by 5 wkts',
                }
            ],
        },
        {
            name: 'ENGCH',
            logo: '/assets/images/team-logos/england-logo.webp',
            shortName: 'ENGCH',
            stats: { P: 5, W: 1, L: 4, NR: 0, PT: 2, NRR: '-0.746' },
            matches: [
                {
                    opponent: 'India Champions',
                    description: '1st Match',
                    date: '03 Jul',
                    result: 'Loss by 3 wkts',
                },
                {
                    opponent: 'South Africa Champions',
                    description: '3rd Match',
                    date: '04 Jul',
                    result: 'Won by 9 wkts',
                },
                {
                    opponent: 'Australia Champions',
                    description: '7th Match',
                    date: '06 Jul',
                    result: 'Loss by 6 wkts',
                },
                {
                    opponent: 'Pakistan Champions',
                    description: '10th Match',
                    date: '07 Jul',
                    result: 'Loss by 79 runs',
                },
                {
                    opponent: 'West Indies Champions',
                    description: '12th Match',
                    date: '09 Jul',
                    result: 'Loss by 5 wkts',
                },
            ],
        }
    ];

    return (
        <>
            <div className="standing-table">
                <div className="standing-table-header">
                    <div>TEAMS</div>
                    <div>P</div>
                    <div>W</div>
                    <div>L</div>
                    <div>NR</div>
                    <div>PT</div>
                    <div>NRR</div>
                    <div></div>
                </div>

                {teams.map((team) => (
                    <div key={team.shortName}>
                        <div className="standing-table-body" onClick={() => toggleRowExpansion(team.shortName)}>
                            <div>
                                <Image src={team.logo} width={60} height={60} />
                            </div>
                            <div>{team.stats.P}</div>
                            <div>{team.stats.W}</div>
                            <div>{team.stats.L}</div>
                            <div>{team.stats.NR}</div>
                            <div>{team.stats.PT}</div>
                            <div>{team.stats.NRR}</div>
                            <div>
                                {expandedRows[team.shortName] ? <Image src="/assets/images/arrow-up.png" width={10} height={5} /> : <Image src="/assets/images/arrow-down.png" width={10} height={5} />}
                            </div>
                        </div>

                        {expandedRows[team.shortName] && (
                            <div className="standing-expanded">
                                <div className="standing-expanded-header">
                                    <div>Opponent</div>
                                    <div>Description</div>
                                    <div>Date</div>
                                    <div>Result</div>
                                </div>
                                {team.matches.map((match, index) => (
                                    <div key={index} className="standing-expanded-body">
                                        <div>{match.opponent}</div>
                                        <div>{match.description}</div>
                                        <div>{match.date}</div>
                                        <div>{match.result}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                   .standing-table {
                        width: 100%;
                   }

                   .standing-table-header {
                        width: 100%;
                        display: flex;
                        gap: 100px;
                        background-color: #DAB072;
                        padding: 15px;
                        border-radius: 10px;
                    }

                    @media screen and (max-width: 1023px) {
                    .standing-table-header {
                        gap: 0;
                    }
                    }

                    .standing-table-header div {
                        width: 10%;
                        font-family: "Poppins Semibold";
                        font-size: 16px;
                        text-transform: uppercase;
                        color: #2D3B7D;
                    }

                    @media screen and (max-width: 1023px) {
                    .standing-table-header div {
                        width: 10%;
                        min-width: 10%;
                        font-size: 16px;
                    }
                    }

                    .standing-table-header div:first-child {
                        width: 30%;
                    }

                    @media screen and (max-width: 1023px) {
                    .standing-table-header div:first-child {
                        width: 30%;
                    }
                    }

                    .standing-table-body {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: 100px;
                        padding: 15px;
                    }

                    @media screen and (max-width: 1023px) {
                    .standing-table-body{
                        gap: 0;
                    }
                    }

                    .standing-table-body div {
                        width: 10%;
                        font-family: "Poppins Light";
                        font-size: 16px;
                        letter-spacing: .04em;
                        text-transform: uppercase;
                        color: #ffffff;
                    }

                    @media screen and (max-width: 1023px) {
                    .standing-table-body div {
                        width: 10%;
                        min-width: 10%;
                        font-size: 14px;
                    }
                    }

                    .standing-table-body div:first-child {
                        width: 30%;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }

                    @media screen and (max-width: 1023px) {
                    .standing-table-body div:first-child {
                        width: 30%;
                        min-width: 30%;
                    }
                    }

                    @media screen and (max-width: 1023px) {
                    .standing-table-body div:last-child {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    }

                    .standing-table-body div:last-child {
                        cursor: pointer;
                    }

                    .standing-expanded {
                        width: 100%;
                        background-color: #27336D;
                        border-radius: 10px;
                    }

                    .standing-expanded-header {
                        width: 100%;
                        display: flex;
                        padding: 15px;
                    }

                    .standing-expanded-header div {
                        width: 25%;
                        min-width: 25%;
                    }

                    .standing-expanded-header div {
                        width: 10%;
                        font-family: "Poppins Semibold";
                        font-size: 14px;
                        letter-spacing: .04em;
                        text-transform: uppercase;
                        color: #ffffff;
                    }

                    .standing-expanded-body {
                        width: 100%;
                        display: flex;
                        padding: 15px;
                    }

                    .standing-expanded-body div {
                        width: 10%;
                        font-family: "Poppins Light";
                        font-size: 14px;
                        letter-spacing: .04em;
                        text-transform: uppercase;
                        color: #D3D3D3;
                    }

                    .standing-expanded-body div {
                        width: 25%;
                        min-width: 25%;
                    }
            `}</style>
        </>
    )
}

export default Standings
