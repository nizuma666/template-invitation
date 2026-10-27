"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import SectionHeading from "./components/section_heading"
import Reveal from "./components/reveal"

const photos = [
    "/javanera/gallery_1.webp",
    "/javanera/gallery_2.webp",
    "/javanera/gallery_3.webp",
    "/javanera/cewe_dumny.webp",
    "/javanera/cowo_dumny.webp",
]

const SWIPE_PX = 50
const COPIES = 3 // strip is rendered 3x so it can wrap around without a visible jump

export default function Section4() {
    const [index, setIndex] = useState(0)
    const [preview, setPreview] = useState(false)
    const strip = useRef<HTMLDivElement>(null)
    const thumbs = useRef<(HTMLButtonElement | null)[]>([])
    const autoScrolling = useRef(false) // normalizing mid smooth-scroll would cancel it
    const mounted = useRef(false)
    const swiped = useRef(false) // stops the tap that follows a swipe from opening the preview
    const active = photos[index]

    const go = (dir: number) => setIndex((i) => (i + dir + photos.length) % photos.length)

    // the button's offsetParent is its Reveal wrapper, so position by the wrapper
    const slotLeft = (i: number) => thumbs.current[i]?.parentElement?.offsetLeft ?? 0

    // width of one full set of thumbnails, gaps included
    const setWidth = () => slotLeft(photos.length) - slotLeft(0)

    // keep scrollLeft inside the middle copy; the copies are identical so the jump is invisible
    const normalize = () => {
        const el = strip.current, w = setWidth()
        if (!el || !w) return
        if (el.scrollLeft < w * 0.5) el.scrollLeft += w
        else if (el.scrollLeft > w * 1.5) el.scrollLeft -= w
    }

    useEffect(() => {
        // scroll only the strip, never the page; pick the copy nearest to where the strip is now
        const el = strip.current
        if (!el) return
        const target = (c: number) => {
            const t = thumbs.current[c * photos.length + index]
            return t ? slotLeft(c * photos.length + index) - (el.clientWidth - t.clientWidth) / 2 : 0
        }
        const left = mounted.current
            ? [0, 1, 2].map(target).reduce((best, t) => (Math.abs(t - el.scrollLeft) < Math.abs(best - el.scrollLeft) ? t : best))
            : target(1)
        autoScrolling.current = true
        el.scrollTo({ left, behavior: mounted.current ? "smooth" : "auto" })
        mounted.current = true
        const t = setTimeout(() => { autoScrolling.current = false; normalize() }, 700)
        return () => clearTimeout(t)
    }, [index])

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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onPanEnd={(_, { offset }) => {
                            if (Math.abs(offset.x) > SWIPE_PX) {
                                swiped.current = true
                                go(offset.x < 0 ? 1 : -1)
                            }
                        }}
                        onTap={() => {
                            if (swiped.current) swiped.current = false
                            else setPreview(true)
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label="Perbesar foto"
                        onKeyDown={(e) => e.key === "Enter" && setPreview(true)}
                        className="absolute inset-0 cursor-zoom-in touch-pan-y"
                    >
                        <Image src={active} alt="Foto galeri" fill sizes="(max-width: 448px) 100vw, 448px" quality={90} draggable={false} className="object-cover pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </Reveal>

            <div
                ref={strip}
                onScroll={() => !autoScrolling.current && normalize()}
                className="relative flex gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain p-2 -m-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {Array.from({ length: COPIES }, (_, c) => photos.map((src, i) => (
                    <Reveal key={`${c}-${src}`} delay={i * 0.15} className="shrink-0 basis-[calc((100%-36px)/4)]">
                        <motion.button
                            ref={(el) => { thumbs.current[c * photos.length + i] = el }}
                            onClick={() => setIndex(i)}
                            animate={{ scale: index === i ? 1.05 : 1 }}
                            whileTap={{ scale: 0.92 }}
                            aria-label={`Lihat foto ${i + 1}`}
                            aria-hidden={c !== 1}
                            tabIndex={c === 1 ? 0 : -1}
                            className={`relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer transition-opacity ${index === i ? "ring-2 ring-javanera ring-offset-2" : "opacity-70"}`}
                        >
                            <Image src={src} alt="" fill sizes="120px" quality={85} className="object-cover" />
                        </motion.button>
                    </Reveal>
                )))}
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
                            <Image src={active} alt="Foto galeri" fill sizes="448px" quality={90} className="object-contain" />
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
