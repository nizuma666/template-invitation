"use client";
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string | Date;
}



export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
 const calculateTimeLeft = () => {
  const target = new Date(
    new Date(targetDate).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  const difference = +target - +now;
  
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center w-full font-akatab">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-brown w-14 h-14 md:w-16 md:h-16 flex font-akatab flex-col items-center justify-center rounded-full shadow-md"
        >
          <span className="text-lg md:text-xl font-semibold text-white leading-none mb-0.5 font-sans">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-white font-medium tracking-wide font-sans">{item.label}</span>
        </div>
      ))}
    </div>
  );
}