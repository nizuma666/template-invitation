"use client"
import Section1 from "@/components/bumi-renjana/section1";
import content from "./content.json"
import Section2 from "@/components/bumi-renjana/section2";
import Section3 from "@/components/bumi-renjana/section3";
import Section4 from "@/components/bumi-renjana/section4";
import Section5 from "@/components/bumi-renjana/section5";
import Section6 from "@/components/bumi-renjana/section6";
import Section7 from "@/components/bumi-renjana/section7";
import Section8 from "@/components/bumi-renjana/section8";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import onMusic from "!/bumi-renjana/music-on.png"
import offMusic from "!/bumi-renjana/music-off.png"
import { motion, AnimatePresence } from "motion/react"
import Outside from "@/components/bumi-renjana/outside";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GreenFlag() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const audio = new Audio("/music/backsound.mp3");
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
      <Outside />
      <div className="max-w-md">
        <AnimatePresence>
          {isOpen && (
            <motion.button
              onClick={handleToggleMusic}
              className="fixed bottom-50 right-5 z-[99] rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
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

        <Section1 onOpen={() => setIsOpen(true)} />
        <Section2 content={content?.section2} />
        <Section3 content={content?.section3} />
        <Section4 content={content?.section5} />
        <Section5 content={content?.section4} />
        <Section6 content={content?.section6} />
        <Section7 content={content?.section4} />
        <Section8 />
      </div>
    </div>
  );
}