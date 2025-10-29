"use client"
import Image from "next/image";
import Button from "./components/button";
import { MapPin } from "lucide-react";
import { motion, Variants } from "motion/react"
import IconInTop from "!/green-flag/floraInTop.png"
import IconOutTop from "!/green-flag/floraOutTop.png"
import IconInBottom from "!/green-flag/floraInBottom.png"
import IconOutBottom from "!/green-flag/floraOutBottom.png"
import IconRing from "!/green-flag/ringicon.svg"
import IconCheers from "!/green-flag/cheersicon.svg"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section3({ data }: { data: any }) {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 },
        },
    };

    const fadeUpElegant: Variants = {
        hidden: { opacity: 0, y: 40, filter: "blur(8px)", rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            rotateX: 0,
            transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
        },
        exit: { opacity: 0, y: -30, filter: "blur(4px)" },
    };

    const cardVariant: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 40, rotateY: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateY: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
    };
    const handleMap = (url: string) => {
        window.open(url, "_blank")
    }
    return (
        <motion.div
            className="px-6 py-16 flex flex-col gap-12 items-center bg-green-primary relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50, filter: "blur(8px)", rotateX: -15 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        rotateX: 0,
                        transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
                    },
                    exit: { opacity: 0, y: -30, filter: "blur(4px)" },
                }}
                className="absolute top-45 right-0 ">
                <Image src={IconOutTop} width={230} height={100} alt="Akad" />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -50, filter: "blur(8px)", rotateX: -15 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        rotateX: 0,
                        transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
                    },
                    exit: { opacity: 0, y: -30, filter: "blur(4px)" },
                }}
                className="absolute bottom-0 left-0 ">
                <Image src={IconOutBottom} width={230} height={100} alt="Akad" />
            </motion.div>
            <motion.div
                className="flex flex-col items-center gap-4 text-center"
                variants={fadeUpElegant}
            >
                <p className="text-white text-heading1 font-bold text-center">Hari Bahagia Kami</p>
                <p className="text-white max-w-md leading-relaxed">
                    Dengan memohon rahmat dan ridho Allah SWT, kami akan mengadakan pernikahan kami pada:
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col gap-10 items-center"
                variants={container}
            >
                <motion.div
                    className="rounded-2xl relative overflow-hidden border-2 border-peach3 max-w-[320px] w-full flex flex-col items-center gap-5 px-5 py-8 bg-[#FFF7EE] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(244,114,182,0.25)] transition-all duration-700 backdrop-blur-lg"
                    variants={cardVariant}
                    whileHover={{
                        scale: 1.04,
                        y: -5,
                        boxShadow: "0 8px 25px rgba(244,114,182,0.35)",
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 40, filter: "blur(8px)", rotateX: -15 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                                rotateX: 0,
                                transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
                            },
                            exit: { opacity: 0, y: -30, filter: "blur(4px)" },
                        }}
                        className="absolute top-0 right-0 ">
                        <Image src={IconInTop} width={170} height={100} alt="Akad" />
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-3 items-center"
                        variants={fadeUpElegant}
                    >
                        <Image
                            src={IconRing}
                            width={56}
                            height={56}
                            alt="Akad"
                            className="object-contain drop-shadow-md"
                        />
                        <p className="text-green-primary text-subheading1 font-semibold">
                            {data.nama_acara_1}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-2 text-center items-center font-medium text-[#212121]"
                        variants={fadeUpElegant}
                    >
                        <p>{data.tanggal_1}</p>
                        <p>{data.waktu_1}</p>
                        <p>{data.alamat_1}</p>
                    </motion.div>

                    <motion.div variants={fadeUpElegant}>
                        <Button
                            onClick={() => handleMap(data.google_map_1 || "")}
                            className="flex items-center gap-2 bg-green-primary text-white hover:bg-rose2 transition-all hover:shadow-rose2/30"
                        >
                            <MapPin width={16} height={16} /> Open Google Maps
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="rounded-2xl border-2 border-peach3 max-w-[320px] w-full flex flex-col items-center gap-5 px-5 py-8 bg-[#FFF7EE] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(244,114,182,0.25)] transition-all duration-700 backdrop-blur-lg"
                    variants={cardVariant}
                    whileHover={{
                        scale: 1.04,
                        y: -5,
                        boxShadow: "0 8px 25px rgba(244,114,182,0.35)",
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -40, filter: "blur(8px)", rotateX: -15 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                                rotateX: 0,
                                transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
                            },
                            exit: { opacity: 0, y: -30, filter: "blur(4px)" },
                        }}
                        className="absolute bottom-0 left-0 ">
                        <Image src={IconInBottom} width={170} height={100} alt="Akad" />
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-3 items-center"
                        variants={fadeUpElegant}
                    >
                        <Image
                            src={IconCheers}
                            width={56}
                            height={56}
                            alt="Resepsi"
                            className="object-contain drop-shadow-md"
                        />
                        <p className="text-green-primary text-subheading1 font-semibold">
                            {data.nama_acara_2}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-2 text-center items-center font-medium text-[#212121]"
                        variants={fadeUpElegant}
                    >
                        <p>{data.tanggal_2}</p>
                        <p>{data.waktu_2}</p>
                        <p>{data.alamat_2}</p>
                    </motion.div>

                    <motion.div variants={fadeUpElegant}>
                        <Button
                            onClick={() => handleMap(data.google_map_2 || "")}
                            className="flex items-center gap-2 bg-green-primary text-white hover:bg-rose2 transition-all hover:shadow-rose2/30"
                        >
                            <MapPin width={16} height={16} /> Open Google Maps
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}