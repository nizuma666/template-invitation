"use client"
import Section1 from "@/components/bumi-renjana-prod/section1";
import content from "./content.json"
import Section2 from "@/components/bumi-renjana-prod/section2";
import Section3 from "@/components/bumi-renjana-prod/section3";
import Section4 from "@/components/bumi-renjana-prod/section4";
import Section5 from "@/components/bumi-renjana-prod/section5";
import Section6 from "@/components/bumi-renjana-prod/section6";
import Section7 from "@/components/bumi-renjana-prod/section7";
import Section8 from "@/components/bumi-renjana-prod/section8";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import onMusic from "!/bumi-renjana/music-on.svg"
import offMusic from "!/bumi-renjana/music-off.svg"
import { motion, AnimatePresence } from "motion/react"
import Outside from "@/components/bumi-renjana-prod/outside";
import MenuFloat from "@/components/bumi-renjana-prod/components/menuFloat";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BumiRenjanaProd({data}: any) {
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

  console.log("data bumi", data)

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
        {isOpen && (
          <div className="absolute inset-0 -z-0">
            <div className="sticky top-0 h-dvh w-full">
              <Image
                src="/bumi-renjana/bg-section1.svg"
                alt="Background"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}
        <Section1 content={{...data?.cover[0], ...data?.acara[0], listUndangan: data?.listUndangan}} onOpen={() => setIsOpen(true)} />
        <Section2 content={{...data?.couple[0]}} />
        <Section3 content={{...data?.acara[0]}} />
        <Section4 content={{...data?.gallery[0], ...data?.acara[0],}} />
        <Section5 content={{...data?.story}}/>
        <Section6 data={data?.cover[0]}  greeting={data?.greeting} />
        <Section7 content={{...data?.gift[0]}} />
        <Section8 />
         {isOpen && (
           <MenuFloat />
         )}
      </div>
    </div>
  );
}