"use client"
import Section1 from "@/components/green-flag-prod/section1";
import content from "./content.json"
import Section2 from "@/components/green-flag-prod/section2";
import Section3 from "@/components/green-flag-prod/section3";
import Section4 from "@/components/green-flag-prod/section4";
import Section5 from "@/components/green-flag-prod/section5";
import Section6 from "@/components/green-flag-prod/section6";
import Section7 from "@/components/green-flag-prod/section7";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import onMusic from "!/green-flag/audioOnGreen.svg"
import offMusic from "!/green-flag/audioOffGreen.svg"
import { motion, AnimatePresence } from "motion/react"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GreenFlagProd(data: any) {
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
        const audio = new Audio(data?.data?.cover[0]?.music);
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

            <Section1 data={data?.data} onOpen={() => setIsOpen(true)} />
            <Section2 data={data.data.couple[0]} />
            <Section3 data={data.data.acara[0]} />
            <Section4 data={data.data.gallery[0]} />
            <Section5 data={data.data.gift[0]} />
            <Section6 data={data.data.cover[0]} greeting={data.data.greeting} />
            <Section7 />
        </div>
    );
}