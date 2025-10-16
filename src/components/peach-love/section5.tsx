"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import grid1 from "!/peach-love/grid1.png"
import grid2 from "!/peach-love/grid2.png"
import grid3 from "!/peach-love/grid3.png"
import grid4 from "!/peach-love/grid4.png"
import grid5 from "!/peach-love/grid5.png"
import grid6 from "!/peach-love/grid6.png"
import { X } from "lucide-react"
import { useInView, motion, Variants, AnimatePresence } from "motion/react"
import Image, { StaticImageData } from "next/image"
import { useRef, useState } from "react"
export default function Section5({ content }: { content: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // animasi aktif setiap kali masuk viewport
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const textVariant: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const gridContainerVariant: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const gridItemVariant: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
        <div ref={ref} className="py-10 px-6 flex flex-col gap-10 bg-rose5">
            <motion.div
                variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center gap-4"
            >
                <p className="text-rose1 text-heading1 font-bold text-center">{content.title}</p>
                <p className="text-neutral-text4 text-center">{content.desc}</p>
            </motion.div>

            <motion.div
                variants={gridContainerVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-2"
            >
                <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full">
                    {[grid1, grid2, grid3].map((src, i) => (
                        <motion.div
                            key={i}
                            variants={gridItemVariant}
                            whileHover={{ scale: 1.05 }}
                            className={`${i === 0 ? "row-span-2" : ""} h-full w-full cursor-pointer`}
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image src={src} alt={`Gallery ${i + 1}`} className="object-cover w-full h-full rounded-lg" />
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full">
                    {[grid4, grid6, grid5].map((src, i) => (
                        <motion.div
                            key={i}
                            variants={gridItemVariant}
                            whileHover={{ scale: 1.05 }}
                            className={`${i === 1 ? "row-span-2" : ""} h-full w-full cursor-pointer`}
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image src={src} alt={`Gallery ${i + 4}`} className="object-cover w-full h-full rounded-lg" />
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
                            onClick={() => setSelectedImage(null)} // klik luar → tutup modal
                        >
                            {/* Gambar muncul dari tengah */}
                            <motion.div
                                key="image"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                onClick={(e) => e.stopPropagation()} // supaya klik gambar tidak menutup modal
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
        </div>
    )
}