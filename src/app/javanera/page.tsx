"use client"
import Section1 from "@/components/javanera/section1";
import Section2 from "@/components/javanera/section2";
import Section3 from "@/components/javanera/section3";
import Section4 from "@/components/javanera/section4";
import Section5 from "@/components/javanera/section5";
import Section6 from "@/components/javanera/section6";
import Section7 from "@/components/javanera/section7";
import Section8 from "@/components/javanera/section8";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import onMusic from "!/bumi-renjana/music-on.svg"
import offMusic from "!/bumi-renjana/music-off.svg"
import { motion, AnimatePresence, MotionConfig } from "motion/react"
import Outside from "@/components/javanera/outside";
import MenuFloat from "@/components/javanera/components/menu_float";
import PatternBg from "@/components/javanera/components/pattern_bg";

export default function Javanera() {
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
    const audio = new Audio("/music/javanera-gamelan.wav");
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

    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
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
    <MotionConfig reducedMotion="user">
      <div className="w-full lg:flex relative min-h-dvh">
        <Outside />
        <div className="w-full max-w-md mx-auto shrink-0 relative">
          <AnimatePresence>
            {isOpen && (
              <motion.button
                onClick={handleToggleMusic}
                aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
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
                      <Image src={onMusic} alt="" width={40} height={40} className="animate-spin-slow" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="offMusic"
                      initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: -45 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image src={offMusic} alt="" width={40} height={40} className="opacity-70" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </AnimatePresence>
          {isOpen && (
            <div className="absolute inset-0">
              <div className="sticky top-0 h-dvh w-full">
                <PatternBg tone="light" />
              </div>
            </div>
          )}
          <Section1 onOpen={() => setIsOpen(true)} />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          {isOpen && <MenuFloat />}
        </div>
      </div>
    </MotionConfig>
  );
}
