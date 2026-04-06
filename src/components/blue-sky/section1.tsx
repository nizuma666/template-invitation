"use client"
import Image from "next/image";
import Logo from "!/blue-sky/Arunara.png"
import Button from "./components/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "motion/react"
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
        // const fetchData = async () => {
        //     const querySnapshot = await getDocs(collection(db, "acara"));
        //     const items = querySnapshot.docs.map((doc) => ({
        //         id: doc.id,
        //         ...doc.data(),
        //     }));
        //     setData(items);
        // };

        // fetchData();
        console.log(content)
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

            <div className="relative mx-auto mt-16 lg:mt-7">


                <motion.div
                    variants={{
                        hidden: { y: -40, opacity: 0, rotate: 0 },
                        visible: { y: 0, opacity: 1, rotate: -8, transition: { delay: 0.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    initial="hidden"
                    animate="visible"
                    className="bg-white p-4 rounded-lg flex flex-col absolute z-10 -top-5 -rotate-8">
                    <Image src={PhotoCover1} alt="Photo Cover" width={180} height={180} className="w-[230px] h-[230px] md:w-[180px] md:h-[180px]" />
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
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { y: -40, opacity: 0, rotate: 0 },
                        visible: { y: 0, opacity: 1, rotate: 0, transition: { delay: 0.8, duration: 3, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    initial="hidden"
                    animate="visible"
                    className="bg-white p-4 rounded-lg flex  flex-col relative z-20">
                    <Image src={PhotoCover1} alt="Photo Cover" width={180} height={180} className="w-[230px] h-[230px] md:w-[180px] md:h-[180px]" />
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
                </motion.div>
            </div>

            <motion.div
                initial={{ scaleY: 0.2, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                className="flex flex-col">
                <p className="text-[#909090] text-center font-sarabun">Wedding off</p>
                <p className="text-[#212121] text-[64px] font-allison">{content.name}</p>
            </motion.div>

            <motion.div
                initial={{ scaleY: 0.2, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
            >
                <Button onClick={handleOpenInvite}>Open Invitation</Button>
            </motion.div>

        </div>

    )
}