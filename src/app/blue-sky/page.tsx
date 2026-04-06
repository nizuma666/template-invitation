"use client"
import Section1 from "@/components/blue-sky/section1";
import content from "./content.json"
import Section2 from "@/components/blue-sky/section2";
import Section3 from "@/components/green-flag/section3";
import Section4 from "@/components/blue-sky/section4";
import Section5 from "@/components/blue-sky/section5";
import Section6 from "@/components/blue-sky/section6";
import Section7 from "@/components/blue-sky/section7";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import onMusic from "!/green-flag/audioOnGreen.svg"
import offMusic from "!/green-flag/audioOffGreen.svg"
import { motion, AnimatePresence } from "motion/react"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BlueSky() {
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

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // 2. Trigger Play hanya saat PERTAMA KALI dibuka (isOpen)
  useEffect(() => {
    const playAudio = async () => {
      // CEK: Hanya play jika isOpen TRUE DAN audio sedang pause (tidak sedang play)
      if (isOpen && audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          console.warn("Autoplay diblokir browser 🎧");
          setIsPlaying(false);
        }
      }
    };
    
    playAudio();
  }, [isOpen])

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
    <div className="w-full max-w-md mx-auto relative h-dvh">
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }} // 👈 jeda 0.5 detik
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

      <Section1 audioRef={audioRef} content={content?.section1} onOpen={() => setIsOpen(true)} />
      <Section2 content={content?.section2} />
      {/* <Section3 content={content?.section3} /> */}
      <Section4 content={content?.section4} />
      <Section5 content={content?.section5} />
      <Section6 content={content?.section4} /> 
      <Section7 />
    </div>
  );
}