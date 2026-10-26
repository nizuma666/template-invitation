"use client"
import Image from "next/image"
import { motion } from "motion/react"
import Reveal from "./components/reveal"
import CoupleProfile from "./components/couple_profile"

export default function Section2() {
    return (
        <section id="1" className="relative px-6 py-14 flex flex-col items-center text-center font-akatab">
            <Reveal>
                <h2 className="font-alice text-[22px] text-[#212121]">Assalamualaikum Wr. Wb.</h2>
                <p className="text-sm text-[#757575] leading-relaxed mt-3">
                    Dengan memohon Rahmat dan Ridho Allah SWT, Kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami
                </p>
            </Reveal>

            <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 mb-8"
            >
                <Image src="/javanera/section_ornamen_coklat.svg" alt="" width={78} height={36} />
            </motion.div>

            <CoupleProfile
                img="/javanera/cewe_dumny.webp"
                name="Sari Wulandari"
                label="Putri Kedua dari"
                parents="Bapak H. Ahmad Fauzi dan Ibu Hj. Nurhayati"
                ornamentSide="right"
            />

            <motion.p
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 110, damping: 14 }}
                className="font-alice text-[48px] text-javanera my-6"
            >
                &
            </motion.p>

            <CoupleProfile
                img="/javanera/cowo_dumny.webp"
                name="Supri Hartono"
                label="Putra Pertama dari"
                parents="Bapak Suryadi dan Ibu Sumarni"
                ornamentSide="left"
            />
        </section>
    )
}
