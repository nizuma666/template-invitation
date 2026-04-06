"use client"
import Image from "next/image";
import Logo from "!/blue-sky/Arunara.png"
import Button from "./components/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import backgroundTop from "!/blue-sky/bgTop.svg"
import PhotoCover1 from "!/blue-sky/photoCover1.svg"
import WeddingText from "!/blue-sky/weddingText.svg"
import brideGroom from "!/blue-sky/brideGroom.png"
import CountdownTimer from "./components/countdown_timer";
import { CaretLeftIcon, CaretRightIcon, PlayIcon, PauseIcon } from "@phosphor-icons/react";

export default function Section1({ content, onOpen, audioRef }: { content: any, onOpen: () => void, audioRef: any }) {
    const [isOpen, setIsOpen] = useState(false)
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleOpenInvite = () => {
        setIsOpen(true);
        onOpen();
        // if (audioRef.current) {
        //     audioRef.current.play();
        //     setIsPlaying(true);
        // }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            const currentProgress = (audio.currentTime / audio.duration) * 100;
            setProgress(currentProgress || 0);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
    }, [audioRef]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'unset' : 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full relative min-h-[100dvh] bg-blue-background flex flex-col items-center">
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ y: 0 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] h-full bg-blue-background flex flex-col items-center pt-18 overflow-hidden"
                    >
                        <Image src={backgroundTop} alt="Arunara BlueSky" width={200} height={100} className="absolute inset-0 w-full z-0" />

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute top-5 left-1/2 -translate-x-1/2 z-30"
                        >
                            <Image src={Logo} alt="Arunara" width={145} height={32} />
                        </motion.div>

                        <div className="relative mx-auto mt-16 lg:mt-7 h-[280px] w-[260px]">
                            <motion.div
                                variants={{
                                    hidden: { y: -40, opacity: 0, rotate: 0 },
                                    visible: { y: 0, opacity: 1, rotate: -8, transition: { delay: 0.4, duration: 1 } }
                                }}
                                initial="hidden"
                                animate="visible"
                                className="bg-white p-4 rounded-lg flex flex-col absolute z-10 -top-5"
                            >
                                <Image src={PhotoCover1} alt="Photo Cover" width={180} height={180} className="w-[200px] h-[200px] object-cover" />
                                <div className="flex justify-between mt-2 items-center">
                                    <div className="flex gap-x-1">
                                        <div className="bg-[#E3EEFA] h-3 w-3 rounded-full" />
                                        <div className="bg-[#9BD1F4] h-3 w-3 rounded-full" />
                                        <div className="bg-[#F1EBE5] h-3 w-3 rounded-full" />
                                        <div className="bg-[#D8C0AF] h-3 w-3 rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-[#212121] font-semibold text-xs">20.01.2026</p>
                                        <Image src={WeddingText} alt="Wedding Text" width={40} height={20} />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { y: -40, opacity: 0 },
                                    visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 1 } }
                                }}
                                initial="hidden"
                                animate="visible"
                                className="bg-white p-4 rounded-lg flex flex-col relative z-20"
                            >
                                <Image src={PhotoCover1} alt="Photo Cover" width={180} height={180} className="w-[250px] h-[200px] object-cover" />
                                <div className="flex justify-between mt-2 items-center">
                                    <div className="flex gap-x-1">
                                        <div className="bg-[#E3EEFA] h-3 w-3 rounded-full" />
                                        <div className="bg-[#9BD1F4] h-3 w-3 rounded-full" />
                                        <div className="bg-[#F1EBE5] h-3 w-3 rounded-full" />
                                        <div className="bg-[#D8C0AF] h-3 w-3 rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-[#212121] font-semibold text-xs">20.01.2026</p>
                                        <Image src={WeddingText} alt="Wedding Text" width={40} height={20} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col z-20 mt-4"
                        >
                            <p className="text-[#909090] text-center font-sarabun text-sm">Wedding off</p>
                            <p className="text-[#212121] text-[56px] font-allison text-center leading-tight">{content?.name}</p>
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1 } } }}
                            className="flex flex-col items-center w-full max-w-[280px] z-20"
                        >
                            {/* <motion.div variants={itemVariants} className="w-full h-[3px] bg-[#629BC0]/20 rounded-full mb-6 relative overflow-hidden">
                                <motion.div
                                    className="absolute left-0 top-0 h-full bg-[#629BC0]"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                            </motion.div> */}
{/* 
                            <motion.div variants={itemVariants} className="flex items-center gap-x-10 mb-6">
                                <button className="text-[#629BC0] active:scale-90 transition-transform">
                                    <CaretLeftIcon size={24} weight="fill" />
                                </button>
                                <motion.button
                                    onClick={togglePlay}
                                    animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="w-14 h-14 bg-[#629BC0] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#629BC0]/30 active:scale-90 transition-transform"
                                >
                                    {isPlaying ? <PauseIcon size={28} weight="fill" /> : <PlayIcon size={28} weight="fill" className="ml-1" />}
                                </motion.button>
                                <button className="text-[#629BC0] active:scale-90 transition-transform">
                                    <CaretRightIcon size={24} weight="fill" />
                                </button>
                            </motion.div> */}

                            <motion.div variants={itemVariants} className="text-center mb-6">
                                <p className="text-[#757575] font-sarabun text-sm">
                                    Dear, <span className="font-bold text-[#212121]">{content?.guest || "Ferdian Septiawan"}</span>
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="w-full">
                                <Button onClick={handleOpenInvite} className="w-full py-3 rounded-full bg-[#629BC0] text-white font-medium shadow-md active:scale-95 transition-transform">
                                    Open Invitation
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full relative min-h-screen">
                <Image src={backgroundTop} alt="Arunara BlueSky" width={200} height={100} className="absolute left-0 right-0 w-full z-0 " />
                <div className="flex flex-col z-10 relative px-10 pt-[64px]">
                    <p className="text-[#629BC0] font-allison text-[32px] -mb-[20px]">Save The Date</p>
                    <p className="font-sarabun text-[32px] font-semibold leading-tight">Counting Down to Our Forever</p>
                    <p className="font-sarabun font-light mt-4 text-[16px] text-[#757575]">May every second leading to this day be filled with love, grace, and endless blessings</p>

                    <div className="relative z-10 flex items-center h-[165px] justify-center flex-col mt-8">
                        <Image src={brideGroom} alt="Photo Cover" width={180} height={180} className="absolute left-0 right-0 w-full z-0" />
                        <p className="text-white font-sarabun z-10">Wedding off</p>
                        <p className="text-white font-allison text-[64px] z-10">Jane & Jhon</p>
                    </div>

                    <div className="mt-9">
                        <CountdownTimer targetDate={new Date("2026-12-20T00:00:00")} />
                    </div>

                    <div className="flex gap-2 mt-10">
                        <div className="w-6 h-3 bg-[#629BC0] rounded-sm" />
                        <div className="w-6 h-3 bg-[#629BC0]/50 rounded-sm" />
                        <div className="w-6 h-3 bg-[#629BC0]/20 rounded-sm" />
                    </div>

                    <div className="mt-6">
                        <p className="font-sarabun text-[#757575] text-[16px] font-light leading-relaxed">
                            By the grace of God, we joyfully invite you to share in
                            the celebration of our marriage. Your presence will
                            be a cherished part of our story.
                        </p>
                    </div>

                    <div className="flex justify-center mt-12 mb-10 pb-10">
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="cursor-pointer">
                            <div className="w-[45px] h-[60px] border-[4px] border-[#629BC0] rounded-full flex flex-col items-center pt-3 gap-1">
                                <div className="w-1.5 h-1.5 bg-[#629BC0] rounded-full" />
                                <div className="w-1.5 h-1.5 bg-[#629BC0] rounded-full" />
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="-mt-2">
                                    <path d="M7 10l5 5 5-5" stroke="#629BC0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}