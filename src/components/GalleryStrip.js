import React from "react";

const GalleryStrip = () => {
  return (
    <>
      <div className="gallery-camera-strip">
        <img alt="logo" src="/assets/images/gallery-strip.webp" />
      </div>

      <style jsx>{`
        .gallery-camera-strip {
          width: 100%;
        }

        .gallery-camera-strip img {
          width: 100%;
          display: flex;
        }
      `}</style>
    </>
  );
};

export default GalleryStrip;
