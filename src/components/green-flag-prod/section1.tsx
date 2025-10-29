"use client"
import Image from "next/image";
import Logo from "!/peach-love/Arunara.svg"
import Button from "./components/button";
import ArrowRight from "!/green-flag/arrowright.svg"
import ArrowLeft from "!/green-flag/arrowleft.svg"
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "motion/react"
import CountdownTimer from "./components/countdown_timer";
import iconTop from "!/green-flag/floraTop.png"
import iconBottomLeft from "!/green-flag/floraBottomLeft.png"
import iconBottomRight from "!/green-flag/floraBottomRight.png"
import iconBottomLeftAfter from "!/green-flag/floraBottomRightAfter.png"
import { useParams } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section1({ data, onOpen }: { data: any, onOpen: () => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const controls = useAnimationControls();
    const controlCard = useAnimationControls();
    const params = useParams();
    const filterUndangan = data.listUndangan.filter((item: any) => item.nama === decodeURIComponent(params.subslug as string))
    const targetDate = `${data.acara[0].tanggal_1}T${data.acara[0].waktu_1}:00`;
    
    useEffect(() => {
        const runAnimation = async () => {
            if (isOpen) {
                await controls.start({
                    scaleX: 1,
                    transition: { duration: 0.2, ease: "easeOut", delay: 1 },
                });

                await new Promise((resolve) => setTimeout(resolve, 300));

                await controlCard.start({
                    scale: 0,
                    transition: { duration: 0.2, ease: "easeInOut" }
                })

                await controls.start({
                    scaleY: 0,
                    transition: { duration: 0.2, ease: "easeInOut" },
                });
            } else {
                await controlCard.start({
                    scaleX: 1,
                    transition: { duration: 1, ease: "easeInOut" }
                })
            }
        };

        runAnimation();
    }, [isOpen, controls, controlCard]);

    const handleOpenInvite = () => {
        setIsOpen(true)
        onOpen()
    }

    return (
        <div className="w-full relative min-h-[100dvh] bg-green-primary flex flex-col gap-y-4 items-center px-10 pt-18">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 right-0 z-10"
            >
                <Image src={iconTop} alt="Arunara Green Flag" width={140} height={100} />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3, delayChildren: 1.6 },
                    },
                }}
                className="absolute left-0 bottom-0 z-10"
            >
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="icon-before"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            exit={{ opacity: 0, y: 50 }}
                        >
                            <Image src={iconBottomLeft} alt="Arunara Green Flag" width={200} height={100} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="icon-after"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image src={iconBottomLeftAfter} alt="Arunara Green Flag" width={200} height={100} />
                        </motion.div>
                    )}

                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        key="iconBefore"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        exit={{ opacity: 0, y: 50 }}
                        className="absolute bottom-0 right-0 z-10"
                    >
                        <Image src={iconBottomRight} alt="Arunara Green Flag" width={200} height={100} />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                className="absolute top-5 left-1/2 -translate-x-1/2 z-30"
            >
                <Image src={Logo} alt="Arunara" width={145} height={32} />
            </motion.div>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="rounded-full bg-[#5A7759] p-5">
                <motion.div
                    className="border border-white bg-[#FFFFFF0D] rounded-full flex flex-col items-center gap-2 py-[40px] px-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <p className="font-medium text-white text-center">UNDANGAN PERNIKAHAN</p>
                    <p className="text-white text-[50px] font-allura text-center leading-18">{data.cover[0].pengantin_pria} <br />&<br /> {data.cover[0].pengantin_wanita}</p>
                    <motion.div
                        className="flex gap-6 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <motion.div
                            className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"
                            initial={{ x: 100, opacity: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.p
                            className="text-white text-nowrap"
                            initial={{ scaleX: 0.2, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            {data.acara[0].tanggal_1}
                        </motion.p>
                        <motion.div
                            className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.5 }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="flex flex-col gap-y-2 items-center">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.p
                            exit={{ opacity: 0, scale: 0.8, y: 50, transition: { delay: 1 } }}
                            className="text-white font-medium text-subheading2 text-center">Dear,<br /><span className="text-white font-bold text-subheading2">{filterUndangan[0].nama}</span>
                        </motion.p>
                    ) : ""}
                </AnimatePresence>

                <motion.div
                    className="flex gap-6 justify-center items-center z-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3, delayChildren: 1.6 },
                        },
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="button-group"
                                className="flex gap-6 justify-center items-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, y: -50, transition: { delay: 1 } }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 150, transition: { delay: 0.5, ease: "easeInOut", duration: 0.5 } }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                >
                                    <Image src={ArrowRight} alt="Arunara" width={23} height={23} />
                                </motion.div>

                                <motion.div
                                    initial={{ scaleY: 0.2, opacity: 0 }}
                                    animate={{ scaleY: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                                >
                                    <Button onClick={handleOpenInvite}>Open Invitation</Button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -150, transition: { delay: 0.5, ease: "easeInOut", duration: 0.5 } }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                >
                                    <Image src={ArrowLeft} alt="Arunara" width={23} height={23} />
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="countdown"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <CountdownTimer targetDate={targetDate} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </div>
    )
}