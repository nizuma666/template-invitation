"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import grid1 from "!/peach-love/grid1.png"
import grid2 from "!/peach-love/grid2.png"
import grid3 from "!/peach-love/grid3.png"
import grid4 from "!/peach-love/grid4.png"
import grid5 from "!/peach-love/grid5.png"
import grid6 from "!/peach-love/grid6.png"
import background from "!/b&w/bgSection1.png"
import { X } from "lucide-react"
import { useInView, motion, Variants, AnimatePresence } from "motion/react"
import Image, { StaticImageData } from "next/image"
import { useRef, useState } from "react"
export default function Section5() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const gridItemVariant: Variants = {
        hidden: {
            opacity: 0,
            y: 30, // muncul dari bawah
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], // cubic bezier untuk efek lembut
            },
        },
    }

    const gridContainerVariant: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // jeda antar item biar muncul bertahap
                delayChildren: 0.4, // jeda sebelum mulai animasi anak
                ease: "easeOut",
            },
        },
    }

    const headerItemVariant: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    }

    const headerContainerVariant: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
                ease: "easeOut",
            },
        },
    }

    return (
        <div className="w-full text-white relative min-h-[100dvh] overflow-hidden">
            <Image
                src={background}
                fill
                alt="B&W"
                className="object-cover object-center z-0"
            />
            <div className="w-full h-full absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
            <div className="absolute inset-0 z-20 flex flex-col gap-y-10 py-10 px-6 text-white">
                <motion.div
                    variants={headerContainerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-2"
                >
                    <motion.p
                        variants={headerItemVariant}
                        className="font-alice text-4xl"
                    >
                        Our Gallery
                    </motion.p>
                    <motion.p
                        variants={headerItemVariant}
                        className="font-akatab text-subheading2"
                    >
                        here’s a glimpse of our story
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={gridContainerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-2"
                >
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full max-h-[300px]">
                        {[grid4, grid6, grid5].map((src: any, i: number) => (
                            <motion.div
                                key={i}
                                variants={gridItemVariant}
                                whileHover={{ scale: 1.05 }}
                                className={`${i === 1 ? "row-span-2" : ""} h-full w-full cursor-pointer`}
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image src={src} alt={`Gallery ${i + 4}`} width={400} height={400} className="object-cover w-full h-full rounded-lg" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full max-h-[300px]">
                        {[grid1, grid2, grid3].map((src: any, i: number) => (
                            <motion.div
                                key={i}
                                variants={gridItemVariant}
                                whileHover={{ scale: 1.05 }}
                                className={`${i === 0 ? "row-span-2" : ""} h-full w-full cursor-pointer`}
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image src={src} alt={`Gallery ${i + 1}`} width={400} height={400} className="object-cover w-full h-full rounded-lg" />
                            </motion.div>
                        ))}
                    </div>
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                key="modal"
                                className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                            >
                                <motion.div
                                    key="image"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative"
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Full Image"
                                        width={400}
                                        height={500}
                                        className="rounded-lg"
                                    />
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="absolute top-3 right-3 bg-white/80 text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-white transition"
                                    >
                                        <X />
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                <p className="font-akatab">Love is not about how many days you’ve been together, but how much you love each other every single day.</p>
            </div>
        </div>
    )
}