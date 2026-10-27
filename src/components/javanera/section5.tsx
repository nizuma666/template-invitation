"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"
import { CaretDownIcon } from "@phosphor-icons/react"
import PatternBg from "./components/pattern_bg"
import SectionHeading from "./components/section_heading"
import Reveal from "./components/reveal"

const stories = [
    { judul: "First Meeting", cerita: "It started with a simple hello that slowly turned into conversations we never wanted to end." },
    { judul: "Getting Closer", cerita: "Days became weeks, and every shared moment made us realize we were walking the same path." },
    { judul: "Growing Together", cerita: "Love grew not from perfection, but from understanding, patience, and shared dreams." },
    { judul: "The Proposal", cerita: "With trembling hands and a full heart, one question changed everything into forever." },
    { judul: "Forever Begins", cerita: "Now we stand hand in hand, ready to begin the most beautiful chapter of our lives." },
]

// pose of the cards waiting behind the active one, as laid out in Figma
const backPoses = [
    { x: 18, y: -56, rotate: 4 },
    { x: 34, y: -42, rotate: 7 },
    { x: -26, y: -30, rotate: -5 },
]

const poseOf = (rank: number) => {
    if (rank === 0) return { x: 0, y: 0, rotate: 0, opacity: 1 }
    return { ...backPoses[Math.min(rank, 3) - 1], opacity: rank > 3 ? 0 : 1 }
}

export default function Section5() {
    const [active, setActive] = useState(0)
    const go = (i: number) => setActive((i + stories.length) % stories.length)

    return (
        <section className="relative px-6 py-14 font-akatab overflow-hidden">
            <PatternBg tone="brown" />
            <div className="relative flex flex-col items-center gap-6">
                <SectionHeading title="Our Story" light script />

                <Reveal from="zoom" className="w-full pt-16">
                    <div className="relative mx-auto w-[288px] h-[382px]">
                        {stories.map((story, i) => {
                            // cards already seen go to the back of the deck instead of leaving it
                            const rank = (i - active + stories.length) % stories.length
                            return (
                                <motion.div
                                    key={story.judul}
                                    initial={false}
                                    animate={poseOf(rank)}
                                    transition={{ type: "spring", stiffness: 160, damping: 20 }}
                                    drag={rank === 0 ? "x" : false}
                                    dragSnapToOrigin
                                    onDragEnd={(_, info) => {
                                        if (info.offset.x < -60) go(active + 1)
                                        else if (info.offset.x > 60) go(active - 1)
                                    }}
                                    style={{ zIndex: 10 - rank, pointerEvents: rank === 0 ? "auto" : "none", touchAction: "pan-y" }}
                                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                                >
                                    <div className="relative size-full bg-[#F2F5F6] border border-white rounded-2xl p-4 flex flex-col overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                                        <Image src="/javanera/bunga_bg.svg" alt="" width={120} height={237} className="absolute -right-2 top-16 opacity-10 pointer-events-none" />
                                        <div className="relative flex items-center justify-between">
                                            <p className="font-medium text-base text-[#212121]">Cerita Manis Kami</p>
                                            <span className="size-7 rounded-full bg-[#212121] text-white flex items-center justify-center">
                                                <CaretDownIcon size={14} weight="bold" />
                                            </span>
                                        </div>
                                        <h3 className="relative font-bold text-[24px] leading-[30px] text-[#212121] mt-auto">{story.judul}</h3>
                                        <p className="relative text-base leading-snug text-[#757575] mt-1">{story.cerita}</p>
                                        <div className="relative mt-11 size-20 rounded-2xl bg-[#D4916B] flex items-center justify-center font-ceviche text-[64px] leading-none text-white">
                                            {i + 1}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Reveal>

                <div className="flex gap-3.5">
                    {stories.map((story, i) => (
                        <motion.button
                            key={story.judul}
                            onClick={() => go(i)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Cerita ${i + 1}`}
                            className="relative size-12 rounded-xl bg-[#D4916B] font-ceviche text-[44px] leading-none text-white cursor-pointer"
                        >
                            {i + 1}
                            {active === i && <motion.span layoutId="story-tab" className="absolute -bottom-3 left-2 right-2 h-0.5 bg-white rounded-full" />}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    )
}
