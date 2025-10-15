"use client"
import Section1 from "@/components/peach-love/section1";
import content from "./content.json"
import Section2 from "@/components/peach-love/section2";
import Section3 from "@/components/peach-love/section3";
import Section4 from "@/components/peach-love/section4";
import Section5 from "@/components/peach-love/section5";
import Section6 from "@/components/peach-love/section6";
import Section7 from "@/components/peach-love/section7";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import onMusic from "!/onMusic.svg"
import offMusic from "!/offMusic.svg"
// import musicFile from "!/music/backsound.mp3"
import { motion, AnimatePresence } from "motion/react"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function PeachLove() {
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
        await audio.play();
        setIsPlaying(true);
      } catch {
        console.warn("Autoplay diblokir browser, tunggu interaksi user dulu 🎧");
        setIsPlaying(false);
      }
    };
    playAudio();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

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
      <motion.button
        onClick={handleToggleMusic}
        className="fixed bottom-5 right-5 z-[99] rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
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
                src={offMusic}
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
                src={onMusic}
                alt="Music On"
                width={40}
                height={40}
                className="opacity-70"
              />

            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <Section1 content={content?.section1} onOpen={() => setIsOpen(true)} />
      <Section2 content={content?.section2} />
      <Section3 content={content?.section3} />
      <Section4 content={content?.section4} />
      <Section5 content={content?.section5} />
      <Section6 content={content?.section6} />
      <Section7 />
    </div>
  );
}