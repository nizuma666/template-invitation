"use client"
import Image from "next/image";
import Button from "./components/button";
import { MapPin } from "lucide-react";
import { motion, Variants } from "motion/react"
import background from "!/b&w/bgSection1.png"
import img from "!/b&w/imageSec3.png"
import cheers from "!/b&w/cheersicon.svg"
import ring from "!/b&w/ringicon.svg"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section3() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }

    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
    }
    return (
        <div className="w-full text-white relative min-h-screen overflow-hidden">
            {/* Background */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Image src={background} fill alt="B&W" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-20 flex flex-col gap-y-10 px-10 pt-2.5 pb-[70px] text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.3 } },
                }}
            >
                {/* Title */}
                <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                    <p className="font-alice text-[35px]">The Wedding Day</p>
                    <p className="text-subheading2 font-akatab">
                        Join us in celebrating every precious moment of our special day.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div className="border-16 border-[#FFFFFF33]" variants={fadeInUp}>
                    <Image src={img} alt="The Wedding Day" width={300} height={200} />
                </motion.div>

                {/* Akad Nikah */}
                <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                    <div className="flex gap-4 justify-center items-center">
                        <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 200 }}>
                            <Image src={ring} height={40} width={40} alt="Akad Nikah" />
                        </motion.div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-center items-center gap-3">
                                <p className="font-akatab text-nowrap">Akad Nikah</p>
                                <div className="bg-white w-full h-0.5" />
                            </div>
                            <p className="font-alice text-heading2 text-nowrap">Minggu 16 Januari 2027</p>
                            <p className="font-akatab font-semibold">Pukul 12:00 - 20:00</p>
                            <p className="font-akatab">Jl. Nama alamat lengkap disini, Jakarta Pusat</p>
                        </div>
                    </div>
                    <motion.button
                        type="button"
                        className="rounded-lg border border-white bg-[#FFFFFF1A] flex items-center justify-center gap-2 w-full py-2 hover:bg-white/20 transition-colors"
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <MapPin />
                        Open Google Maps
                    </motion.button>
                </motion.div>

                {/* Resepsi */}
                <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                    <div className="flex gap-4 justify-center items-center">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-center items-center gap-3">
                                <p className="font-akatab text-nowrap">Resepsi</p>
                                <div className="bg-white w-full h-0.5" />
                            </div>
                            <div className="text-right">
                                <p className="font-alice text-heading2 text-nowrap">Minggu 16 Januari 2027</p>
                                <p className="font-akatab font-semibold">Pukul 12:00 - 20:00</p>
                                <p className="font-akatab">Jl. Nama alamat lengkap disini, Jakarta Pusat</p>
                            </div>
                        </div>
                        <motion.div whileHover={{ rotate: -10 }} transition={{ type: "spring", stiffness: 200 }}>
                            <Image src={cheers} height={40} width={40} alt="Resepsi" />
                        </motion.div>
                    </div>
                    <motion.button
                        type="button"
                        className="rounded-lg border border-white bg-[#FFFFFF1A] flex items-center justify-center gap-2 w-full py-2 hover:bg-white/20 transition-colors"
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <MapPin />
                        Open Google Maps
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}