"use client"
import Image from "next/image"
import { motion } from "motion/react"
import Reveal from "./reveal"

type CoupleProfileProps = {
    img: string
    name: string
    label: string
    parents: string
    ornamentSide: "left" | "right"
}

export default function CoupleProfile({ img, name, label, parents, ornamentSide }: CoupleProfileProps) {
    const isRight = ornamentSide === "right"

    return (
        <div className="flex flex-col items-center text-center">
            <Reveal from={isRight ? "left" : "right"} className="relative w-[230px]">
                <Image src={img} alt={name} width={261} height={328} className="w-full h-auto" />
                {/* Outer div mirrors/positions, inner motion.div animates, so the two transforms don't fight */}
                <div className={`absolute -bottom-2 w-[88px] ${isRight ? "-right-3" : "-left-3 -scale-x-100"}`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -30 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: "bottom right" }}
                    >
                        <Image src="/javanera/section_2_ornamen_prempuan.svg" alt="" width={121} height={121} className="w-full h-auto" />
                    </motion.div>
                </div>
            </Reveal>
            <Reveal delay={0.8} className="mt-3">
                <h3 className="font-alice text-[26px] text-[#212121]">{name}</h3>
                <p className="text-sm text-[#757575] leading-relaxed mt-1 max-w-[260px]">
                    {label} {parents}
                </p>
            </Reveal>
        </div>
    )
}
