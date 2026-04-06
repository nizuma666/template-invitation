"use client";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string | Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
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
    { label: "Seconds", value: timeLeft.seconds },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Hours", value: timeLeft.hours },
    { label: "Days", value: timeLeft.days },
  ];

  return (
    <div className="flex flex-col gap-3 p-5 w-full bg-[#EDF3F9] backdrop-blur-sm rounded-2xl border border-white shadow-sm w-fit">
      <p className="text-[#629BC0] font-semibold text-[18px]  leading-none">Our Forever Begins In</p>
      <div className="border border-[#629BC01A] w-full h-[1px]" />
      <div className="flex gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF1A] px-5 py-4 flex flex-col items-center justify-center rounded-xl shadow-sm border border-white min-w-[64px]"
          >
            <span className="text-3xl font-semibold text-[#629BC0] font-sarabun leading-none">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-xs text-[#8ab5d1] mt-1 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}