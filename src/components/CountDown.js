'use client';
import { useEffect, useState } from 'react';

const targetDate = new Date('2025-07-18T00:00:00');

function getTimeLeft() {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const boxStyle = "flex flex-col items-center justify-center bg-[#27336d] text-white rounded-lg w-24 h-24 md:w-40 md:h-40 shadow-lg";
  const labelStyle = "text-xs md:text-sm opacity-80 tracking-wide";
  const numberStyle = "text-2xl md:text-5xl font-bold";

  return (
    <div className="flex flex-col items-center justify-center h-full py-20 px-4 text-center">
      <h1 className="text-white text-3xl md:text-5xl font-semibold mb-10">COMING SOON</h1>
      <div className="flex gap-4">
        <div className={boxStyle}>
          <div className={numberStyle}>{String(timeLeft.days).padStart(2, '0')}</div>
          <div className={labelStyle}>DAYS</div>
        </div>
        <div className={boxStyle}>
          <div className={numberStyle}>{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className={labelStyle}>HOURS</div>
        </div>
        <div className={boxStyle}>
          <div className={numberStyle}>{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className={labelStyle}>MINUTES</div>
        </div>
        <div className={boxStyle}>
          <div className={numberStyle}>{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className={labelStyle}>SECONDS</div>
        </div>
      </div>
    </div>
  );
}
