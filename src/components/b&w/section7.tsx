"use client"
import bgFooter from "!/peach-love/bgFooter.png"
import Image from "next/image"
import Logo from "!/peach-love/Arunara.svg"
import instagram from "!/green-flag/instagram.svg"
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
            transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
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

    const overlayFade: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.8, transition: { duration: 1.2, ease: "easeInOut" } },
    };
    return (
        <motion.div
            ref={ref}
            className="w-full relative h-[400px] overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
        >
            <motion.div
                className="absolute inset-0 z-0"
                variants={fadeUp}
            >
                <Image
                    src={bgFooter}
                    alt="Arunara"
                    fill
                    className="object-cover"
                />
            </motion.div>

            <motion.div
                className="absolute inset-0 bg-[#2C4F2AE5] z-10"
                variants={overlayFade}
            ></motion.div>

            <motion.div
                variants={container}
                className="absolute inset-0 z-20 text-white flex flex-col gap-10 items-center justify-center py-10 px-5 text-center"
            >
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
                    <p className="font-semibold text-subheading1">
                        Dengan Cinta & Rasa Syukur
                    </p>
                    <p className="text-sm max-w-[320px] leading-relaxed">
                        Kami sangat berterima kasih atas kasih sayang, doa, dan dukungan yang
                        diberikan saat kami memulai babak baru kehidupan.
                    </p>
                </motion.div>

                <motion.div variants={scaleIn} className="flex flex-col gap-4 items-center">
                    <Image src={Logo} alt="Arunara" width={175} height={32} />
                    <p className="text-white text-sm">Awal dari Setiap Momen Indah</p>
                    <div className="flex gap-4 items-center">
                        <motion.div
                            variants={fadeUp}
                            className="bg-white flex gap-1 items-center text-green-primary font-semibold px-2 py-1 rounded-2xl"
                        >
                            <Image src={instagram} alt="arunara" width={18} height={18} />
                            arunara
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            className="bg-white flex gap-1 items-center text-green-primary font-semibold px-2 py-1 rounded-2xl"
                        >
                            <Globe width={16} height={16} color="#506D4F" />
                            arunara.id
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}