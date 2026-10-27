"use client"
import Image from "next/image"
import { motion } from "motion/react"
import Reveal from "./reveal"

type SectionHeadingProps = {
    title: string
    light?: boolean
    script?: boolean
}

export default function SectionHeading({ title, light, script }: SectionHeadingProps) {
    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <Image src={`/javanera/section_ornamen_${light ? "putih" : "coklat"}.svg`} alt="" width={117} height={54} />
            </motion.div>
            <Reveal delay={0.3}>
                <h2 className={`text-[24px] leading-[30px] ${script ? "font-charmonman font-bold" : "font-alice"} ${light ? "text-white" : "text-[#212121]"}`}>
                    {title}
                </h2>
            </Reveal>
        </div>
    )
}
