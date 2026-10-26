"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import SectionHeading from "./components/section_heading"
import Reveal from "./components/reveal"

const photos = [
    "/peach-love/PhotoWife.png",
    "/peach-love/PhotoHusband.png",
    "/bumi-renjana/foto-wanita.png",
    "/bumi-renjana/foto-pria.png",
]

export default function Section4() {
    const [active, setActive] = useState(photos[0])
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        if (!preview) return
        document.body.style.overflowY = "hidden"
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(false)
        window.addEventListener("keydown", onKey)
        return () => {
            document.body.style.overflowY = ""
            window.removeEventListener("keydown", onKey)
        }
    }, [preview])

    return (
        <section id="3" className="relative px-6 py-14 flex flex-col gap-6 font-akatab">
            <SectionHeading title="Our Gallery" script />

            <Reveal from="zoom" className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-javanera/10">
                <button type="button" onClick={() => setPreview(true)} aria-label="Perbesar foto" className="absolute inset-0 cursor-zoom-in">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image src={active} alt="Foto galeri" fill sizes="(max-width: 448px) 100vw, 448px" className="object-cover" />
                        </motion.div>
                    </AnimatePresence>
                </button>
            </Reveal>

            <div className="grid grid-cols-4 gap-3">
                {photos.map((src, i) => (
                    <Reveal key={src} delay={i * 0.15}>
                        <motion.button
                            onClick={() => setActive(src)}
                            animate={{ scale: active === src ? 1.05 : 1 }}
                            whileTap={{ scale: 0.92 }}
                            aria-label={`Lihat foto ${i + 1}`}
                            className={`relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer transition-opacity ${active === src ? "ring-2 ring-javanera ring-offset-2" : "opacity-70"}`}
                        >
                            <Image src={src} alt="" fill sizes="100px" className="object-cover" />
                        </motion.button>
                    </Reveal>
                ))}
            </div>

            <AnimatePresence>
                {preview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPreview(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Pratinjau foto"
                        className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
                        style={{ zIndex: 99999 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md h-[75dvh]"
                        >
                            <Image src={active} alt="Foto galeri" fill sizes="448px" className="object-contain" />
                        </motion.div>
                        <button
                            type="button"
                            onClick={() => setPreview(false)}
                            aria-label="Tutup pratinjau"
                            className="absolute top-5 right-5 size-10 rounded-full bg-white/15 text-white flex items-center justify-center cursor-pointer hover:bg-white/25"
                        >
                            <X size={22} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
