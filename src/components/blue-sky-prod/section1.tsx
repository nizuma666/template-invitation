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
import dayjs from "dayjs";
import { useParams } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section1({ content, onOpen, audioRef }: { content: any, onOpen: () => void, audioRef: any }) {
    const [isOpen, setIsOpen] = useState(false)
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const params = useParams()

    const filterUndangan = content?.listUndangan?.filter((item: any) => item.nama === decodeURIComponent(params.subslug as string))

    const galleryImages: string[] = content?.images ?? []
    const coverPhoto1 = galleryImages[0] || PhotoCover1
    const coverPhoto2 = galleryImages[1] || galleryImages[0] || PhotoCover1

    const togglePlay = () => {
        if (audioRef?.current) {
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
        if (onOpen) onOpen();
    };

    useEffect(() => {
        const audio = audioRef?.current;
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
                        exit={{ y: "100%", }}
                        transition={{ duration: 2, ease: [0.5, 2, 0.5, 2] }}
                        className="absolute inset-0 z-[100] h-full w-full bg-blue-background flex flex-col items-center pt-18 overflow-hidden"
                    >
                        <Image src={backgroundTop} alt="Arunara BlueSky" width={200} height={100} className="absolute inset-0 w-full z-0" />

                        <motion.div
                            initial={{ y: -60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="absolute top-5 left-1/2 -translate-x-1/2 z-30"
                        >
                            <Image src={Logo} alt="Arunara" width={145} height={32} />
                        </motion.div>

                        <div className="relative mx-auto mt-16 lg:mt-7 h-[280px] w-[260px]">
                            <motion.div
                                variants={{
                                    hidden: { x: 120, opacity: 0, rotate: 0 },
                                    visible: {
                                        x: 0, opacity: 1, rotate: -8,
                                        transition: {
                                            delay: 0.5, duration: 2,
                                            ease: [0.22, 0.40, 0.60, 1]
                                        }
                                    }
                                }}
                                initial="hidden"
                                animate="visible"
                                className="bg-white p-4 rounded-lg flex flex-col absolute z-10 -top-5"
                            >
                                <Image src={coverPhoto1} alt="Photo Cover" width={180} height={180} className="w-[200px] h-[200px] object-cover" />
                                <div className="flex justify-between mt-2 items-center">
                                    <div className="flex gap-x-1">
                                        <div className="bg-[#E3EEFA] h-3 w-3 rounded-full" />
                                        <div className="bg-[#9BD1F4] h-3 w-3 rounded-full" />
                                        <div className="bg-[#F1EBE5] h-3 w-3 rounded-full" />
                                        <div className="bg-[#D8C0AF] h-3 w-3 rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-[#212121] font-semibold text-xs">{content?.tanggal_1 ? dayjs(content?.tanggal_1).format("DD.MM.YYYY") : ""}</p>
                                        <Image src={WeddingText} alt="Wedding Text" width={40} height={20} />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { x: -120, opacity: 0 },
                                    visible: {
                                        x: 0, opacity: 1,
                                        transition: {
                                            delay: 0.5, duration: 2,
                                            ease: [0.22, 0.40, 0.60, 1]
                                        }
                                    }
                                }}
                                initial="hidden"
                                animate="visible"
                                className="bg-white p-4 rounded-lg flex flex-col relative z-20"
                            >
                                <Image src={coverPhoto2} alt="Photo Cover" width={180} height={180} className="w-[250px] h-[200px] object-cover" />
                                <div className="flex justify-between mt-2 items-center">
                                    <div className="flex gap-x-1">
                                        <div className="bg-[#E3EEFA] h-3 w-3 rounded-full" />
                                        <div className="bg-[#9BD1F4] h-3 w-3 rounded-full" />
                                        <div className="bg-[#F1EBE5] h-3 w-3 rounded-full" />
                                        <div className="bg-[#D8C0AF] h-3 w-3 rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-[#212121] font-semibold text-xs">{content?.tanggal_1 ? dayjs(content?.tanggal_1).format("DD.MM.YYYY") : ""}</p>
                                        <Image src={WeddingText} alt="Wedding Text" width={40} height={20} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1.5}}
                            className="flex flex-col z-20 mt-4"
                        >
                            <p className="text-[#909090] text-center font-sarabun text-sm">Wedding off</p>
                            <p className="text-[#212121] text-[56px] font-allison text-center leading-tight">{content?.pengantin_pria} & {content?.pengantin_wanita}</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1 } } }}
                            className="flex flex-col items-center w-full max-w-[280px] z-20"
                        >
                            <motion.div variants={itemVariants} className="text-center mb-6">
                                <p className="text-[#757575] font-sarabun text-sm">
                                    Dear, <span className="font-bold text-[#212121]">{filterUndangan?.[0]?.nama}</span>
                                </p>
                            </motion.div>

                            <motion.div variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1, y: 0,
                                    transition: {
                                        duration: 1.5,
                                        ease: [0.22, 0.45, 0.60, 1]
                                    }
                                }
                            }} className="w-full">
                                <Button onClick={handleOpenInvite} className="mx-auto">
                                    Open Invitation
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div className="w-full relative min-h-screen">
                <Image src={backgroundTop} alt="Arunara BlueSky" width={200} height={100} className="absolute left-0 right-0 w-full z-0 " />
                <div className="flex flex-col z-10 relative px-8 lg:px-10 pt-[28px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <p className="text-[#629BC0] font-allison text-[32px] -mb-[20px]">Save The Date</p>
                        <p className="font-sarabun text-[32px] font-semibold leading-tight">Counting Down to Our Forever</p>
                        <p className="font-sarabun font-light mt-4 text-[16px] text-[#757575]">May every second leading to this day be filled with love, grace, and endless blessings</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        className="relative z-10 flex items-center h-[165px] justify-center flex-col mt-8"
                    >
                        <Image src={brideGroom} alt="Photo Cover" width={180} height={180} className="absolute left-0 right-0 w-full z-0" />
                        <p className="text-white font-sarabun z-10">Wedding off</p>
                        <p className="text-white font-allison text-[64px] z-10">{content?.pengantin_pria} & {content?.pengantin_wanita}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="mt-9"
                    >
                        <CountdownTimer targetDate={new Date(content?.tanggal_1)} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex gap-2 mt-10"
                    >
                        <div className="w-6 h-3 bg-[#629BC0] rounded-sm" />
                        <div className="w-6 h-3 bg-[#629BC0]/50 rounded-sm" />
                        <div className="w-6 h-3 bg-[#629BC0]/20 rounded-sm" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                        className="mt-6"
                    >
                        <p className="font-sarabun text-[#757575] text-[16px] font-light leading-relaxed">
                            By the grace of God, we joyfully invite you to share in
                            the celebration of our marriage. Your presence will
                            be a cherished part of our story.
                        </p>
                    </motion.div>

                    <div className="flex justify-center mt-12 mb-10 pb-10">
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="cursor-pointer" onMouseDown={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })} onTouchStart={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}>
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
            </motion.div>
        </div>
    )
}
