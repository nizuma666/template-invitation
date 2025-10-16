"use client"
import Image from "next/image";
import background from "@/assets/peach-love/background.png"
import Logo from "!/Arunara.svg"
import FlowerLeft from "!/flowerleft.svg"
import FlowerRight from "!/flowerright.svg"
import Button from "./components/button";
import BottomGradient from "!/bottomgradient.png"
import ArrowRight from "!/arrowright.svg"
import ArrowLeft from "!/arrowleft.svg"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/service/firebase"
import { AnimatePresence, motion, useAnimationControls } from "motion/react"
import CountdownTimer from "./components/countdown_timer";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section1({ content, onOpen }: { content: any, onOpen: () => void }) {
    const [data, setData] = useState([{}])
    const [isOpen, setIsOpen] = useState(false)
    const controls = useAnimationControls();
    const controlCard = useAnimationControls();

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "acara"));
            const items = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(items);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const runAnimation = async () => {
            if (isOpen) {
                await controls.start({
                    scaleX: 1,
                    transition: { duration: 0.6, ease: "easeOut", delay: 1 },
                });

                await new Promise((resolve) => setTimeout(resolve, 500));

                await controlCard.start({
                    scale: 0,
                    transition: {duration: 0.3, ease: "easeInOut"}
                })

                await controls.start({
                    scaleY: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                });
            } else {
                await controlCard.start({
                    scaleX: 1,
                    transition: {duration: 1, ease: "easeInOut"}
                })
            }
        };

        runAnimation();
    }, [isOpen, controls, controlCard]);

    const handleOpenInvite = () => {
        setIsOpen(true)
        onOpen()
        // setTimeout(() => {
        //     setIsOpen(false);
        // }, 1500);
    }

    return (
        <div className="w-full relative min-h-screen">
            <motion.div
                key="show"
                initial={{ scaleX: 0 }}
                animate={controls}
                className="absolute w-full bg-white h-dvh z-30"
            />
            <Image src={background} alt="background" width={370} height={750} className="object-cover w-full h-full z-0" />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 z-20 text-white flex flex-col gap-[60px] items-center py-[50px]">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Image src={Logo} alt="Arunara" width={175} height={32} />
                </motion.div>

                <div className="flex flex-col gap-5 items-center">
                    {/* 1️⃣ Title muncul dari atas */}
                    <motion.p
                        className="text-white text-subheading1 font-medium"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {content.title}
                    </motion.p>

                    {/* 2️⃣ Nama + bunga kiri kanan */}
                    <motion.div
                        className="flex gap-1 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.3, delayChildren: 0.3 },
                            },
                        }}
                    >
                        {/* Flower Left */}
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image src={FlowerLeft} alt="Arunara" width={40} height={60} />
                        </motion.div>

                        {/* Text name */}
                        <motion.p
                            className="text-white font-allura text-[50px]"
                            initial={{ scaleX: 0, opacity: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                        >
                            {content.name}
                        </motion.p>

                        {/* Flower Right */}
                        <motion.div
                            initial={{ opacity: 0, x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image src={FlowerRight} alt="Arunara" width={40} height={60} />
                        </motion.div>
                    </motion.div>

                    {/* 3️⃣ Date + titik kiri kanan */}
                    <motion.div
                        className="flex gap-6 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <motion.div
                            className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"
                            initial={{ x: 100, opacity: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.p
                            className="text-white text-subheading1"
                            initial={{ scaleX: 0.2, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            {content.date}
                        </motion.p>
                        <motion.div
                            className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 1.5 }}
                        />
                    </motion.div>

                    {/* 4️⃣ Kotak undangan scale 0 -> 1 */}
                    <motion.div
                        className="border border-color-peach4 py-4 px-6 flex flex-col gap-2 items-center rounded-lg"
                        initial={{ scaleX: 0 }}
                        animate={controlCard}
                        // transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <p className="text-white">{content.inviteTo}</p>
                        <div className="border border-peach4 w-full h-[1px]"></div>
                        <p className="text-white text-subheading2">{content.inviteName}</p>
                    </motion.div>

                    {/* 5️⃣ Tombol “Open Invitation” muncul dengan scale */}
                    <div className="w-full absolute -bottom-10 z-20">
                        <motion.div
                            className="flex gap-6 justify-center items-center translate-y-15"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.4 }}
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
                                    // 🟢 Grup Arrow + Button
                                    <motion.div
                                        key="button-group"
                                        className="flex gap-6 justify-center items-center"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -50, transition: { delay: 1 } }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    >
                                        {/* Arrow kanan */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 150 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 150, transition: { delay: 0.5, ease: "easeInOut", duration: 0.5 } }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        >
                                            <Image src={ArrowRight} alt="Arunara" width={23} height={23} />
                                        </motion.div>

                                        {/* Tombol */}
                                        <motion.div
                                            initial={{ scaleY: 0.2, opacity: 0 }}
                                            animate={{ scaleY: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                                        >
                                            <Button onClick={handleOpenInvite}>Open Invitation</Button>
                                        </motion.div>

                                        {/* Arrow kiri */}
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
                                    // 🔵 Countdown muncul menggantikan button + panah
                                    <motion.div
                                        key="countdown"
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.4 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <CountdownTimer targetDate="2025-12-31T00:00:00" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Gambar bawah tetap statis */}
                        <Image
                            src={BottomGradient}
                            alt="Arunara"
                            width={175}
                            height={32}
                            className="w-full"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}