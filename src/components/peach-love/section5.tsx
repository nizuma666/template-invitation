"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import grid1 from "!/grid1.png"
import grid2 from "!/grid2.png"
import grid3 from "!/grid3.png"
import grid4 from "!/grid4.png"
import grid5 from "!/grid5.png"
import grid6 from "!/grid6.png"
import { useInView, motion, Variants } from "motion/react"
import Image from "next/image"
import { useRef } from "react"
export default function Section5({ content }: { content: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 }); // animasi aktif setiap kali masuk viewport

    // Animasi untuk teks atas
    const textVariant: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    // Container untuk grid animasi
    const gridContainerVariant: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    // Animasi tiap gambar
    const gridItemVariant: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
        <div ref={ref} className="py-10 px-6 flex flex-col gap-10 bg-rose5">
            {/* Judul & Deskripsi */}
            <motion.div
                variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center gap-4"
            >
                <p className="text-rose1 text-heading1 font-bold text-center">{content.title}</p>
                <p className="text-neutral-text4 text-center">{content.desc}</p>
            </motion.div>

            {/* Bagian Grid Gambar */}
            <motion.div
                variants={gridContainerVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-2"
            >
                {/* Grid Pertama */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full">
                    <motion.div variants={gridItemVariant} className="row-span-2 h-full">
                        <Image src={grid1} alt="Gallery 1" className="object-cover w-full rounded-lg" />
                    </motion.div>
                    <motion.div variants={gridItemVariant} className="h-full w-full">
                        <Image src={grid2} alt="Gallery 2" className="object-cover w-full h-full rounded-lg" />
                    </motion.div>
                    <motion.div variants={gridItemVariant} className="h-full w-full">
                        <Image src={grid3} alt="Gallery 3" className="object-cover w-full h-full rounded-lg" />
                    </motion.div>
                </div>

                {/* Grid Kedua */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full">
                    <motion.div variants={gridItemVariant} className="h-full w-full">
                        <Image src={grid4} alt="Gallery 4" className="object-cover w-full h-full rounded-lg" />
                    </motion.div>
                    <motion.div variants={gridItemVariant} className="row-span-2 h-full">
                        <Image src={grid6} alt="Gallery 6" className="object-cover w-full rounded-lg" />
                    </motion.div>
                    <motion.div variants={gridItemVariant} className="h-full w-full">
                        <Image src={grid5} alt="Gallery 5" className="object-cover w-full h-full rounded-lg" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}