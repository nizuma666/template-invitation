"use client"
import bgFooter from "!/peach-love/bgFooter.png"
import Image from "next/image"
import Logo from "!/peach-love/Arunara.svg"
import instagram from "!/b&w/instagram.svg"
import { Globe } from "lucide-react"
import { motion, useInView, Variants } from "motion/react"
import { useRef } from "react"
export default function Section7() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1] },
        },
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="w-full relative h-[400px] overflow-hidden bg-black"
            initial="hidden"
            whileInView={isInView ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
        >
            <motion.div
                variants={container}
                className=" text-white flex flex-col gap-10 items-center justify-center py-10 px-5 text-center"
            >
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
                    <p className="font-semibold text-subheading1">
                        With Love & Gratitude
                    </p>
                    <p className="text-sm max-w-[320px] leading-relaxed">
                        We are deeply grateful for the love, prayers, and support given as we begin
                        this new chapter of our lives.
                    </p>
                </motion.div>

                <motion.div variants={scaleIn} className="flex flex-col gap-4 items-center">
                    <Image src={Logo} alt="Arunara" width={175} height={32} />
                    <p className="text-white text-sm">The Beginning of Every Beautiful Moment</p>
                    <div className="flex gap-4 items-center">
                        <motion.div
                            variants={fadeUp}
                            className="bg-white flex gap-1 items-center text-[#2C2C2C] font-semibold px-2 py-1 rounded-2xl"
                        >
                            <Image src={instagram} alt="arunara" width={18} height={18} />
                            arunara
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            className="bg-white flex gap-1 items-center text-[#2C2C2C] font-semibold px-2 py-1 rounded-2xl"
                        >
                            <Globe width={16} height={16} color="#2C2C2C" />
                            arunara.id
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}