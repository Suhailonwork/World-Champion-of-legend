import React from 'react'

function Viewership() {
  return (
    <>
    <div className="viewership-container">
      <div className="viewership">
        <h2>80M+</h2>
        <p>Comulative TV Viewers in India</p>
      </div>
      <div className="viewership">
        <h2>65M+</h2>
        <p>Comulative TV Viewers in Pakistan</p>
      </div>
      <div className="viewership">
        <h2>75M+</h2>
        <p>Digital Viewers in India</p>
      </div>
      <div className="viewership">
        <h2>65M+</h2>
        <p>Digital Viewers in Pakistan</p>
      </div>
      <div className="viewership">
        <h2>20M+</h2>
        <p>Other regions US, UK, UAE, SA & rest of the world</p>
      </div>
      <div className="viewership">
        <h2>20M+</h2>
        <p>Global Facebook & YouTube viewership</p>
      </div>
    </div>

    <style jsx>{`
      .viewership-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
      }

      @media screen and (max-width: 767px) {
        .viewership-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
      }
      
      .viewership {
        width: calc(33.3333% - 30px);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      @media screen and (max-width: 767px) {
        .viewership {
          width: 100%;
      }
      }

      .viewership h2 {
        font-family: "Poppins Semibold";
        font-weight: 400;
        font-size: 25px;
        letter-spacing: -.02em;
        text-transform: uppercase;
        color: #D3D3D3;
      }

      .viewership p {
        font-family: "Poppins Light";
        font-size: 14px;
        color: #D3D3D3;
      }
    `}</style>
    </>
  )
}

export default Viewership