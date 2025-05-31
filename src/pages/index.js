import ArticleCard from "@/components/ArticleCard";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import GalleryMarquee from "@/components/GalleryMarquee";
import GalleryStrip from "@/components/GalleryStrip";
import Header from "@/components/Header";
import Standings from "@/components/Standings";
import VideoCard from "@/components/VideoCard";
import Viewership from "@/components/Viewership";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const Homepage = ({
  canonical_link,
  meta_title,
  meta_description,
  meta_keywords,
  page_content,
}) => {
  useEffect(() => {
    new Swiper(".news .swiper", {
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        710: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
      resistanceRatio: 0,
    });

    new Swiper(".videos .swiper", {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        710: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
      resistanceRatio: 0,
    });

    new Swiper(".tickets .swiper", {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        710: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
      resistanceRatio: 0,
    });

    new Swiper(".owners .swiper", {
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        710: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      resistanceRatio: 0,
    });
  });

  const news = [
    {
      news_title:
        "Cricket Legends to Illuminate Edgbaston in Prestigious ECB-Sanctioned T20 Extravaganza | Republic World",
      news_image:
        "https://img.republicworld.com/rimages/Untitleddesign31-170637096365516_9.webp",
      news_url:
        "https://www.republicworld.com/sports/cricket/cricket-legends-to-illuminate-edgbaston-in-prestigious-ecb-sanctioned-t20-extravaganza/",
    },
    {
      news_title:
        "Yuvraj Singh to feature in World Championship of Legends | More sports News - Times of India",
      news_image:
        "https://static.toiimg.com/thumb/msid-107198065,width-1070,height-580,imgsize-46906,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      news_url:
        "https://timesofindia.indiatimes.com/sports/more-sports/others/yuvraj-singh-to-feature-in-world-championship-of-legends/articleshow/107198063.cms",
    },
    {
      news_title:
        "Yuvraj, Raina, Lee to be part of ECB-sanctioned T20 tournament | Crickit",
      news_image:
        "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/_ed6c2494-f8d0-11ea-b206-fe77f4f0660e_1706782830040.jpg",
      news_url:
        "https://www.hindustantimes.com/cricket/yuvraj-singh-shahid-afridi-kevin-pietersen-to-be-part-of-ecb-sanctioned-t20-tournament-101706521517282.html",
    },
    {
      news_title:
        "Brett Lee and Yuvraj Singh to play in Ajay Devgn's Grand T20 cricket extravaganza in Birmingham | Republic World",
      news_image:
        "https://img.republicworld.com/rimages/Addaheading-2024-02-01T134907.826-170677572069416_9.webp",
      news_url:
        "https://www.republicworld.com/sports/cricket/brett-lee-and-yuvraj-singh-to-play-in-ajay-devgn-s-grand-t20-cricket-extravaganza-in-birmingham",
    },
    {
      news_title:
        "Ajay Devgan made strategic investment in WCL Dubai - Emirates 7 TV",
      news_image:
        "https://emirates7.tv/wp-content/uploads/2024/02/WCL-683x1024.webp",
      news_url:
        "https://emirates7.tv/ajay-devgan-made-strategic-investment-in-wcl-dubai/",
    },
    {
      news_title:
        "Ajay Devgn expresses his love for cricket as he invests in World Championship of Legends",
      news_image:
        "https://dubainewsweek.com/wp-content/uploads/2024/02/Ajay-Devgn-Image.webp",
      news_url:
        "https://dubainewsweek.com/ajay-devgn-cricket-world-championship-of-legends/",
    },
    {
      news_title:
        "World Champions of Legends tournament attracts big stars - News | Khaleej Times",
      news_image:
        "https://image.khaleejtimes.com/?uuid=02384262-e973-5b86-94ed-527552b49159&function=fit&type=preview&source=false&q=75&maxsize=1500&scaleup=0",
      news_url:
        "https://www.khaleejtimes.com/sports/cricket/world-champions-of-legends-tournament-attracts-big-stars",
    },
    {
      news_title:
        "Bollywood star Ajay Devgan invests in World Championship Of Legends to be held in England",
      news_image:
        "https://uaenews4u.com/wp-content/uploads/2024/02/04-1.jpg?w=763&h=1&crop=1",
      news_url:
        "https://uaenews4u.com/2024/02/02/bollywood-star-ajay-devgan-invests-in-world-championship-of-legends-to-be-held-in-england/",
    },
    {
      news_title:
        "Bollywood star Ajay Dev Gan invests in World Championship Of Legends to be held in England | UAE News 24/7",
      news_image: "https://uaenews247.com/wp-content/uploads/2024/02/04-2.jpg",
      news_url:
        "https://uaenews247.com/2024/02/02/bollywood-star-ajay-devgan-invests-in-world-championship-of-legends-to-be-held-in-england/",
    },
    {
      news_title:
        "Former England Captains Kevin Pietersen & Ian Bell to be a part of World Championship of Legends | Republic World",
      news_image:
        "https://img.republicworld.com/rimages/239947-170204342825816_9.webp",
      news_url:
        "https://www.republicworld.com/sports/cricket/former-england-captains-kevin-pietersen-ian-bell-to-be-a-part-of-world-championship-of-legends/",
    },
    {
      news_title:
        "World Championship of Legends: Veterans to represent their country in fresh format",
      news_image:
        "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240418101816.jpg",
      news_url:
        "https://aninews.in/news/sports/cricket/world-championship-of-legends-veterans-to-represent-their-country-in-fresh-format20240418160550/",
    },
    {
      news_title:
        "Tim Paine, Brett Lee, and Shaun Marsh back in action in World Championship of Legends | Republic World",
      news_image:
        "https://img.republicworld.com/rimages/whatsappimage2024-04-08at5.16.01pm_16:9-171260244851216_9.webp",
      news_url:
        "https://www.republicworld.com/sports/cricket/tim-paine-brett-lee-and-shaun-marsh-back-in-action-in-world-championship-of-legends/",
    },
    {
      news_title:
        "World Championship of Legends unveils action-packed schedule including India-Pakistan encounter",
      news_image:
        "https://media.crictracker.com/media/attachments/1690384163599_White-Cricket-ball.jpeg",
      news_url:
        "https://www.crictracker.com/cricket-news/world-championship-of-legends-unveils-action-packed-schedule-including-india-pakistan-encounter/",
    },
    {
      news_title:
        "Yuvraj, Raina, Lee to be part of ECB-sanctioned T20 tournament | Crickit",
      news_image:
        "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/_ed6c2494-f8d0-11ea-b206-fe77f4f0660e_1706782830040.jpg",
      news_url:
        "https://www.hindustantimes.com/cricket/yuvraj-singh-shahid-afridi-kevin-pietersen-to-be-part-of-ecb-sanctioned-t20-tournament-101706521517282.html",
    },
    {
      news_title:
        "Ajay Devgn joins forces with WCL: T20 Cricket Tournament in July, UK : Bollywood News - Bollywood Hungama",
      news_image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2024/02/Ajay_Devgn_WCP.jpeg",
      news_url:
        "https://www.bollywoodhungama.com/news/bollywood/ajay-devgn-joins-forces-wcl-t20-cricket-tournament-july-uk/",
    },
    {
      news_title:
        "Yuvraj Singh, Shahid Afridi, and Kevin Pietersen to illuminate Edgbaston in prestigious ECB-Sanctioned T20 extravaganza - SportsTak",
      news_image:
        "https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202401/20240127t083158773z944260.jpg",
      news_url:
        "https://m.thesportstak.com/cricket-news/yuvraj-singh-shahid-afridi-and-kevin-pietersen-to-illuminate-edgbaston-in-prestigious-ecb-sanctioned-t20-extravaganza",
    },
    {
      news_title:
        "How World Championship Of Legends Will Change Legends Cricket Forever",
      news_image:
        "https://media.assettype.com/outlookindia/import/uploadimage/library/16_9/16_9_5/IMAGE_1656995552.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
      news_url:
        "https://www.outlookindia.com/sports/cricket/world-championship-of-legends-encouraging-veterans-to-represent-their-country-in-a-fresh-format",
    },
    {
      news_title:
        "World Championship of Legends will change Legends Cricket forever | More sports News - Times of India",
      news_image:
        "https://static.toiimg.com/thumb/msid-109410743,width-1070,height-580,imgsize-53208,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      news_url:
        "https://timesofindia.indiatimes.com/sports/more-sports/world-championship-of-legends-will-change-legends-cricket-forever/articleshow/109410733.cms",
    },
    {
      news_title:
        "World cricket legends to hit Edgbaston this July - Edgbaston",
      news_image:
        "https://assets.edgbaston.com/wp-content/uploads/2024/04/Pietersen-Kallis-WCL.jpg",
      news_url:
        "https://edgbaston.com/news/world-cricket-legends-to-hit-edgbaston-this-july/",
    },
    {
      news_title:
        "World Championship of Legends to Bring Back the ‘Classic Bowl Out’ Format In its Inaugural Season | Republic World",
      news_image:
        "https://img.republicworld.com/all_images/team3-1719256521631-16_9.webp",
      news_url:
        "https://www.republicworld.com/sports/cricket/world-championship-of-legends-to-bring-back-the-classic-bowl-out-format-in-its-inaugural-season",
    },
    {
      news_title:
        "Chris Gayle to lead West Indies Champions in World Championship of Legends 2024",
      news_image:
        "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240611091703.jpg",
      news_url:
        "https://www.aninews.in/news/sports/cricket/chris-gayle-to-lead-west-indies-champions-in-world-championship-of-legends-202420240611144717",
    },
    {
      news_title:
        "World Championship of Legends 2024: Which teams have qualified for the semifinals of legends league? | Sporting News India",
      news_image:
        "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-07/GettyImages-1204966731.jpg?h=a375be57&itok=2FxpCENO",
      news_url:
        "https://www.sportingnews.com/in/cricket/news/world-championship-legends-2024-which-teams-have-qualified-semifinals-legends-league/755743ffcde8fa4d9c4f44e8",
    },
    {
      news_title:
        "World Championship of Legends SCORE: India Champions beat England, Pakistan Champions beat Australia in Birmingham - India Today",
      news_image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/yuvraj-singh-and-harbhajan-041010730-16x9_0.jpg?VersionId=NPEA8gVGIvm1SJ.1lkPRSr4PWvfD4UpZ",
      news_url:
        "https://www.indiatoday.in/sports/cricket/story/world-championship-of-legends-results-score-india-vs-england-pakistan-vs-australia-birmingham-2562167-2024-07-04",
    },
    {
      news_title:
        "India Champions beat Pakistan Champions to clinch 2024 World Championship of Legends title | Cricket News - Times of India",
      news_image:
        "https://static.toiimg.com/thumb/msid-111719698,width-1070,height-580,imgsize-53214,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      news_url: "http://toi.in/G0StYa",
    },
    {
      news_title:
        "WCL Became 2nd most Watched franchise cricket Globally | Republic World",
      news_image:
        "https://img.republicworld.com/all_images/wcl-became-2nd-most-watched-franchise-cricket-globally-1722441487813-16_9.webp",
      news_url:
        "https://www.republicworld.com/sports/wcl-became-2nd-most-watched-franchise-cricket-globally",
    },
    {
      news_title:
        "World Championship of Legends Strengthens Player Eligibility Requirements for Upcoming Season | Republic World",
      news_image:
        "https://img.republicworld.com/all_images/wcl-owners-1724934410678-16_9.webp",
      news_url:
        "https://www.republicworld.com/sports/cricket/world-championship-of-legends-strengthens-player-eligibility-requirements-for-upcoming-season",
    },
    {
      news_title:
        "Irfan Pathan, Ajay Devgan Announces Season 2 Of World Championship Of Legends",
      news_image:
        "https://static.toiimg.com/thumb/msid-114976074,width-400,resizemode-4/114976074.jpg",
      news_url:
        "https://timesofindia.indiatimes.com/sports/off-the-field/irfan-pathan-ajay-devgan-announces-season-2-of-world-championship-of-legends/amp_articleshow/114976087.cms",
    },
    {
      news_title:
        "World Championship of Legends Season 2 announced: Defending champions India to face Pakistan in July",
      news_image:
        "https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202412/676a68e4f037f-flags-representing-india-and-pakistan-on-the-field-245509449-16x9.jpg?size=1200:800",
      news_url:
        "https://thesportstak.com/cricket/story/world-championship-of-legends-season-2-announced-defending-champions-india-to-face-pakistan-in-july-3152209-2024-12-24",
    },
    {
      news_title:
        "India Champions sign Shikhar Dhawan for World Championship of Legends season 2",
      news_image:
        "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250125082031.jpg",
      news_url:
        "https://aninews.in/news/sports/cricket/india-champions-sign-shikhar-dhawan-for-world-championship-of-legends-season-220250125135039/",
    },
    {
      news_title:
        "AB de Villiers returns to Cricket, to lead Game Changers South Africa in World Championship of Legends",
      news_image:
        "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250128062253.jpg",
      news_url:
        "https://www.aninews.in/news/sports/cricket/ab-de-villiers-returns-to-cricket-to-lead-game-changers-south-africa-in-world-championship-of-legends20250128115543/",
    },
  
    {
      news_title:
        "Great news for cricket fans: Here's how you can enjoy 16-day free trip with legends like Yuvraj Singh, Shikhar Dhawan, Suresh Raina, Shahid Afridi",
      news_image:
        "https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202502/67b05f6ced05d-world-championship-of-legends-wcl-t20-league-153327750-16x9.jpeg?size=1600:900",
      news_url:
        "https://thesportstak.com/cricket/story/great-news-for-cricket-fans-heres-how-you-can-enjoy-16-day-free-trip-with-legends-like-yuvraj-singh-shikhar-dhawan-suresh-raina-shahid-afridi-3161019-2025-02-15",
    },
    {
      news_title:
        "WCL T20 2025: India-Pakistan Blockbuster Headlines 16-Day Tournament Across Birmingham, Northampton, Leicester and Leeds",
      news_image:
        "https://img.republicworld.com/all_images/world-championship-of-legends-1738578955186-16_9.webp?w=1200&h=675&q=75&format=webp",
      news_url:
        "https://www.republicworld.com/sports/cricket/wcl-t20-2025-india-pakistan-blockbuster-headlines-16-day-tournament-across-birmingham-northampton-leicester-and-leeds",
    },
   
    {
      news_title:
        "Alastair Cook to feature in World Championship of Legends 2025",
      news_image:
        "https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fmedia%2Fattachments%2F1708167520691_Alaistor-Cook.jpeg&w=1200&q=75",
      news_url:
        "https://www.crictracker.com/cricket-news/alastair-cook-to-feature-in-world-championship-of-legends-2025-3378/",
    },
  ];

  const videos = [
    {
      video_title:
        "India Champions vs England Champions - Full Match Highlights (3rd July)",
      video_image: "./assets/images/match/ic-ec-03.webp",
      video_url: "https://youtu.be/QWS95Yx4j18?feature=shared",
    },
    {
      video_title:
        "Australia Champions vs Pakistan Champions - Full Match Highlights (3rd July)",
      video_image: "./assets/images/match/ac-pc-03.webp",
      video_url: "https://youtu.be/ssU2HPNOSEw?feature=shared",
    },
    {
      video_title:
        "England Champions vs South Africa Champions - Full Match Highlights (4th July)",
      video_image: "./assets/images/match/ec-sac-04.webp",
      video_url: "https://youtu.be/LYVnvT14c24?feature=shared",
    },
    {
      video_title:
        "West Indies Champions vs Pakistan Champions - Full Match Highlights (4th July)",
      video_image: "./assets/images/match/wic-pc-04.webp",
      video_url: "https://youtu.be/I72n496JzFk?feature=shared",
    },
    {
      video_title:
        "Australia Champions vs South Africa Champions - Full Match Highlights (5th July)",
      video_image: "./assets/images/match/ac-sac-05.webp",
      video_url: "https://youtu.be/-smZkpFRwmI?feature=shared",
    },
    {
      video_title:
        "India Champions vs West Indies Champions - Full Match Highlights (5th July)",
      video_image: "./assets/images/match/ic-wic-05.webp",
      video_url: "https://youtu.be/T8bJexwKEWw?feature=shared",
    },
    {
      video_title:
        "Australia Champions vs England Champions - Full Match Highlights (6th July)",
      video_image: "./assets/images/match/ac-ec-06.webp",
      video_url: "https://youtu.be/AU4N2nTTygI?feature=shared",
    },
    {
      video_title:
        "India Champions vs Pakistan Champions - Full Match Highlights (6th July)",
      video_image: "./assets/images/match/ic-pc-06.webp",
      video_url: "https://youtu.be/-TdMtpEjFDw?feature=shared",
    },
    {
      video_title:
        "West Indies Champions vs South Africa Champions - Full Match Highlights (7th July)",
      video_image: "./assets/images/match/wic-sac-07.webp",
      video_url: "https://youtu.be/RsKyi0JYgFw?feature=shared",
    },
    {
      video_title:
        "England Champions vs Pakistan Champions - Full Match Highlights (7th July)",
      video_image: "./assets/images/match/ec-pc-07.webp",
      video_url: "https://youtu.be/-JIIelAG1M4?feature=shared",
    },
    {
      video_title:
        "India Champions vs Australia Champions - Full Match Highlights (8th July)",
      video_image: "./assets/images/match/ic-ac-08.webp",
      video_url: "https://youtu.be/fXE-b6aZELk?feature=shared",
    },
    {
      video_title:
        "England Champions vs West Indies Champions - Full Match Highlights (9th July)",
      video_image: "./assets/images/match/ec-wic-09.webp",
      video_url: "https://youtu.be/DJUTsaur7BY?feature=shared",
    },
    {
      video_title:
        "Pakistan Champions vs South Africa Champions - Full Match Highlights (9th July)",
      video_image: "./assets/images/match/pc-sac-09.webp",
      video_url: "https://youtu.be/r40t_rxznWA?feature=shared",
    },
    {
      video_title:
        "India Champions vs South Africa Champions - Full Match Highlights (10th July)",
      video_image: "./assets/images/match/ic-sac-10.webp",
      video_url: "https://youtu.be/BggptQa3Sz0?feature=shared",
    },
    {
      video_title:
        "West Indies Champions vs Australia Champions - Full Match Highlights (10th July)",
      video_image: "./assets/images/match/wic-ac-10.webp",
      video_url: "https://youtu.be/2lHWxbo8iU4?feature=shared",
    },
    {
      video_title:
        "Pakistan Champions vs West Indies Champions - Semi-Final Highlights (12th July)",
      video_image: "./assets/images/match/pc-wic-12.webp",
      video_url: "https://youtu.be/y-UKoRso2O4?feature=shared",
    },
    {
      video_title:
        "Australia Champions vs India Champions - Semi-Final Highlights (12th July)",
      video_image: "./assets/images/match/ac-ic-12.webp",
      video_url: "https://youtu.be/76NJfPIxIss?feature=shared",
    },
    {
      video_title:
        "Pakistan Champions vs India Champions - Final Highlights (13th July)",
      video_image: "./assets/images/match/pc-ic-13.webp",
      video_url: "https://youtu.be/CraJy_hGPSk?feature=shared",
    },
  ];

  const tickets = [
    "/assets/images/tickets/match-1-pak-eng.webp",
    "/assets/images/tickets/match-2-wi-sa.webp",
    "/assets/images/tickets/match-3-eng-aus.webp",
    "/assets/images/tickets/match-4-ind-pak.webp",
    "/assets/images/tickets/match-5-ind-sa.webp",
    "/assets/images/tickets/match-6-eng-wi.webp",
    "/assets/images/tickets/match-7-aus-wi.webp",
    "/assets/images/tickets/match-8-pak-sa.webp",
    "/assets/images/tickets/match-9-eng-sa.webp",
    "/assets/images/tickets/match-10-ind-aus.webp",
    "/assets/images/tickets/match-11-pak-wi.webp",
    "/assets/images/tickets/match-12-aus-sa.webp",
    "/assets/images/tickets/match-13-ind-eng.webp",
    "/assets/images/tickets/match-14-aus-pak.webp",
    "/assets/images/tickets/match-15-ind-wi.webp",
    "/assets/images/tickets/match-16-sf1-sf4.webp",
    "/assets/images/tickets/match-17-sf2-sf3.webp",
    "/assets/images/tickets/match-18-f1-f2.webp",
  ];

  return (
    <>
      <Head>
        <title>{meta_title}</title>
        <link rel="canonical" href={canonical_link} />
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keywords} />
      </Head>
      <div className="main">
        <Header />
        <div className="body">
          <div className="hero-container">
            <Link href="/tickets" legacyBehavior>
              <a>
                <img alt="logo" src="/assets/images/hero-image-new.webp" />
              </a>
            </Link>
          </div>
          <div className="news news-container">
            <div className="container-header">
              <h1>WCL Latest News</h1>
              <Button href="/news"></Button>
            </div>
            <div className="container-grid">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {news.reverse().map((article, index) => {
                    return (
                      <div className="swiper-slide" key={index}>
                        <ArticleCard
                          title={article.news_title}
                          image={article.news_image}
                          url={article.news_url}
                          type="Article"
                        ></ArticleCard>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="videos news-container">
            <div className="container-header">
              <h1>WCL Match Highlights</h1>
              <Button href="/videos"></Button>
            </div>
            <div className="container-grid">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {videos.map((video, index) => {
                    return (
                      <div className="swiper-slide" key={index}>
                        <VideoCard
                          title={video.video_title}
                          image={video.video_image}
                          url={video.video_url}
                          type="Video"
                        ></VideoCard>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="tickets news-container">
            <div className="container-header">
              <h1>WCL Tickets 2025</h1>
              <Button href="/tickets"></Button>
            </div>
            <div className="container-grid">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {tickets.map((ticket, index) => {
                    return (
                      <div className="swiper-slide" key={index}>
                        <img alt="logo" src={ticket} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="owners news-container">
            <div className="container-header">
              <h1>WCL League Owners</h1>
            </div>
            <div className="container-grid">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {/* <div className="swiper-slide">
                    <Link href={"/owner/ajay-devgn"}>
                      <div
                        className="wcl-owner"
                        style={{
                          backgroundImage:
                            "url('/assets/images/owners/ajay-devgn.webp')",
                        }}
                      >
                        <div>
                          <h2>Ajay Devgn</h2>
                          <p>Co-Owner</p>
                        </div>
                      </div>
                    </Link>
                  </div> */}
                  <div className="swiper-slide">
                    <Link href={"/owner/harshit-tomar"}>
                      <div
                        className="wcl-owner"
                        style={{
                          backgroundImage:
                            "url('/assets/images/owners/harshit-tomar.webp')",
                        }}
                      >
                        <div>
                          <h2>Harshit Tomar</h2>
                          <p>Founder & CEO</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="standings-container" id="standings">
            <div className="standing-header">
              <h1>WCL Standings 2024</h1>
            </div>
            <Standings></Standings>
            <div className="standings-footer">
              <p>
                Track your team’s journey in WCL Standings page. This section
                offers league table updated after each match, reflecting each
                team’s total points, wins, losses, net run rate, and overall
                ranking in the World Championship of Legends Cricket. The WCL
                Points Table 2024 is the definitive gauge of performance,
                showing which teams led the pack and which left behind With six
                teams competing in a round-robin format, every match result will
                directly impact the standings and the race for the playoff
                spots.
              </p>
              <h3>
                THE FIRST SEASON OF WCL SPANNED 15 DAYS WITH 18 MATCHES,
                CREATING MEMORABLE MOMENTS. NOTABLE MATCHES INCLUDED:
              </h3>
              <ul>
                <li>
                  <span>SEMI-FINAL 1:</span> PAKISTAN CHAMPIONS VS. WEST INDIES
                  CHAMPIONS (JULY 12TH, 2024): In a closely fought contest,
                  Pakistan Champions continued their winning streak with a
                  20-run victory over West Indies Champions to claim the second
                  spot in the finals.
                </li>
                <li>
                  <span>SEMI-FINAL 2:</span> INDIA CHAMPIONS VS. AUSTRALIA
                  CHAMPIONS (JULY 12TH, 2024): A dominating performance by India
                  Champions saw them defeat Australia Champions by 86 runs,
                  securing their place in the finals.
                </li>
                <li>
                  <span>Finals:</span> INDIA CHAMPIONS VS. PAKISTAN CHAMPIONS
                  (JULY 13TH, 2024): The much-anticipated final delivered on its
                  promise, as India Champions defeated Pakistan Champions by 5
                  wickets to claim the inaugural WCL trophy.
                </li>
              </ul>
            </div>
          </div>
          <div className="viewerships-container">
            <div className="viewerships-header">
              <h1>WCL Viewership 2024</h1>
            </div>
            <Viewership></Viewership>
          </div>
          <div className="gallery-container">
            <GalleryStrip></GalleryStrip>
            <GalleryMarquee></GalleryMarquee>
            <GalleryStrip></GalleryStrip>
          </div>
        </div>
        <Footer pagecontent={page_content} />
      </div>

      <style jsx>{`
        .hero-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-container img {
          width: 100%;
          border-radius: 20px;
        }

        .news-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 120px;
        }

        .container-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .container-header h1 {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-weight: 500;
          font-size: 30px;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }

        .container-grid {
          width: 100%;
        }

        .container-grid img {
          width: 100%;
        }

        .wcl-owner {
          width: 100%;
          height: 480px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          display: flex;
          padding: 15px;
          position: relative;
        }

        .wcl-owner:after {
          content: "";
          height: 100%;
          width: 100%;
          background-color: #00000050;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 20px;
        }

        .wcl-owner div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: auto;
          margin-right: auto;
        }

        .wcl-owner h2 {
          margin: auto auto 0 0;
          color: #d3d3d3;
          font-family: "Poppins Regular";
          font-size: 15px;
          text-transform: uppercase;
          z-index: 1;
        }

        .wcl-owner p {
          margin: auto auto 0 0;
          color: #d3d3d3;
          font-family: "Poppins Light";
          font-size: 12px;
          text-transform: uppercase;
          z-index: 1;
        }

        .standings-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 120px;
        }

        .standing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .standing-header h1 {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-weight: 500;
          font-size: 30px;
          letter-spacing: .-04em;
          text-transform: uppercase;
        }

        .standings-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .standings-footer p {
          color: #ffffff;
          font-family: "Poppins Light";
          font-weight: 500;
          font-size: 16px;
          letter-spacing: 0.02em;
        }

        .standings-footer h3 {
          color: #ffffff;
          font-family: "Poppins Bold";
          font-weight: 400;
          font-size: 18px;
          margin-top: 20px;
        }

        .standings-footer ul {
          display: flex;
          flex-direction: column;
          gap: 5px;
          list-style: none;
        }

        .standings-footer ul li {
          color: #ffffff;
          font-family: "Poppins Light";
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .standings-footer ul li span {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .viewerships-container {
          width: 100%;
          max-width: 1280px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 120px;
        }

        .viewerships-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .viewerships-header h1 {
          color: #ffffff;
          font-family: "Poppins Semibold";
          font-weight: 500;
          font-size: 30px;
          letter-spacing: .-04em;
          text-transform: uppercase;
        }

        .gallery-container {
          width: 100%;
          margin-top: 120px;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps({ req }) {
  return {
    props: {
      canonical_link: `https://${req.headers.host}${req.url}`,
      meta_title:
        "World Championship of Legends Cricket 2025: Schedule, Teams, and Updates - WCL T20",
      meta_description:
        "Discover everything about the World Championship of Legends Cricket 2025! Get the latest schedule, team lineups, and updates for this thrilling T20 tournament featuring cricket legends like Yuvraj Singh and Shahid Afridi, starting July 18, 2025, at Edgbaston Stadium.",
      meta_keywords:
        "World Championship of Legends Cricket 2025, T20 tournament, Edgbaston, Northampton, WCL T20",
      page_content: `
        <h1>World Championship of Legends Cricket 2025 – World Cup of Legends</h1>
        <p>The World Championship of Legends Cricket (WCL) returns in July 2025 with an even larger format and stronger squads. After a successful inaugural season, this premier legends league is back to unite iconic former players on the field once more. The 2025 season will be hosted across four UK cities – Birmingham, Northampton, Leicester, and Leeds – from 18th July to 2nd August 2025, making it a nationwide festival of cricket nostalgia and competition.</p>
        <p>Sanctioned by the ECB (England and Wales Cricket Board), WCL is the only legends cricket league in the world officially approved by a cricket board of a test playing nation. This endorsement ensures the tournament’s credibility and high standards. The World Championship of Legends Cricket brings together <span class="link" href="/teams">six champion teams</span> of retired cricket superstars – India, Pakistan, England, Australia, South Africa, and West Indies – each laden with national legends who have thrilled fans in years past. These teams will compete in a round-robin WCL T20 tournament format, reviving historic rivalries and showcasing that class is permanent. With more teams and matches in 2025, WCL is poised to be one of the most anticipated cricket events of the year.</p>
        <h2>What to Expect in WCL 2025</h2>
        <p>Fans will enjoy daily matches packed with legendary performances and WCL <span class="link" href="/videos">match highlights</span> capturing every six, wicket, and game-changing moment. Follow official channels for WCL live streaming so you don’t miss a ball, and stay updated with <span class="link" href="/news">WCL news updates</span> on team announcements, match results, and tournament developments.</p>
        <p>Throughout the season, the WCL 2025 schedule and WCL Points Table (standings) will be updated so you can track each team’s journey. From Edgbaston cricket matches to matches at Headingly, every venue will witness the magic of cricket legends competing for glory.</p>
        <p>This World Championship of Legends Cricket season promises nostalgia and top-tier entertainment. Legendary captains like Yuvraj Singh, Shahid Afridi, Eoin Morgan, Brett Lee, AB De Villiers, and Chris Gayle lead their squads, adding star power and experience. Whether you’re a lifelong cricket follower or a new fan, WCL 2025 offers a unique chance to watch your cricket legends back in action. Secure your WCL tickets to be part of history, and get ready for a thrilling ride as the World Championship of Legends Cricket lights up the UK with legendary talent and fan-friendly excitement.</p>
      `,
    },
  };
}

export default Homepage;
