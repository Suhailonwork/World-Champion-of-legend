import Image from "next/image";
import React from "react";

const GalleryMarquee = () => {
  return (
    <>
      <div className="gallery-marquee">
        <div className="marquee-wrapper">
          <img alt="logo" src="/assets/images/gallery/gallery-image-16.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-21.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-24.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-31.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-37.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-39.webp" />
        </div>
        <div className="marquee-wrapper">
          <img alt="logo" src="/assets/images/gallery/gallery-image-16.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-21.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-24.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-31.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-37.webp" />
          <img alt="logo" src="/assets/images/gallery/gallery-image-39.webp" />
        </div>
      </div>

      <style jsx>{`
        .gallery-marquee {
          display: inline-flex;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-wrapper {
          will-change: transform;
          animation: galleryMarquee 90s linear infinite;
        }

        .gallery-marquee img {
          width: 320px;
          height: 320px;
          object-fit: cover;
          display: inline-flex;
          margin-top: 4px;
          padding: 0 2px;
        }

        @media screen and (max-width: 1023px) {
          .gallery-marquee img {
            width: 240px;
            height: 240px;
          }
        }

        @keyframes galleryMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default GalleryMarquee;
