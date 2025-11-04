/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import chip from "!/green-flag/chip.svg"
import masterCard from "!/peach-love/master-card.svg"
import DebitCard from "./components/debit-card"
import { motion, Variants } from "motion/react"
export default function Section5({data}: {data: any}) {
    const giftContainerVariant: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2,
                ease: "easeOut",
            },
        },
    }

    const giftTextVariant: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const cardContainerVariant: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
            },
        },
    }

    const cardItemVariant: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    }
    return (
        <motion.div
            variants={giftContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col gap-y-10 py-10 px-6 text-white"
        >
            {/* Header Text */}
            <motion.div variants={giftTextVariant} className="flex flex-col gap-2 text-center">
                <p className="font-alice text-4xl">Your Love is the Greatest Gift</p>
                <p className="font-akatab text-subheading2">
                    If you wish to share a token of love, we’ve prepared a simple way to send your blessings.
                </p>
            </motion.div>

            {/* Debit Cards */}
            <motion.div
                variants={cardContainerVariant}
                className="flex flex-col gap-4 items-center justify-center w-full"
            >
                <motion.div
                    variants={cardItemVariant}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-full"
                >
                    <DebitCard
                        bank={data.bank_rekening_1}
                        bg="bg-[#333333]"
                        chip={chip}
                        masterCard={masterCard}
                        rekening={data.no_rekening_1}
                        name={data.nama_pemilik_rekening_1}
                    />
                </motion.div>
                <motion.div
                    variants={cardItemVariant}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-full"
                >
                    <DebitCard
                        bank={data.bank_rekening_2}
                        bg="bg-[#555555]"
                        chip={chip}
                        masterCard={masterCard}
                        rekening={data.no_rekening_w}
                        name={data.nama_pemilik_rekening_2}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}