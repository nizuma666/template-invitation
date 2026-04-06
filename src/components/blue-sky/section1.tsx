"use client"
import Image from "next/image";
import Logo from "!/blue-sky/Arunara.png"
import Button from "./components/button";
import ArrowRight from "!/green-flag/arrowright.svg"
import ArrowLeft from "!/green-flag/arrowleft.svg"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/service/firebase"
import { AnimatePresence, motion, useAnimationControls } from "motion/react"
// import CountdownTimer from "./components/countdown_timer";
// import iconTop from "!/green-flag/floraTop.png"
// import iconBottomLeft from "!/green-flag/floraBottomLeft.png"
// import iconBottomRight from "!/green-flag/floraBottomRight.png"
// import iconBottomLeftAfter from "!/green-flag/floraBottomRightAfter.png"
import backgroundTop from "!/blue-sky/bgTop.svg"
import PhotoCover1 from "!/blue-sky/photoCover1.svg"
import WeddingText from "!/blue-sky/weddingText.svg"        

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
        <div className="w-full relative min-h-[100dvh] bg-blue-background flex flex-col gap-y-4 items-center px-10 pt-18">

            <Image src={backgroundTop} alt="Arunara BlueSky" width={200} height={100} className="absolute inset-0 w-full z-0" />

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

            <div className="relative mx-auto mt-20">

                 <div className="bg-white p-4 rounded-lg flex flex-col absolute z-10 -top-10 -rotate-12">
                    <Image src={PhotoCover1} alt="Photo Cover" width={223} height={223} className="w-[223px] h-[223px] md:w-[223px] md:h-[223px]" />
                   <div className="flex justify-between mt-2 items-center">
                     <div className="flex gap-x-1">
                        <div className="bg-[#E3EEFA] h-[15px] w-[15px] rounded-full"></div>
                        <div className="bg-[#9BD1F4] h-[15px] w-[15px] rounded-full"></div>
                        <div className="bg-[#F1EBE5] h-[15px] w-[15px] rounded-full"></div>
                        <div className="bg-[#D8C0AF] h-[15px] w-[15px] rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[#212121] font-semibold">20.01.2026</p>
                        <Image src={WeddingText} alt="Wedding Text" width={56} height={30} className="mt-1" />
                    </div>
                   </div>
                </div>

                <div className="bg-white p-4 rounded-lg flex  flex-col relative z-20">
                    <Image src={PhotoCover1} alt="Photo Cover" width={223} height={223} className="w-[223px] h-[223px] md:w-[223px] md:h-[223px]" />
                   <div className="flex justify-between mt-2 items-center">
                     <div className="flex gap-x-1">
                        <div className="bg-[#E3EEFA] h-[15px] w-[15px] rounded-full"></div>
                        <div className="bg-[#9BD1F4] h-[15px] w-[15px] rounded-full"></div>
                        <div className="bg-[#F1EBE5] h-[15px] w-[15px] rounded-full"></div>
                        <div className="bg-[#D8C0AF] h-[15px] w-[15px] rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[#212121] font-semibold">20.01.2026</p>
                        <Image src={WeddingText} alt="Wedding Text" width={56} height={30} className="mt-1" />
                    </div>
                   </div>
                </div>
                
            </div>

            <div className="flex flex-col">
                <p className="text-[#212121] font-semibold">Wedding off</p>
                <p className="text-[#212121] font-semibold">Jane & Jhon</p>
            </div>

        </div>

    )
}