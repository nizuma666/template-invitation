"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "motion/react"
import CountdownTimer from "./components/countdown_timer";
import background from "!/b&w/bgSection1.png"
import Logo from "!/b&w/Arunara.svg"
import ArrowRight from "!/b&w/arrowright.svg"
import ArrowLeft from "!/b&w/arrowleft.svg"
import ArrowDown from "!/b&w/ArrowDown.svg"
import { smoothScrollTo } from "@/utils/smoothScroll";
import pengantinWanita from "!/b&w/pengantinWanita.png"
import pengantinPria from "!/b&w/pengantinPria.png"
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section1({ onOpen }: { onOpen: () => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const controls = useAnimationControls();
    const controlCard = useAnimationControls();

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
        <div className="w-full max-w-md relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full min-h-screen z-0 max-w-md">
                <Image
                    src={background}
                    fill
                    alt="B&W"
                    className="object-cover object-center z-0"
                />

                {/* Background Gradient Transition */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isOpen ? "gradient2" : "gradient1"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={`w-full h-full absolute inset-0 z-10 ${!isOpen
                            ? "bg-gradient-to-b from-black/0 via-black/80 to-black/100"
                            : "bg-gradient-to-b from-black/60 via-black/80 to-black/80"
                            }`}
                    />
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-20 w-full h-screen overflow-y-auto px-8 sm:px-16 text-white flex flex-col">
                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-10 mb-[60px] flex justify-center items-center gap-x-5"
                >
                    <Image src={ArrowRight} alt="Arunara" width={20} height={20} />
                    <Image src={Logo} alt="Arunara" width={146} height={27} />
                    <Image src={ArrowLeft} alt="Arunara" width={20} height={20} />
                </motion.div>

                {/* Wedding Info */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.9 }}
                    className="flex flex-col gap-y-2"
                >
                    <motion.p
                        animate={{ x: isOpen ? 105 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-subheading2 font-akatab w-fit">the wedding of</motion.p>
                    <motion.p
                        animate={{ x: isOpen ? 70 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl font-alice text-wrap w-fit">Jane &</motion.p>
                    <motion.p
                        animate={{ x: isOpen ? 70 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl font-alice text-wrap w-fit">Nguyen</motion.p>
                    <motion.p
                        animate={{ x: isOpen ? 110 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-alice text-heading2 w-fit">02.02.2025</motion.p>
                </motion.div>

                {/* Transition Between States */}
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="invitation"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-y-4 font-akatab mt-16"
                        >
                            <p>
                                Dear,<br />
                                <span className="font-bold text-subheading2 text-nowrap">
                                    Ferdian Septiawan
                                </span>
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#ffffff33" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenInvite}
                                type="button"
                                className="bg-[#FFFFFF1A] w-fit py-3 px-6 rounded-lg border border-white"
                            >
                                Open Invitation
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="countdown"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-y-6 justify-center items-center mt-10"
                        >
                            <p className="font-alice text-heading2">Getting Closer</p>
                            <div className="w-32 h-[1px] bg-white" />
                            <CountdownTimer targetDate="2025-12-31T00:00:00" />
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                onClick={() => {
                                    const nextSection = document.getElementById("section2");
                                    if (nextSection) {
                                        const targetY = nextSection.offsetTop;
                                        smoothScrollTo(targetY, 1000);
                                    }
                                }}
                            >
                                <Image src={ArrowDown} alt="arunara" width={32} height={32} />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {/** section 2 */}
            <div id="section2" className="w-full text-white relative min-h-screen overflow-hidden">
                <Section2 />
            </div>
            <div id="section3" className="w-full text-white relative min-h-screen overflow-hidden">
                <Section3 />
            </div>
            <div id="section4" className="w-full text-white relative min-h-screen overflow-hidden">
                <Section4 />
            </div>
            <div id="section5" className="w-full text-white relative overflow-hidden">
                <Section5 />
            </div>
            <div id="section6" className="w-full text-white relative min-h-screen overflow-hidden">
                <Section6 />
            </div>
            <Section7 />
        </div>
    )
}