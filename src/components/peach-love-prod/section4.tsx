/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import chip from "!/peach-love/chip.svg"
import masterCard from "!/peach-love/master-card.svg"
import { Copy } from "lucide-react"
import DebitCard from "./components/debit-card"
import { useRef } from "react"
import { useInView, motion, Variants } from "motion/react"
export default function Section4({ data }: { data: any }) {
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
        <div ref={ref} className="py-10 px-6 flex flex-col gap-10 bg-white">
            <motion.div
                variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center gap-4"
            >
                <p className="text-rose1 text-heading1 font-bold text-center text-nowrap">
                    Restu dan Tanda Cinta
                </p>
                <p className="text-neutral-text4 text-center">Kami percaya, setiap  doa yang ditulis adalah berkah. namun bila ingin turu berbagi kasih, berikut cara yang kamu sediakan:</p>
            </motion.div>

            <motion.div
                variants={cardContainerVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-4"
            >
                <motion.div variants={cardVariant}>
                    <DebitCard
                        bank={data.bank_rekening_1}
                        name={data.nama_pemilik_rekening_1}
                        bg="bg-rose1"
                        rekening={data.no_rekening_1}
                        chip={chip}
                        masterCard={masterCard}
                    />
                </motion.div>
                <motion.div variants={cardVariant}>
                    <DebitCard
                        bank={data.bank_rekening_2}
                        name={data.nama_pemilik_rekening_2}
                        bg="bg-rose2"
                        rekening={data.no_rekening_2}
                        chip={chip}
                        masterCard={masterCard}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}