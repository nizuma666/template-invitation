/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import chip from "!/peach-love/chip.svg"
import masterCard from "!/peach-love/master-card.svg"
import { Copy } from "lucide-react"
import DebitCard from "./components/debit-card"
import { useRef } from "react"
import { useInView, motion, Variants } from "motion/react"
export default function Section5({ content }: { content: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const textVariant: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const cardContainerVariant: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.25, delayChildren: 0.3 },
        },
    };

    const cardVariant: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
        <div ref={ref} className="py-10 px-6 flex flex-col gap-10 bg-[#FFF7EE]">
            <motion.div
                variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center gap-4"
            >
                <p className="text-green-primary text-heading1 font-bold text-center text-nowrap">
                    {content.title}
                </p>
                <p className="text-neutral-text4 text-center">{content.desc}</p>
            </motion.div>

            <motion.div
                variants={cardContainerVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-4"
            >
                {content.card.map((item: any, index: number) => (
                    <motion.div key={index} variants={cardVariant}>
                        <DebitCard
                            bank={item.bank}
                            name={item.name}
                            bg={item.background}
                            rekening={item.rekening}
                            chip={chip}
                            masterCard={masterCard}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}