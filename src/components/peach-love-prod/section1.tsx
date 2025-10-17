"use client"
import Image from "next/image";
import background from "@/assets/peach-love/background.png"
import Logo from "!/peach-love/Arunara.svg"
import FlowerLeft from "!/peach-love/flowerleft.svg"
import FlowerRight from "!/peach-love/flowerright.svg"
import Button from "./components/button";
import BottomGradient from "!/peach-love/bottomgradient.png"
import ArrowRight from "!/peach-love/arrowright.svg"
import ArrowLeft from "!/peach-love/arrowleft.svg"
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "motion/react"
import CountdownTimer from "./components/countdown_timer";
import { useParams } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section1({ data, onOpen }: { data: any, onOpen: () => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const controls = useAnimationControls();
    const controlCard = useAnimationControls();
    const params = useParams();
    const filterUndangan = data.listUndangan.filter((item: any) => item.nama === params.subslug )

    useEffect(() => {
        const runAnimation = async () => {
            if (isOpen) {
                await controls.start({
                    scaleX: 1,
                    transition: { duration: 0.2, ease: "easeOut", delay: 1 },
                });

                await new Promise((resolve) => setTimeout(resolve, 200));

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
        <div className="w-full relative min-h-screen">
            <motion.div
                key="show"
                initial={{ scaleX: 0 }}
                animate={controls}
                className="absolute w-full bg-white h-dvh z-30"
            />
            <Image src={background} alt="background" fill priority className="object-cover object-center z-0" />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 z-20 text-white flex flex-col gap-[60px] items-center py-[50px]">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Image src={Logo} alt="Arunara" width={175} height={32} />
                </motion.div>

                <div className="flex flex-col gap-5 items-center w-full">
                    <motion.p
                        className="text-white text-subheading1 font-medium"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Undangan Pernikahan
                    </motion.p>

                    <motion.div
                        className="flex gap-1 items-center justify-between"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.3, delayChildren: 0.3 },
                            },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image src={FlowerLeft} alt="Arunara" width={40} height={60} />
                        </motion.div>

                        <motion.p
                            className="text-white font-allura text-[45px] text-nowrap text-center"
                            initial={{ scaleX: 0, opacity: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                        >
                            {data.cover[0].pengantin_pria} & {data.cover[0].pengantin_wanita}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image src={FlowerRight} alt="Arunara" width={40} height={60} />
                        </motion.div>
                    </motion.div>

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
                            className="text-white text-subheading1"
                            initial={{ scaleX: 0.2, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 1 }}
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

                    <motion.div
                        className="border border-color-peach4 py-4 px-6 flex flex-col gap-2 items-center rounded-lg"
                        initial={{ scaleX: 0 }}
                        animate={controlCard}
                    >
                        <p className="text-white">Kepada Yth.</p>
                        <div className="border border-peach4 w-full h-[1px]"></div>
                        <p className="text-white text-subheading2">{filterUndangan[0].nama}</p>
                    </motion.div>

                    <div className="w-full absolute bottom-0 z-20">
                        <motion.div
                            className="flex gap-6 justify-center items-center translate-y-15"
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
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <CountdownTimer targetDate="2025-12-31T00:00:00" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

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