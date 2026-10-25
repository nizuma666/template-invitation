"use client"
import Image from "next/image"
import { useRef, useState } from "react"
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { CaretDownIcon } from "@phosphor-icons/react"
import PatternBg from "./components/pattern_bg"
import SectionHeading from "./components/section_heading"
import Reveal from "./components/reveal"

import "swiper/css"
import "swiper/css/effect-cards"

const stories = [
    { judul: "First Meeting", cerita: "It started with a simple hello that slowly turned into conversations we never wanted to end." },
    { judul: "Getting Closer", cerita: "Days became weeks, and every shared moment made us realize we were walking the same path." },
    { judul: "Growing Together", cerita: "Love grew not from perfection, but from understanding, patience, and shared dreams." },
    { judul: "The Proposal", cerita: "With trembling hands and a full heart, one question changed everything into forever." },
    { judul: "Forever Begins", cerita: "Now we stand hand in hand, ready to begin the most beautiful chapter of our lives." },
]

export default function Section5() {
    const swiperRef = useRef<SwiperType | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="relative px-6 py-14 font-akatab overflow-hidden">
            <PatternBg tone="brown" />
            <div className="relative flex flex-col items-center gap-8">
                <SectionHeading title="Our Story" light script />

                <Reveal from="zoom" className="w-full">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        cardsEffect={{ slideShadows: false, rotate: true, perSlideRotate: 4, perSlideOffset: 10 }}
                        className="w-[300px] max-w-full"
                    >
                        {stories.map((story, i) => (
                            <SwiperSlide key={story.judul} className="rounded-2xl">
                                <div className="relative bg-white rounded-2xl p-4 h-[420px] flex flex-col overflow-hidden shadow-lg">
                                    <Image src="/javanera/bunga_bg.svg" alt="" width={120} height={237} className="absolute -right-2 top-16 opacity-10 pointer-events-none" />
                                    <div className="relative flex items-center justify-between pb-3 border-b border-[#212121]/10">
                                        <p className="font-semibold text-sm text-[#212121]">Cerita Manis Kami</p>
                                        <span className="size-6 rounded-full bg-[#212121] text-white flex items-center justify-center">
                                            <CaretDownIcon size={14} weight="bold" />
                                        </span>
                                    </div>
                                    <h3 className="relative font-alice text-[24px] text-[#212121] mt-auto">{story.judul}</h3>
                                    <p className="relative text-sm text-[#757575] leading-relaxed mt-1">{story.cerita}</p>
                                    <div className="relative mt-6 size-20 rounded-xl bg-[#C98A63] flex items-center justify-center font-ceviche text-[64px] leading-none text-white">
                                        {i + 1}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Reveal>

                <div className="flex gap-3">
                    {stories.map((story, i) => (
                        <motion.button
                            key={story.judul}
                            onClick={() => swiperRef.current?.slideTo(i)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Cerita ${i + 1}`}
                            className="relative size-12 rounded-lg bg-[#C98A63] font-ceviche text-[44px] leading-none text-white cursor-pointer"
                        >
                            {i + 1}
                            {activeIndex === i && <motion.span layoutId="story-tab" className="absolute -bottom-3 left-2 right-2 h-0.5 bg-white rounded-full" />}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    )
}
