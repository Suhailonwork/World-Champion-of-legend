import React from "react";

export const CaptainCard = ({ name, jersey, type, metric1, metric2, image, about }) => {
  return (
    <>
      <div className="player max-w-sm p-5 text-white">
        <div className="font-bold text-xl text-center">Captain</div>
        <div className="player-body">
          <div className="col-left">
            {/* <div>
                            <h2>{metric1}</h2>
                            <p>{type === "Bowler" ? "Wickets" : "Runs"}</p>
                        </div>
                        <div>
                            <h2>{metric2}</h2>
                            <p>{type === "Bowler" ? "Runs" : "Balls"}</p>
                        </div> */}
          </div>
          <div className="col-right">
            <h2>{jersey}</h2>
          </div>
          <img alt="logo" src={image} />
        </div>
        <div className="separator"></div>
        <div className="player-footer">
          <div className="player-detail">
            <h4 className="font-bold text-2xl uppercase">
              {name}
            </h4>
            <p className="text-justify">{about}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .player {
          width: 100%;
          display: flex;
          flex-direction: column;
          background-color: #27336d;
          border-radius: 20px;
        }

        .player-body {
          height: 360px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }

        .col-left {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .col-left div {
          display: flex;
          flex-direction: column;
          gap: 0px;
        }

        .col-left div h2 {
          color: #ffffff;
          font-family: "Schabo";
          font-size: 50px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .col-left div p {
          color: #ffffff;
          font-family: "Poppins Light";
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .col-right h2 {
          color: #ffffff;
          font-family: "Schabo";
          font-weight: 500;
          font-size: 200px;
          line-height: 10.5rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        @media screen and (max-width: 1023px) {
          .col-right h2 {
            font-size: 200px;
            line-height: 13rem;
          }
        }

        .player img {
          width: 250px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        @media screen and (max-width: 1023px) {
          .player img {
            width: 300px;
          }
        }

        .separator {
          width: 100%;
          height: 1px;
          background-color: #ffffff;
          opacity: 0.4;
        }

        .player-footer {
          width: 100%;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .divider {
          width: 1px;
          height: 40px;
          background-color: #ffffff;
          opacity: 0.4;
        }

        .player-footer h2 {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-size: 40px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .player-detail {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .player-detail p {
          color: #abb1cb;
          font-family: "Poppins Light";
          font-size: 12px;
        }
      `}</style>
    </>
  );
};
