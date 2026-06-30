"use client"
import Section1 from "@/components/blue-sky-prod/section1";
import Section2 from "@/components/blue-sky-prod/section2";
import Section3 from "@/components/blue-sky-prod/section3";
import Section4 from "@/components/blue-sky-prod/section4";
import Section5 from "@/components/blue-sky-prod/section5";
import Section6 from "@/components/blue-sky-prod/section6";
import Section7 from "@/components/blue-sky-prod/section7";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import onMusic from "!/bumi-renjana/music-on.svg"
import offMusic from "!/bumi-renjana/music-off.svg"
import { motion, AnimatePresence } from "motion/react"
import Outside from "@/components/blue-sky-prod/outside";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BlueSkyProd({data}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const audio = new Audio(data?.cover[0].music);
    audio.loop = true;
    audioRef.current = audio;

    const playAudio = async () => {
      try {
        if (isOpen) {
          await audio.play();
          setIsPlaying(true);
        }
      } catch {
        console.warn("Autoplay diblokir browser, tunggu interaksi user 🎧");
        setIsPlaying(false);
      }
    };
    playAudio();

    const handleUnload = () => {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(!isPlaying);
    };

    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      audio.currentTime = 0
      audioRef.current = null;

      window.removeEventListener("beforeunload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isOpen]);

  const handleToggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full lg:flex relative min-h-dvh">
      <Outside content={{...data?.cover[0], ...data?.acara[0]}} />
      <div className="max-w-md relative  ">
        <AnimatePresence>
          {isOpen && (
            <motion.button
              onClick={handleToggleMusic}
              className="fixed bottom-40 left-5 z-[99] rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="onMusic"
                    initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={onMusic}
                      alt="Music Off"
                      width={40}
                      height={40}
                      className="animate-spin-slow"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="offMusic"
                    initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={offMusic}
                      alt="Music On"
                      width={40}
                      height={40}
                      className="opacity-70"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </AnimatePresence>
        <Section1 content={{...data?.cover[0], ...data?.acara[0], ...data?.gallery[0], listUndangan: data?.listUndangan}} onOpen={() => setIsOpen(true)} audioRef={audioRef} />
        <Section2 content={{...data?.couple[0]}} />
        <Section3 content={{...data?.story?.[0]}} />
        <Section4 content={{...data?.gallery[0], ...data?.acara[0]}} />
        <Section5 content={{...data?.gift[0]}} />
        <Section6 content={data?.cover[0]} data={data?.cover[0]} greeting={data?.greeting} />
        <Section7 />
      </div>
    </div>
  );
}
