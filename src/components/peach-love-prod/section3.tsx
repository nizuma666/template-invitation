"use client"
import Image from "next/image";
import Button from "./components/button";
import { MapPin } from "lucide-react";
import { motion, Variants } from "motion/react"

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
            transition: { duration: 0.9, ease: "easeInOut" },
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
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };
    const handleMap = (url: string) => {
        window.open(url, "_blank")
    }
    return (
        <motion.div
            className="px-6 py-16 flex flex-col gap-12 items-center bg-gradient-to-b from-white to-rose4/10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="flex flex-col items-center gap-4 text-center"
                variants={fadeUpElegant}
            >
                <p className="text-rose1 text-heading1 font-bold text-center">Hari Bahagia Kami</p>
                <p className="text-neutral-text4 max-w-md leading-relaxed">
                    Dengan memohon rahmat dan ridho Allah SWT, kami akan mengadakan pernikahan pada:
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col gap-10 items-center"
                variants={container}
            >
                <motion.div
                        className="rounded-2xl border border-rose4 max-w-[320px] w-full flex flex-col items-center gap-5 px-5 py-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(244,114,182,0.25)] transition-all duration-700 backdrop-blur-lg"
                        variants={cardVariant}
                        whileHover={{
                            scale: 1.04,
                            y: -5,
                            boxShadow: "0 8px 25px rgba(244,114,182,0.35)",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="flex flex-col gap-3 items-center"
                            variants={fadeUpElegant}
                        >
                            <Image
                                src="/peach-love/ringicon.svg"
                                width={56}
                                height={56}
                                alt="Akad"
                                className="object-contain drop-shadow-md"
                            />
                            <p className="text-rose1 text-subheading1 font-semibold">
                                {data.nama_acara_1}
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col gap-2 text-center items-center font-medium"
                            variants={fadeUpElegant}
                        >
                            <p>{data.tanggal_1}</p>
                            <p>{data.waktu_1}</p>
                            <p>{data.alamat_1}</p>
                        </motion.div>

                        <motion.div variants={fadeUpElegant}>
                            <Button
                                onClick={() => handleMap(data.google_map_1 || "")}
                                className="flex items-center gap-2 bg-rose1 text-white hover:bg-rose2 transition-all shadow-md hover:shadow-rose2/30"
                            >
                                <MapPin width={16} height={16} /> Open Google Maps
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="rounded-2xl border border-rose4 max-w-[320px] w-full flex flex-col items-center gap-5 px-5 py-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(244,114,182,0.25)] transition-all duration-700 backdrop-blur-lg"
                        variants={cardVariant}
                        whileHover={{
                            scale: 1.04,
                            y: -5,
                            boxShadow: "0 8px 25px rgba(244,114,182,0.35)",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="flex flex-col gap-3 items-center"
                            variants={fadeUpElegant}
                        >
                            <Image
                                src="/peach-love/cheersicon.svg"
                                width={56}
                                height={56}
                                alt="Akad"
                                className="object-contain drop-shadow-md"
                            />
                            <p className="text-rose1 text-subheading1 font-semibold">
                                {data.nama_acara_2}
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col gap-2 text-center items-center font-medium"
                            variants={fadeUpElegant}
                        >
                            <p>{data.tanggal_2}</p>
                            <p>{data.waktu_2}</p>
                            <p>{data.alamat_2}</p>
                        </motion.div>

                        <motion.div variants={fadeUpElegant}>
                            <Button
                                onClick={() => handleMap(data.google_map_2 || "")}
                                className="flex items-center gap-2 bg-rose1 text-white hover:bg-rose2 transition-all shadow-md hover:shadow-rose2/30"
                            >
                                <MapPin width={16} height={16} /> Open Google Maps
                            </Button>
                        </motion.div>
                    </motion.div>
            </motion.div>
        </motion.div>
    )
}